import { useLoaderData } from "react-router-dom";
import bg1 from "../../../assets/Toydetails/bg1.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SingleToyDetails = () => {
  const SingleToyDetails = useLoaderData();

  const {
    _id,
    pictureurl,
    Name,
    subcategory,
    price,
    quantity,
    SellerName,
    selleremail,
    rating,
    description,
  } = SingleToyDetails;

  const [ref, inView] = useInView({
    triggerOnce: false,
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
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content w-9/12 flex-col lg:flex-row-reverse">
        <div className="text-center lg:ml-20 lg:text-left">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-md"
          >
            <motion.p
              variants={contentVariants}
              className="text-4xl font-bold text-purple"
            >
              {Name}
            </motion.p>
            <motion.p
              variants={contentVariants}
              className="text-lg my-2 text-white"
            >
              Seller: {SellerName}
            </motion.p>
            <motion.p
              variants={contentVariants}
              className="text-lg my-2 text-white"
            >
              Email: {selleremail}
            </motion.p>
            <motion.p
              variants={contentVariants}
              className="text-lg my-2 text-white"
            >
              Available Quantity:{" "}
              <span className="text-red-500 font-bold">{quantity}</span>{" "}
            </motion.p>
            <motion.p
              variants={contentVariants}
              className="text-xl my-2 text-white text-red-500 font-bold"
            >
              {price}$
            </motion.p>
            <motion.p
              variants={contentVariants}
              className="text-base text-white py-6"
            >
              Description: {description}
            </motion.p>
            <motion.button
              variants={contentVariants}
              className="btn bg-purple rounded-full px-6 text-white"
            >
              Buy now
            </motion.button>
          </motion.div>
        </div>

        <div className=" flex-shrink-0 w-auto shadow-2xl">
          <img className="h-96 w-96 rounded-lg" src={pictureurl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
