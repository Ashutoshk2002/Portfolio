import React from 'react';
import "./portfolio.css";
import { Swiper, SwiperSlide } from 'swiper/react'
import Todo from "../../img/todolist.png"
import blog from "../../img/blog.png"
import clone from "../../img/clone.png"
import weather from "../../img/weather.png"
import usability from "../../img/usabilityhub1.png"
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css'
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
        <SwiperSlide><a href='https://github.com/Ashutoshk2002/GoogleKeeper' target='_blank'><img src={clone} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://github.com/Ashutoshk2002/Blog-Website" target='_blank'><img src={blog} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://github.com/Ashutoshk2002/To-Do-List-using-EJS" target='_blank'><img src={Todo} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://github.com/Ashutoshk2002/Weather-Website" target='_blank'><img src={weather} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://github.com/Ashutoshk2002/UsabilityHub-Site-Clone" target='_blank'><img src={usability} alt="" /></a></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
