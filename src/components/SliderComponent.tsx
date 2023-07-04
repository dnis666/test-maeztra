import Slider from './Slider';

import Img1Desktop from '../assets/img-slider-desktop-01.png';
import Img1Mobile from '../assets/img-slider-mobile-01.png';
import Img2Desktop from '../assets/img-slider-desktop-02.png';
import Img2Mobile from '../assets/img-slider-mobile-02.png';

import { useState, useEffect } from 'react';

const SliderComponent = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const slides = [
        {
            imageUrlDesktop: Img1Desktop,
            imageUrlMobile: Img1Mobile,
            title: 'Promoções de Outono',
            text: 'Confiras os melhores looks para combinar com você nesse Outono',
            buttonAction: () => console.log('Clicked button in Slide 1'),
        },
        {
            imageUrlDesktop: Img2Desktop,
            imageUrlMobile: Img2Mobile,
            title: 'Promoções de Inverno',
            text: 'Confiras os melhores looks para combinar com você nesse Inverno',
            buttonAction: () => console.log('Clicked button in Slide 2'),
        }
    ];

    const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
        }
    }, []);

    return (
        <div>
            <Slider slides={slides} isMobile={isMobile} />
        </div>
    );
};

export default SliderComponent;
