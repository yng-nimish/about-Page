import React from "react";

import { FiArrowRight } from "react-icons/fi";
import BannerImage from "file:///Users/nimishs/Documents/landingpg-2/landingpg2/src/Assets/logo2.svg";
import Footer from "./Footer";

const About_Us = () => {
  return (
    <div className="about-wrapper">
      <div className="about-us-container">
        <div className="home-banner-container">
          <div className="home-text-section">
            <h7 className="primary-heading-welcome"> ABOUT US</h7>
            <h1 className="primary-heading">
              Catalyzing Innovation Through Mathematics
            </h1>
            <p className="primary-text">
              The Guaranteed Unique Number Set is purchased, and the owner will
              recieve a lifetime of free useful Applications
              <br /> <br /> <br />
              <br /> <br /> <br />
              <br /> <br /> <br />
            </p>
          </div>
          <div className="home-bannerImage-container">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
      <div className="about-text-section">
        <div className="about-part-2-text">
          <h1 className="primary-about-heading"> About The Token</h1>
          <div className="about-section-text-container">
            <p className="primary-text">
              A lifetime membership is obtained with the purchase of a Unique
              Your Number Guaranteed Token.
              <br />
              $1,000,000 Guaranteed that every Token we sell is Unique. (See
              terms) <br />
              This Provides unique experiences for every Member with our free
              applications.
              <br />
              Your Number Guaranteed will licence our IP to partners where they
              can pursue their own applications. The most common applications
              are going to be about “User Interface Security”.
            </p>
            <div className="button">
              <button className="about-button">
                Buy a Token <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="about-text-section">
        <div className="about-part-2-text">
          <h1 className="primary-about-heading"> Our Goal</h1>
          <div className="about-section-text-container">
            <p className="primary-text-2">
              Our Goal is to provide educational, cognitive enhancement,
              research & quality control, gaming, entertaining fun games,
              competitions, and User Interface Security Applications. <br />
              We wrote a book about our mission, and we are going to publish an
              updated version every year on Black Friday. BTW, we sent 50 copies
              of this book to 50 esteemed individuals. Who should we send our
              next 50 books to? <br /> We want to translate our books,
              applications, and partnerships into every language that we can.
              <br />
              We believe in math and its abiity to enhance our well-being, and
              to use math to understand our world better. Explore the depths of
              randomness, and its order and insights. <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="about-text-section">
        <div className="about-part-2-text">
          <h1 className="primary-about-heading"> Token: The First Step </h1>
          <div className="about-section-text-container">
            <p className="primary-text">
              Your Number Guaranteed sells a guaranteed unique Token with a
              variety of applications:
              <ul className="list-1">
                <li>Education</li>
                <li>Cognitive Health</li>
                <li>Gaming </li>
                <li>Research & Quality Control</li>
                <li>Personal Interface Security</li>
              </ul>{" "}
              <br />
              “Members with a Token can use the applications for FREE!” READ THE
              BOOK for more information on the YNG Token! $1,000,000 GUARANTEE
              that your Token is UNIQUE <br />
              <br />
            </p>
            <div className="button">
              <button className="about-button-2">
                Read The Book <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About_Us;
