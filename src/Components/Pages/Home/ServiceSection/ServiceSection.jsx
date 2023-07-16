import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import img3 from "../../../../assets/Services/cutomerSupport.json";
import img1 from "../../../../assets/Services/shipping.json";
import img2 from "../../../../assets/Services/payment.json";
import img4 from "../../../../assets/Services/return.json";
const ServiceItem = ({ image, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger animation once
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1 }}
      className="md:w-1/2 lg:w-1/4 border-r-2 border-base-200 pr-10"
    >
      <div className="text-center hover:scale-110">
        <Lottie
          className=" rounded-full mx-auto hover:scale-110"
          animationData={image}
        />
        <motion.h3 className="text-xl font-bold mb-4 hover:scale-110 hover:text-purple ">
          {title}
        </motion.h3>
        <motion.p className="text-gray-700 hover:scale-110">
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};
const ServiceSection = () => {
  const services = [
    {
      icon: img1,
      title: "Fast Shipping",
      description:
        "We offer fast and reliable shipping options to ensure your orders reach you on time.",
    },
    {
      icon: img2,
      title: "Secure Payments",
      description:
        "Your payment information is always safe and secure when you shop with us.",
    },
    {
      icon: img3,
      title: "24/7 Customer Support",
      description:
        "Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues.",
    },
    {
      icon: img4,
      title: "Hassle-Free Returns",
      description:
        "If you're not satisfied with your purchase, we make returns easy and hassle-free.",
    },
  ];

  return (
    <div className=" py-10">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-10 text-purple">Our Services</h2>
        <div className="flex flex-col md:flex-row mx-2 ">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              image={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
