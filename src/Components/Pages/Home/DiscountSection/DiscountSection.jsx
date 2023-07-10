import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../../../../assets/Discount/img2.jpg";

const DiscountSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger animation once
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
  };

  const contentVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.4 } },
  };

  return (
    <div
      className="hero h-96"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-md"
        >
          <motion.h2 className="mb-5 text-5xl font-bold text-purple" variants={contentVariants}>
            Get <span className="text-yellow-200">30%</span> Off Discount Coupon
          </motion.h2>
          <motion.p className="mb-5 text-lg" variants={contentVariants}>
            by Subscribe our Newsletter
          </motion.p>
          <div className="join">
            <motion.input
              className="input input-bordered join-item"
              placeholder="Email"
              variants={contentVariants}
            />
            <motion.button
              className="btn bg-purple text-white join-item rounded-r-full"
              variants={contentVariants}
            >
              Get the coupon
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DiscountSection;
