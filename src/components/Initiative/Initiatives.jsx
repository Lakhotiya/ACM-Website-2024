import React, { useState } from "react";
import "./initiative.css";

const slides = [
    { image: "21days.png", heading: "21 Days of Code", description: "We launched 21 Days of Code to promote the environment for competitive programming and instil coding as second nature and a daily habit for 21 regular days." },
    { image: "codeany.png", heading: "Code Anytime", description: "Code Anytime is our round-the-year initiative to encourage free-spirited coding among beginners to amplify their passion for programming." },
    { image: "hourofcode.png", heading: "Hour of Code", description: "The CSR team puts their words to action, and brings smiles across the faces of the underprivileged society. The team makes the activities as interactive as possible." }
];

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = (direction) => {
        setCurrentSlide((prevIndex) => {
            const newIndex = (prevIndex + direction + slides.length) % slides.length;
            return newIndex;
        });
    };

    return (
        <div className="main-initiatives" style={{marginTop : 20}}>
            <div className="slider-container">
                <div className="arrow left-arrow" onClick={() => changeSlide(-1)}>
                    &#10094;
                </div>

                <div className="main-div">
                    {/* First div: Image */}
                    <div className="left-div">
                        <img src={slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`} />
                    </div>

                    {/* Second div: Heading */}
                    <div className="middle-div">
                        <h1>{slides[currentSlide].heading}</h1>
                    </div>

                    {/* Third div: Content/Description */}
                    <div className="right-div">
                        <p>{slides[currentSlide].description}</p>
                    </div>
                </div>

                <div className="arrow right-arrow" onClick={() => changeSlide(1)}>
                    &#10095;
                </div>
            </div>
        </div>
    );
}

export default App;
