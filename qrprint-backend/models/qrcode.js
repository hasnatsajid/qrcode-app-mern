const mongoose = require('mongoose');
const { Schema } = mongoose;

const qrCodeSchema = new Schema(
  {
    ssid: {type: String,required: true},
    password: {type: String,required: true},
    encryption: {type: String,required: true},
    hiddenSSID: {type: Boolean,required: true},
    image:{type: String,required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model('qrcode', qrCodeSchema);
