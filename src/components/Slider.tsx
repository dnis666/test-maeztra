import React, { useState } from 'react';

import './Slider.css'

import Prev from "../assets/icon-prev.svg"
import Next from "../assets/icon-next.svg"

interface SliderProps {
    images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
    const [index, setIndex] = useState(0);

    const goPrevious = () => {
        const newIndex = index - 1;
        if (newIndex < 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(newIndex);
        }
    };

    const goNext = () => {
        setIndex((index + 1) % images.length);
    };

    const handleDotClick = (idx: number) => {
        setIndex(idx);
    };

    return (
        <div className='slider'>
            <button className='previous' onClick={goPrevious}>
                <img src={Prev} alt='Prev'></img>
            </button>
            <img src={images[index]} alt="Slider" />
            <button className='next' onClick={goNext}>
                <img src={Next} alt='Next'></img>
            </button>
            <div className='dots'>
                {images.map((_image, idx) => (
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
