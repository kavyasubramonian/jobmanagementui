import React from 'react';
import {Carousel} from 'react-bootstrap';
import './CarouselMain.css';

const CarouselMain = () =>{
    return(
<center>
<div className="row mt-5">
<Carousel>
<Carousel.Item>
<img
  className="d-block w-100"
  src="https://www.laptoproute.com/wp-content/uploads/2020/03/Best-Thunderbolt-3-Laptop-1500x500.jpg"
  alt="First slide"
/>
<Carousel.Caption>
  <h1>Sign up.</h1>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  className="d-block w-100"
  src="https://www.laptoproute.com/wp-content/uploads/2019/07/Best-Laptop-for-Drawing-1500x500.jpg"
  alt="Second slide"
/>

<Carousel.Caption>
  <h1>Upload your resume.</h1>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  className="d-block w-100"
  src="https://chamberbusinessnews.com/wp-content/uploads/2019/10/shaking_hands-1500x500.jpg"
  alt="Third slide"
/>

<Carousel.Caption>
  <h1>Get hired.</h1>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
</center>);

}

export default CarouselMain;