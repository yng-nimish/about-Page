import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import XIcon from "@mui/icons-material/X";
import RedditIcon from "@mui/icons-material/Reddit";
import { BsYoutube } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>OUR COMPANY</span>
          <span>About Us</span>
          <span>Careers</span>
          <span>Our Guarantee</span>
        </div>
        <div className="footer-section-columns">
          <span>CUSTOMER SERVICE </span>
          <span>Contact Us</span>
          <span>Application Download</span>
          <span>Book</span>
          <span>Technical Papers</span>
        </div>
        <div className="footer-section-columns">
          <span>PURCHASE ORDERS</span>
          <span>Buy a Token</span>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns-2">
          <span>Follow Us on</span>
          <span className="footer-icons">
            <FaFacebookF />
            <BsTwitter />
            <XIcon />
            <RedditIcon />
            <BsYoutube />
            <SiLinkedin />
            <InstagramIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
