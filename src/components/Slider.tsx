import React, { useState } from 'react';

import './Slider.css'

import Prev from "../assets/icon-prev.svg"
import Next from "../assets/icon-next.svg"

interface Slide {
    imageUrl: string;
    title: string;
    text: string;
    buttonAction: () => void;
}

interface SliderProps {
    slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
    const [index, setIndex] = useState(0);

    const goPrevious = () => {
        const newIndex = index - 1;
        if (newIndex < 0) {
            setIndex(slides.length - 1);
        } else {
            setIndex(newIndex);
        }
    };

    const goNext = () => {
        setIndex((index + 1) % slides.length);
    };

    const handleDotClick = (idx: number) => {
        setIndex(idx);
    };

    return (
        <div className='slider'>
            <button className='previous' onClick={goPrevious}>
                <img src={Prev} alt='Prev'></img>
            </button>
            <div className="slide-content">
                <img src={slides[index].imageUrl} alt="Slide" />
                <h2>{slides[index].title}</h2>
                <p>{slides[index].text}</p>
                <button className="btn-slider" onClick={slides[index].buttonAction}>Conferir</button>
            </div>
            <button className='next' onClick={goNext}>
                <img src={Next} alt='Next'></img>
            </button>
            <div className='dots'>
                {slides.map((_slide, idx) => (
                    <div 
                        key={idx} 
                        className={`dot ${idx === index ? 'active' : ''}`} 
                        onClick={() => handleDotClick(idx)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
