import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "./CustomerReview.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import quote1 from "../../../../assets/Review/quote1.svg";
import quote2 from "../../../../assets/Review/quote2.svg";
import man1 from "../../../../assets/Review/man1.jpg";
import man2 from "../../../../assets/Review/man2.jpg";
import man3 from "../../../../assets/Review/man3.jpg";
import woman1 from "../../../../assets/Review/woman1.jpg";
import woman2 from "../../../../assets/Review/woman2.jpg";
import woman3 from "../../../../assets/Review/woman3.jpg";

const CustomerReview = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const reviews = [
    {
      name: "John Doe",
      review:
        "My kids absolutely love this toy! It keeps them entertained for hours and sparks their creativity. Highly recommended!",
      image: man1,
    },
    {
      name: "Jane Smith",
      review:
        "This toy is a great educational tool. It helps my children learn while having fun. I'm very impressed with the quality.",
      image: man2,
    },
    {
      name: "Michael Johnson",
      review:
        "I bought this toy as a gift for my nephew and he adores it. It's durable and provides endless fun. A fantastic purchase!",
      image: man3,
    },
    {
      name: "Emily Davis",
      review:
        "The design of this toy is brilliant. It's interactive, engaging, and promotes imaginative play. I'm extremely satisfied.",
      image: woman1,
    },
    {
      name: "Sarah Thompson",
      review:
        "My child is obsessed with this toy! It's their new favorite. The quality is excellent and it provides hours of entertainment.",
      image: woman2,
    },

    {
      name: "Olivia Rodriguez",
      review:
        "This toy is a hit in our household. It's well-designed, safe, and offers endless possibilities for imaginative play. Love it!",
      image: woman3,
    },
  ];
  return (
    <div className="mt-10" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Use inView to control the animation
        variants={variants}
        transition={{ duration: 1.5 }}
      >
        <p className="text-3xl font-bold text-purple text-center">
          See what our customers say
        </p>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {reviews.map((reviews) => (
            <SwiperSlide className="mb-32 mt-10">
              <div className="flex items-center justify-center h-96">
                <div className="card bg-base-100 shadow-xl p-6">
                  <img
                    className="rounded h-40 mx-auto mb-4"
                    src={reviews.image}
                    alt=""
                  />
                  <div className="badge badge-info text-white text-lg p-2">
                    by {reviews.name}
                  </div>
                  <p className="text-lg">
                    <img className="h-10" src={quote1} alt="" />
                    {reviews.review}
                    <img className="h-10" src={quote2} alt="" />
                  </p>
                  <div className="text-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStarHalfStroke}
                      size="xl"
                      style={{ color: "#e7d404" }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default CustomerReview;
