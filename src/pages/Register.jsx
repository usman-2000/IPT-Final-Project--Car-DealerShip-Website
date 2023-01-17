import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export default function Register() {
  const [carDetails, setCarDetails] = useState({});
  const [posts, setPosts] = useState({});

  const addPosts = () => {
    axios
      .post("http://localhost:5000/api/cars", carDetails)
      .then(function (response) {
        setPosts(carDetails);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <TextField
        id="standard-basic"
        label="Brand"
        variant="standard"
        onChange={(e) => {
          setCarDetails({
            ...carDetails,
            brand: e.target.value,
          });
        }}
      />
      <TextField
        id="standard-basic"
        label="Rating"
        type="number"
        variant="standard"
        onChange={(e) => {
          setCarDetails({
            ...carDetails,
            rating: e.target.value,
          });
        }}
      />
      <TextField
        id="standard-basic"
        label="Car Name"
        variant="standard"
        onChange={(e) => {
          setCarDetails({
            ...carDetails,
            carName: e.target.value,
          });
        }}
      />
      <TextField
        id="standard-basic"
        label="Car Image URL"
        variant="standard"
        onChange={(e) => {
          setCarDetails({
            ...carDetails,
            imgUrl: e.target.value,
          });
        }}
      />
      <TextField
        id="standard-basic"
        label="Model"
        variant="standard"
        onChange={(e) => {
          setCarDetails({
            ...carDetails,
            model: e.target.value,
          });
        }}
      />
      <TextField
        id="standard-basic"
        label="Price"
        variant="standard"
        onChange={(e) => {
          setCarDetails({
            ...carDetails,
            price: e.target.value,
          });
        }}
      />
      <TextField
        id="standard-basic"
        label="Speed"
        variant="standard"
        onChange={(e) => {
          setCarDetails({
            ...carDetails,
            speed: e.target.value,
          });
        }}
      />
      <TextField
        id="standard-basic"
        label="gps"
        variant="standard"
        onChange={(e) => {
          setCarDetails({
            ...carDetails,
            gps: e.target.value,
          });
        }}
      />
      <TextField
        id="standard-basic"
        label="Seat Type"
        variant="standard"
        onChange={(e) => {
          setCarDetails({
            ...carDetails,
            seatType: e.target.value,
          });
        }}
      />
      <TextField
        id="standard-basic"
        label="Automatic"
        variant="standard"
        onChange={(e) => {
          setCarDetails({
            ...carDetails,
            automatic: e.target.value,
          });
        }}
      />
      <TextField
        id="standard-basic"
        label="Description"
        variant="standard"
        onChange={(e) => {
          setCarDetails({
            ...carDetails,
            description: e.target.value,
          });
        }}
      />
      <br />
      <br />

      <Button variant="contained" onClick={addPosts}>
        Post
      </Button>
    </div>
  );
}
