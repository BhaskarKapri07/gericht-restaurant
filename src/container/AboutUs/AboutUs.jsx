import React from "react";

import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          At the heart of our dining room lies a dedication to exquisite flavors
          and impeccable service. We combine time-honored techniques with a
          modern approach to deliver unforgettable culinary experiences. Join us
          for a celebration of fine food and finesse.
        </p>
        <button type="button" className="custom__button">
          Know More{" "}
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Our restaurant's story is woven from a commitment to culinary mastery
          and the joy of shared meals. Through each era, our tables have hosted
          stories, celebrations, and the creation of timeless memories.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
