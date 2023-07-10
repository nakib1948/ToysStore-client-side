import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";

import BannerSection from "./BannerSection/BannerSection";
import GallerySection from "./GallerySection/GallerySection";
import CategorySection from "./CategorySection/CategorySection";
import ServiceSection from "./ServiceSection/ServiceSection";
import DiscountSection from "./DiscountSection/DiscountSection";
import CustomerReview from "./CustomerReview/CustomerReview";
const Home = () => {
  return (
    <div className="my-10">
        <BannerSection/>
        <GallerySection/>
        <CategorySection/>
        <ServiceSection/>
        <DiscountSection/>
        <CustomerReview/>
    </div>
  
  
  );
};

export default Home;
