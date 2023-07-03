import React, { useState } from 'react';

import './Slider.css'

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

    return (
        <div className='slider'>
            <button className='previous' onClick={goPrevious}>Previous</button>
            <img src={images[index]} alt="Slider" />
            <button className='next' onClick={goNext}>Next</button>
        </div>
    );
};

export default Slider