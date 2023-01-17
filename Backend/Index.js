const connectionString =
  "mongodb+srv://usmanrahim:qwezxc123@cluster0.adlzhma.mongodb.net/?retryWrites=true&w=majority";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const carModel = require("./models/cars");
const cors = require("cors")

app.use(express.json());
app.use(cors())
mongoose
  .connect(connectionString)
  .then((res) => console.log("database is connected"))
  .catch((error) => console.log(`db error${error}`));

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.post("/api/cars", (request, response) => {
  const {
    brand,
    rating,
    carName,
    imgUrl,
    model,
    price,
    speed,
    gps,
    seatType,
    automatic,
    description,
  } = request.body;

  if (
    !brand ||
    !rating ||
    !carName ||
    !imgUrl ||
    !model ||
    !price ||
    !speed ||
    !gps ||
    !seatType ||
    !automatic ||
    !description
  ) {
    response.json({
      message: "Required fields are missing",
      status: false,
    });
  }

  const objToSend = {
    brand,
    rating,
    car_name: carName,
    img_url: imgUrl,
    model,
    price,
    speed,
    gps,
    seat_type: seatType,
    automatic,
    description,
  };

  carModel.create(objToSend, (error, data) => {
    if (error) {
      response.json({
        message: `Internal error ${error}`,
        status: false,
      });
    } else {
      response.json({
        message: "car successfully posted",
        data: data,
        status: true,
      });
    }
  });
});

app.get("/api/cars", async (request, response) => {
  const allCars = await carModel.find({});
  response.json({
    message: "Data found",
    data: allCars,
    status: true,
  });
});

app.listen(PORT, () => console.log(`server running at PORT ${PORT}`));
