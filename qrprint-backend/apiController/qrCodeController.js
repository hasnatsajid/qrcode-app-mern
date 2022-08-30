const qrcodeModel = require('../models/qrcode');
const qrcode = require('wifi-qr-code-generator')
const { qrCode } = require('../validators/qrCode');
var fs = require("fs");

//Registration
exports.qrcode_post = async (req, res) => {
  const { error } = qrCode(req.body);
  if (error) return res.status(404).json({ status: false, message:error });

const pr = qrcode.generateWifiQRCode({
     ssid: req.body.ssid,
     password: req.body.password,
     encryption: req.body.encryption,
     hiddenSSID: req.body.hiddenSSID,
     outputFormat: { type: 'image/png' }
})
     pr.then(async (data) => {
          let imgName =  Date.now()
          let filename = "/public/qrCodeImages/"+imgName+".png";
          let file = "./public/qrCodeImages/"+imgName+".png";
          fs.writeFile(file, data.replace(/^data:image\/png;base64,/, ""), 'base64', function(err) {
               console.log("Error",err);
          });
          await new qrcodeModel({
               ssid: req.body.ssid,
               password: req.body.password,
               encryption: req.body.encryption,
               hiddenSSID: req.body.hiddenSSID,
               image: filename
          }).save();
          return res.status(200).json({ status: true, file:filename });
     }
)
};

