import React from "react";
import Slider from "react-slick";
import classes from "./SliderLogos.module.css";
import alatoo from "./img/alatoo.png";
import kgma from "./img/kgma.png"



export function SliderLogos() {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
    };

    return (
        <div className={classes.slider_container}>
            <Slider {...settings}>
                <div className={classes.logo}>
                    <img src={alatoo} alt="alatoo"/>
                </div>
                <div className={classes.logo}>
                    <img src={kgma} alt="kgma"/>
                </div>
                <div className={classes.logo}>
                    <img src={alatoo} alt="alatoo"/>
                </div>
                <div className={classes.logo}>
                    <img src={kgma} alt="kgma"/>
                </div>
            </Slider>
        </div>
    );
}