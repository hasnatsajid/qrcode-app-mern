const qrcodeModel = require('../models/qrcode');
const qrcode = require('wifi-qr-code-generator')
const { qrCode } = require('../validators/qrCode');
var fs = require("fs");

module.exports.newqrcode_get = async (req, res) => {
     res.render('qrcode/new');
};

//Generate Qr Code
module.exports.qrcode_post = async (req, res) => {
  const { error } = qrCode(req.body);
  if (error) return req.flash('success_msg', error);

const pr = qrcode.generateWifiQRCode({
     ssid: req.body.ssid,
     password: req.body.password,
     encryption: req.body.encryption,
     hiddenSSID: req.body.hiddenSSID,
     outputFormat: { type: 'image/png' }
})
     pr.then(async (data) => {
          let imgName =  Date.now()
          let filename = "/qrCodeImages/"+imgName+".png";
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
          req.flash('success_msg', 'Generated Sucessfully');
          res.render('qrcode/generated',{filename});
     }
)
};

