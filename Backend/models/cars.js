const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  brand: String,
  rating: Number,
  car_name: String,
  img_url: String,
  model: String,
  price: Number,
  speed: String,
  gps: String,
  seat_type: String,
  automatic: String,
  description: String,
});

const carModel = mongoose.model("car", carSchema);

module.exports = carModel;
