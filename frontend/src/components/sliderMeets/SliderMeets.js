import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './SliderMeets.module.css';
import expo from './img/expo.jpeg';
import students from './img/students.jpeg';
import talking from './img/talking.jpeg';
import science from './img/science.jpeg';
import awards from './img/awards.jpeg';
import { MdExpandLess } from "react-icons/md"; 
import { NavLink } from 'react-router-dom';


function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className={`${classes.customArrow} ${classes.nextArrow}`}
            onClick={onClick}
            style={{ ...style }}
        >
            <MdExpandLess className={classes.arrowIconNext} />
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
            <MdExpandLess className={classes.arrowIconPrev} />
        </div>
    );
}

export function SliderMeets() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const slidesData = [
        {
            title: "MEET.STUDENTS",
            description: "A special conference for students to showcase their research, innovation and ideas in the fields of medicine, engineering, education and technology.",
            buttonText: "Join us",
            imgSrc: students,
        },
        {
            title: "MEET.SCIENCE",
            description: "Scientific conference with presentations, workshops and discussions on cutting-edge research and development in various fields.",
            buttonText: "Join us",
            imgSrc: science,
        },
        {
            title: "MEET.TALKING",
            description: "An exciting session in the Science Slam format, a non-academic form of scientific communication, is a competition in the form of short speeches by scientists with stories about their scientific research in popular science form on interesting scientific topics, including those created using artificial intelligence.",
            buttonText: "Join us",
            imgSrc: talking,
        },
        {
            title: "MEET.EXPO",
            description: "An exhibition showcasing innovative projects, products and services in the fields of medicine, engineering, education and technology, providing participants with the opportunity to gain hands-on experience and network.",
            buttonText: "Join us",
            imgSrc: expo,
        },
        {
            title: "MEET.AWARDS",
            description: "An awards ceremony celebrating outstanding achievements and contributions in the fields of medicine, engineering, education, and technology. The event aims to recognize and honor individuals and teams who have demonstrated exceptional innovation, research, and impact in their respective areas.",
            buttonText: "Join us",
            imgSrc: awards,
        },
        // Add more slides as needed
    ];

    return (
        <Slider {...settings}>
            {slidesData.map((slide, index) => (
                <div key={index} className={classes.slide}>
                    <div className={classes.slide_content}>
                        <div className={classes.text_column}>
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>
                            <NavLink to='/register' className={classes.navlink}>{slide.buttonText}</NavLink>
                        </div>
                        <div className={classes.image_column}>
                            <img src={slide.imgSrc} alt={slide.title}/>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};