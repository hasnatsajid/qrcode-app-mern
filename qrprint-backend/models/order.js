const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    firstName: {type: String,required: true},
    lastName: {type: String,required: true},
    email: {type: String,required: true},
    phone: {type: String,required: true},
    country: {type: String,required: true},
    city: {type: String,required: true},
    state: {type: String,required: true},
    zipCode: {type: String,required: true},
    address: {type: String,required: true},
    amount: {type: String,required: true},
    qrImageLink: {type: String,required: true},
    paymentId: {type: String,required: true},
    status: {type: String,required: true,enum:["paid","shipped","deliverd","completed"]}
  },
  { timestamps: true }
);

module.exports = mongoose.model('order', orderSchema);