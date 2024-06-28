const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  serviceType: String,
  services: String,
  price: mongoose.Decimal128,
  duration: Number
});
module.exports=mongoose.model('service',serviceSchema)
