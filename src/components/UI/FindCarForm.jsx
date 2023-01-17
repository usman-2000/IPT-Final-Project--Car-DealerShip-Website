import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Make" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Model" required />
        </FormGroup>

        <FormGroup className="form__group">
          <label htmlFor="">Color</label>
          <input type="color" placeholder="Color" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="number"
            placeholder="Horse Power"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <label htmlFor=""> Price</label>
          <select>
            <option value="ac">$50 - $100</option>
            <option value="non-ac">$100 - $150</option>
            <option value="non-ac">$150 - $200</option>
            <option value="non-ac">$200 - $250</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
