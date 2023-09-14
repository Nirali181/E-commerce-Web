import React from 'react'
import sliderImage from "../Assets/Images/image 15.png"
import "./slider.scss"
const Slider = () => {
  return (
    <div className='slider-container'>
        <img src={sliderImage} alt="slider-image" className='slider-image'/>
    </div>
  )
}

export default Slider