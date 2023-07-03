import Slider from './Slider';

import Img1 from '../assets/img-slider-mobile-01.png'
import Img2 from '../assets/img-slider-mobile-02.png'


const SliderComponent = () => {
    const images = [
        Img1, Img2
    ];

    return (
        <div>
            <Slider images={images} />
        </div>
    );
};

export default SliderComponent