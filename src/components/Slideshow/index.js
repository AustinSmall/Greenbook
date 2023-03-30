import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  
  function PictureSlideshow() {
    return (
      <Slider {...settings}>
        <div>
          <img className='object-center' src="biltmore.jpeg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/500x250.png?text=Slide+2" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/500x250.png?text=Slide+3" alt="Slide 3" />
        </div>
      </Slider>
    );
  }
  
  export default PictureSlideshow;
