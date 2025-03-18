import React from "react";
import "../Services/Services.css";
import firstservice from "../../assets/oil.jpg";
import secondservice from "../../assets/school.jpg";
import thirdservice from "../../assets/staff.jpg";
import fourthservice from "../../assets/city.jpg";
import { handleChatClick} from "../../utils/WhatsApp";

const Services = () => {
  return (
    <div className="services_container">
      <div className="collectiveservices">
        <img src={firstservice} alt="Oil" />
        <h2>Oil</h2>
        <p>
        We provide safe and reliable oil transportation solutions, ensuring seamless delivery with the highest safety standards.
        </p>
        <button onClick={handleChatClick}>Know more</button>
      </div>

      <div className="collectiveservices">
        <img src={secondservice} alt="School Transport" />
        <h2>School Transport</h2>
        <p>
        Safe and comfortable rides for students. Our school transport services ensure punctuality and security for young passengers.
        </p>
        <button onClick={handleChatClick}>Know more</button>
      </div>

      <div className="collectiveservices">
        <img src={thirdservice} alt="Staff Transport" />
        <h2>Staff Transport</h2>
        <p>
        Efficient and hassle-free transport for employees. We help businesses streamline staff commuting with comfort and convenience.
        </p>
        <button onClick={handleChatClick}>Know more</button>
      </div>

      <div className="collectiveservices">
        <img src={fourthservice} alt="City Transport" />
        <h2>City Transport</h2>
        <p>
        Explore the city with ease! Our city transport services offer smooth, affordable, and reliable travel options.
        </p>
        <button onClick={handleChatClick}>Know more</button>
      </div>
    </div>
  );
};

export default Services;