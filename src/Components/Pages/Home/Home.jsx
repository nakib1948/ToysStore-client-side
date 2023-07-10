import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";

import BannerSection from "./BannerSection/BannerSection";
import GallerySection from "./GallerySection/GallerySection";
const Home = () => {
  return (
    <div className="my-10">
        <BannerSection/>
        <GallerySection/>
    </div>
  
  
  );
};

export default Home;
