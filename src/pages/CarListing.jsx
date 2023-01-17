import React,{useState} from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
// import CarItem from "../components/UI/CarItem";
// import carData from "../assets/data/carData";
import { carList } from "../pages/carList";
import Table from 'react-bootstrap/Table'
import '../styles/carListing.css'

const CarListing = () => {
  const [search, setSearch] = useState('')
  console.log(search)

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section className='car_list'>
        <Container>
          <Row>
            <Col lg="12">
              {/* <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">New Cars</option>
                  <option value="high">Used Cars</option>
                </select>
              </div> */}
            </Col>

            {/* {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))} */}
          </Row>
        </Container>
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
            </tr>

          </thead>
          <tbody>

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
      </section>
    </Helmet>
  );
};

export default CarListing;
