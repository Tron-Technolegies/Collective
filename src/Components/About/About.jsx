import React, { useState } from "react";
import "./About.css";
import about from "../../assets/about.jpg";
import { handleChatClick } from "../../utils/WhatsApp"; // Removed handleQuoteFormClick

const About = () => {
  const [formData, setFormData] = useState({
    location: "",
    destination: "",
    contact: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { location, destination, contact, message } = formData;

    const subject = encodeURIComponent("Quote Request");
    const body = encodeURIComponent(
      `Location: ${location}\nDestination: ${destination}\nContact: ${contact}\nMessage: ${message}`
    );

    const mailtoLink = `mailto:info@collectivetransportations.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    setFormData({
      location: "",
      destination: "",
      contact: "",
      message: "",
    });
  };

  return (
    <div className="about-container">
      {/* Left Section */}
      <div className="about-left">
        <h2>About us</h2>
        <p>
          We are committed to providing top-notch services with a focus on
          excellence, reliability, and customer satisfaction. Our mission is to
          create seamless and efficient solutions tailored to your needs.
        </p>
        <img src={about} alt="Truck" className="about-image" />
        <button className="read-button" onClick={handleChatClick}>
          Know More
        </button>
      </div>

      {/* Right Section */}
      <div className="about-right">
        <h2>Request a Quote</h2>
        <form className="quote-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={formData.destination}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Email or Phone"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className="quote-button">
            Send Quote via Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
