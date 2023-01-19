import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
// import Header_new from '../components/Header/Header_new'
import { carList } from "../pages/carList";
import Table from 'react-bootstrap/Table'



export default function Register() {
  const [carDetails, setCarDetails] = useState({});
  const [posts, setPosts] = useState({});

  
  const [search, setSearch] = useState('')
    console.log(search)
  

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
  const showPosts = () => {
    axios
      .get("http://localhost:5000/api/cars", carDetails).then((response) => {
        setPosts(carDetails)})
      .then((res) => {
          console.log(res);
      })
      .catch((err) => {
          console.log(err);
      });
  }
  

  const mystyle = {
    margin: "20px",
    
    padding: "20px",
    
  };
  // const CarListing = () => {
  //   const [search, setSearch] = useState('')
  //   console.log(search)
  return (
    
      <div style={mystyle}>
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
          label="Make"
          
          variant="standard"
          onChange={(e) => {
            setCarDetails({
              ...carDetails,
              make: e.target.value,
            });
          }}
        />
        <TextField
          id="standard-basic"
          label="Color"
          variant="standard"
          onChange={(e) => {
            setCarDetails({
              ...carDetails,
              color: e.target.value,
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
          label="Engine"
          variant="standard"
          onChange={(e) => {
            setCarDetails({
              ...carDetails,
              engine: e.target.value,
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
        
        <form action="" className='car-search-input'>
          <input type="text" className='car-input' placeholder='Search Cars' onChange={(e) => setSearch(e.target.value)} />
        </form>
        <Table className='car-list-table'>
          <thead>
            <tr>
              
              <th className='car-table-header'>Model</th>
              <th className='car-table-header'>Vehicle Make</th>
              <th className='car-table-header'>Color</th>
              <th className='car-table-header'>Price</th>
              <th className='car-table-header'>Engine</th>
              <th className='car-table-header'>Speed</th>
              <th className='car-table-header'>Gps</th>
              <th className='car-table-header'>SeatType</th>
              <th className='car-table-header'>Automatic</th>
              <th className='car-table-header'>Description</th>
              
            </tr>

          </thead>
          <tbody>
          {/* {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))} */}

{carList.filter((item) => {
              return search.toLowerCase() === '' ? item :item.Model.toLowerCase().includes(search)
            }).map((item) => (
              <tr key={item.id}>
                
                <td>{item.Model}</td>
                <td> {item.Vehicle_Make}</td>
                <td>{item.Color}</td>
                <td>{item.Price}</td>
                <td>{item.Engine}</td>
              </tr>
            ))}
            
            
          </tbody>
        </Table>
        
      </div>
  );
}
