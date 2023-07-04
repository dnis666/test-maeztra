import Slider from './Slider';

import Img1 from '../assets/img-slider-mobile-01.png';
import Img2 from '../assets/img-slider-mobile-02.png';

const SliderComponent = () => {
    const slides = [
        {
            imageUrl: Img1,
            title: 'Promoções de Outono',
            text: 'Confiras os melhores looks para combinar com você nesse Outono',
            buttonAction: () => console.log('Clicked button in Slide 1'),
        },
        {
            imageUrl: Img2,
            title: 'Promoções de Inverno',
            text: 'Confiras os melhores looks para combinar com você nesse Inverno',
            buttonAction: () => console.log('Clicked button in Slide 2'),
        }
    ];

    return (
        <div>
            <Slider slides={slides} />
        </div>
    );
};

export default SliderComponent;
