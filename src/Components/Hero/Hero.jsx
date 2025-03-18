import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Hero.css";
import { handleChatClick} from "../../utils/WhatsApp";
/*images*/
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

const Hero = () => {
  return (
    <Swiper
      className="hero_slider"
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 5000 }}
      loop
    >
      {/* First Slide */}
      <SwiperSlide>
        <div
          className="hero_slide"
          style={{ backgroundImage: `url(${hero1})` }}
        >
          <div className="hero_content">
            <h3> Reliable Oil Transport Solutions</h3>
            <h4>Safe and efficient fuel & oil transportation.</h4>
            <button className="quote_button" onClick={handleChatClick}>GET A FREE QUOTE</button>
          </div>
        </div>
      </SwiperSlide>

      {/* Second Slide */}
      <SwiperSlide>
        <div
          className="hero_slide"
          style={{ backgroundImage: `url(${hero2})` }}
        >
          <div className="hero_content">
            <h3> Secure School Transport Services</h3>
            <h4>Ensuring safe and punctual student commutes</h4>
            <button className="quote_button" onClick={handleChatClick}>GET A FREE QUOTE</button>
          </div>
        </div>
      </SwiperSlide>

      {/* Third Slide */}
      <SwiperSlide>
        <div
          className="hero_slide"
          style={{ backgroundImage: `url(${hero3})` }}
        >
          <div className="hero_content">
            <h3>Efficient Staff Transportation</h3>
            <h4>Seamless corporate and workforce mobility.</h4>
            <button className="quote_button" onClick={handleChatClick}>GET A FREE QUOTE</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
