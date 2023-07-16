import React from "react";
import footerImg from "../../../assets/BannerImage/navimg.png";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <>
      <footer
        className="footer p-10 bg-base-200 text-base-content"
      >
        <div className="justify-items-center">
          <img className="h-24 rounded-full" src={footerImg} alt="" />
          <p>
            <span className="text-blue-600">Toys shop</span>
            <br /> Providing reliable toys since 2003
          </p>
          <div>
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
            <FontAwesomeIcon className="mx-4" icon={faTwitter} size="2xl" />
            <FontAwesomeIcon icon={faInstagram} className="mr-4" size="2xl" />
            <FontAwesomeIcon icon={faYoutube} size="2xl" />
          </div>
        </div>

        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Term of use</a>
          <a className="link link-hover">Our Service</a>
          <a className="link link-hover">Privacy</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <p>123 Main Street level-4,buliding-9,Dhaka</p>
          <p>Email: ToysStore@gmail.com</p>
          <p>(Available: Sat to Thu (10AM to 8PM))</p>
        </div>
      </footer>
      <div className="text-center">
        <p>Copyright © 2023 - All right reserved by Toys store</p>
      </div>
    </>
  );
};

export default Footer;
