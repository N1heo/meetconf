import React from "react";
import classes from "./MainPage.module.css";
import { SliderMeets } from "../../components/sliderMeets/SliderMeets";
import { SliderLogos } from "../../components/sliderLogos/SliderLogos";
import { SliderGallery } from "../../components/sliderGallery/SliderGallery";



export function MainPage() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.main}>
                
                {/* header */}
                <div className={classes.header}>
                    <div className={classes.header_inner}>
                        <div className={classes.container}>
                            <div className={classes.header_text}>
                                <div className={classes.header_content}>
                                    <h1>Meet Conference</h1>
                                    <p>Meet Conference is a multifaceted event that brings
                                        together students, scientists, and professionals to
                                        exchange knowledge and innovations. It includes
                                        conferences (MEET.STUDENTS and MEET.SCIENCE),
                                        engaging talks (MEET.TALKING), and an exhibition of
                                        innovative projects (MEET.EXPO).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider of logo */}
                <div className={classes.logos}>
                    <div className={classes.container}>
                        <SliderLogos/>
                    </div>
                </div>
                
                {/* Slider of Meets */}
                <div className={classes.meets} id="meets">
                    <div className={classes.meets_inner}>
                        <SliderMeets/>
                    </div>
                </div>
                
                {/* Slider of Gallery */}
                <div className={classes.gallery} id="gallery">
                    <div className={classes.container}>
                        <SliderGallery/>
                    </div>
                </div>
            </div>
        </div>
    );
}