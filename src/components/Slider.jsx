import React, {useState} from 'react';
import arrowLeft from "../asset/images/ArrowLeft.png"
import arrowRight from "../asset/images/ArrowRight.png"

const Slider = ({pictures}) => {
    const [slide,setSlide] = useState(0)
    const currentSlide = pictures[slide]

    const clickNext = () => {
      const lastSlide =  slide === pictures.length-1
        const newSlide = lastSlide ? 0 : slide+1
        setSlide(newSlide)
    }

    const clickPrevious = () => {
      const firstSlide = slide === 0
        const newSlide = firstSlide ? pictures.length-1 : slide-1
        setSlide(newSlide)
    }
    return (
        <div className="slider">
            <img className="slider-image" src={currentSlide} alt="image de logement"/>
            {pictures.length > 1 ? (
                <>
                    <button className="slider-arrow slider-arrow--left" onClick={clickPrevious}>
                        <img src={arrowLeft} alt="fleche gauche"/>
                    </button>
                    <button className="slider-arrow slider-arrow--right" onClick={clickNext}>
                        <img src={arrowRight} alt="fleche droite"/>
                    </button>
                    <p className="slider-count">{slide + 1}/{pictures.length}</p>
                </>
            ) : ("")}
        </div>
    );
};

export default Slider;
