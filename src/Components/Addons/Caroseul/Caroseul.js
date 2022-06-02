import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';
import './Caroseul.scss'

export default function Caroseul() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };


      
        return (
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null} >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.immediate.co.uk/production/volatile/sites/7/2021/02/GettyImages-119505258-20a15e9.jpg?quality=90&resize=980,654"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className='black'><mark>First slide label</mark></h3>
                <p><mark>Nulla vitae elit libero, a pharetra augue mollis interdum.</mark></p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.immediate.co.uk/production/volatile/sites/7/2021/02/GettyImages-119505258-20a15e9.jpg?quality=90&resize=980,654"
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3><mark>Second slide label</mark></h3>
                <p><mark>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mark></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.immediate.co.uk/production/volatile/sites/7/2021/02/GettyImages-119505258-20a15e9.jpg?quality=90&resize=980,654"
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h3><mark>Third slide label</mark></h3>
                <p>
                <mark>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</mark>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      
  
}
