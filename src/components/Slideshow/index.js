import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  
  function PictureSlideshow() {
    return (
      <Slider {...settings}>
        <div className='justify-center'>
          <img className='object-center min-l-full' src="biltmore.jpeg" alt="Slide 1" />
        </div>
        <div>
          <img className='object-center min-l-full' src="Regal-Biltmore.jpeg" alt="Slide 2" />
        </div>
        <div>
          <img src="building.jpeg" alt="Slide 3" />
        </div>
      </Slider>
    );
  }
  
  export default PictureSlideshow;
