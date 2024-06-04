import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import classes from './SliderGallery.module.css';


function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={`${classes.customArrow} ${classes.nextArrow}`}
      onClick={onClick}
      style={{ ...style }}
    >
      <AiOutlineArrowRight className={classes.arrowIconNext}/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={`${classes.customArrow} ${classes.prevArrow}`}
      onClick={onClick}
      style={{ ...style }}
    >
      <AiOutlineArrowLeft className={classes.arrowIconPrev}/>
    </div>
  );
}

export function SliderGallery() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:8000/data')
      .then(response => {
        setImages(response.data);
        setFilteredImages(response.data);
        const uniqueYears = [...new Set(response.data.map(img => img.year))];
        setYears(['All', ...uniqueYears]);
      });
  }, []);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    if (year === 'All') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.year === year));
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={classes.slider_container}>
      <div className={classes.filter}>
        <select onChange={(e) => handleYearChange(e.target.value)} value={selectedYear}>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className={classes.slider}>
        <Slider {...settings}>
          {filteredImages.map(image => (
            <div key={image.id} className={classes.slide}>
              <img src={image.url} alt={image.title} className={classes.slide_image}/>
              <div className={classes.slide_caption}>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
