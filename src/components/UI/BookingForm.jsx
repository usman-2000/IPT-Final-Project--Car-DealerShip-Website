import React from 'react'
import '../../styles/booking-form.css'

const BookingForm = (props) => {
  const { model, carName, automatic, speed, price } = props.item;

  return (
    <div>
      <ul>
        <li>{model}</li>
        <li>{carName}</li>
        <li>{automatic}</li>
        <li>{speed}</li>
        <li>{price}</li>
        
      </ul>
    </div>
  )
}

export default BookingForm