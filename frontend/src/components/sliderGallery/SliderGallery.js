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
    axios.get('http://127.0.0.1:8000/api/gallery/images/')
      .then(response => {
        const data = response.data.results;
        setImages(data);
        setFilteredImages(data);
        const uniqueYears = ['All', ...new Set(data.map(img => img.year))];
        setYears(uniqueYears);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  useEffect(() => {
    console.log("Selected Year:", selectedYear);
    console.log("All Images:", images);
    if (selectedYear === 'All') {
      setFilteredImages(images);
    } else {
      const filtered = images.filter(img => String(img.year) === selectedYear);
      console.log("Filtered Images:", filtered);
      setFilteredImages(filtered);
    }
  }, [selectedYear, images]);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const calculateSlidesToShow = (numberOfImages) => {
    if (numberOfImages <= 1) {
      return numberOfImages;
    } else {
      return 1;
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: calculateSlidesToShow(filteredImages.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

      {filteredImages.length > 0 && (
        <div className={classes.slider}>
          <Slider {...settings}>
            {filteredImages.map(image => (
              <div key={image.id} className={classes.slide}>
                <img src={image.image} alt={image.name} className={classes.slide_image}/>
                <div className={classes.slide_caption}>
                  <h3>{image.name}</h3>
                  <p>{image.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
