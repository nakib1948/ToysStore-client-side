import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./GallerySection.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import img1 from "../../../../assets/GalleryImg/img1.jpg";
import img2 from "../../../../assets/GalleryImg/img2.jpg";
import img3 from "../../../../assets/GalleryImg/img3.jpg";
import img4 from "../../../../assets/GalleryImg/img4.jpg";
import img5 from "../../../../assets/GalleryImg/img5.jpg";
import img6 from "../../../../assets/GalleryImg/img6.jpg";
import img7 from "../../../../assets/GalleryImg/img7.jpg";
import img8 from "../../../../assets/GalleryImg/img8.jpg";
import img9 from "../../../../assets/GalleryImg/img9.jpg";
import img10 from "../../../../assets/GalleryImg/img10.jpg";

const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="my-20" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Use inView to control the animation
        variants={variants}
        transition={{ duration: 1.5 }}
      >
        <p className="text-3xl text-center pt-10 text-purple">
          Explore our beautiful toys collection
        </p>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={img5} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={img6} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={img7} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={img8} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={img9} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={img10} />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default GallerySection;
