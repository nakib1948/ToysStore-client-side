import React from "react";
import Slider from "react-slick";
import bannerImg1 from "../../../../assets/BannerImage/bannerImg1.png";
import bannerImg2 from "../../../../assets/BannerImage/bannerImg2.png";
import bannerImg3 from "../../../../assets/BannerImage/bannerImg3.png";
import bannerImg4 from "../../../../assets/BannerImage/bannerImg4.png";
import bannerBg from "../../../../assets/BannerImage/BannerBg.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "purple" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "purple" }}
      onClick={onClick}
    />
  );
}

const BannerSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Use inView to control the animation
        variants={variants}
        transition={{ duration: 1.5 }}
      >
        <Slider {...settings}>
          <div
            className="hero min-h-fit bg-base-200"
            style={{
              backgroundImage: `url(${bannerBg})` ,
              borderRadius: "10px",
            }}
          >
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <p className="text-2xl font-bold text-purple">
                  Welcome to the Toy Store!
                </p>
                <h1 className="text-4xl font-bold py-5">
                  {" "}
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially

                      "Unleash the Fun with Our Diverse Range of Toys",
                      1000,
                      "Discover Endless Joy with Our Amazing Toy Selection",
                      1000,
                      "Ignite Imaginations with Our Exciting Toy Collection",
                      1000,
                      "Find the Perfect Toys for Every Child",
                      1000,
                    ]}
                    speed={40}
                    style={{ fontSize: "1em" }}
                  />
                </h1>
                <p className="text-base text-gray-700">
                  Explore our extensive collection of toys and games that
                  inspire creativity and imagination. Find the perfect toys to
                  bring smiles and laughter to your child's face. Start the
                  adventure today!
                </p>
                <button className="btn bg-purple text-white rounded-full mt-4">
                  Shop Now
                </button>
              </div>
              <div
                className="w-full lg:w-1/2 flex-shrink-0 max-w-sm "
                style={{ backgroundColor: "transparent" }}
              >
                <img className="max-h-96" src={bannerImg1} alt="" />
              </div>
            </div>
          </div>

          <div
            className="hero min-h-fit bg-base-200"
            style={{
              backgroundImage: `url(${bannerBg})`,
              borderRadius: "10px",
            }}
          >
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <p className="text-2xl font-bold text-purple">
                  Welcome to the Toy Store!
                </p>
                <h1 className="text-4xl font-bold py-5">
                  {" "}
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      " Find the Perfect Toys for Every Child",
                      1000,
                      "Unleash the Fun with Our Diverse Range of Toys",
                      1000,
                      " Ignite Imaginations with Our Exciting Toy Collection",
                      1000,

                      "Discover Endless Joy with Our Amazing Toy Selection",
                      1000,
                    ]}
                    speed={40}
                    style={{ fontSize: "1em" }}
                  />
                </h1>
                <p className="text-base text-gray-700">
                  Discover a world of fun and learning with our wide range of
                  educational toys. From building blocks to puzzles and science
                  kits, we have everything to make learning exciting and
                  engaging. Ignite your child's curiosity now!
                </p>
                <button className="btn bg-purple text-white rounded-full mt-4">
                  Shop Now
                </button>
              </div>
              <div
                className="w-full lg:w-1/2 flex-shrink-0 max-w-sm "
                style={{ backgroundColor: "transparent" }}
              >
                <img className="max-h-96" src={bannerImg2} alt="" />
              </div>
            </div>
          </div>

          <div
            className="hero min-h-fit bg-base-200"
            style={{
              backgroundImage: `url(${bannerBg})`,
              borderRadius: "10px",
            }}
          >
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <p className="text-2xl font-bold text-purple">
                  Welcome to the Toy Store!
                </p>
                <h1 className="text-4xl font-bold py-5">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      " Find the Perfect Toys for Every Child",
                      1000,
                      "Discover Endless Joy with Our Amazing Toy Selection",
                      1000,
                      "Unleash the Fun with Our Diverse Range of Toys",
                      1000,

                      "Ignite Imaginations with Our Exciting Toy Collection",
                      1000,
                    ]}
                    speed={40}
                    style={{ fontSize: "1em" }}
                  />
                </h1>
                <p className="text-base text-gray-700">
                  Get ready for hours of entertainment with our selection of
                  interactive and electronic toys. From remote-controlled cars
                  to interactive robots, your child will be immersed in a world
                  of excitement and adventure. Start the fun today!
                </p>

                <button className="btn bg-purple text-white rounded-full mt-4">
                  Shop Now
                </button>
              </div>
              <div
                className="w-full lg:w-1/2 flex-shrink-0 max-w-sm "
                style={{ backgroundColor: "transparent" }}
              >
                <img className="max-h-96" src={bannerImg3} alt="" />
              </div>
            </div>
          </div>

          <div
            className="hero min-h-fit bg-base-200"
            style={{
              backgroundImage: `url(${bannerBg})`,
              borderRadius: "10px",
            }}
          >
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <p className="text-2xl font-bold text-purple">
                  Welcome to the Toy Store!
                </p>
                <h1 className="text-4xl font-bold py-5">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      " Find the Perfect Toys for Every Child",
                      1000,
                      "Discover Endless Joy with Our Amazing Toy Selection",
                      1000,
                      " Ignite Imaginations with Our Exciting Toy Collection",
                      1000,
                      "Unleash the Fun with Our Diverse Range of Toys",
                      1000,
                    ]}
                    speed={40}
                    style={{ fontSize: "1em" }}
                  />
                </h1>
                <p className="text-base text-gray-700">
                  Make playtime unforgettable with our collection of classic
                  toys and games. From board games to dolls and action figures,
                  relive the joy of traditional play and create lasting memories
                  with your child. Let the fun begin!
                </p>

                <button className="btn bg-purple text-white rounded-full mt-4">
                  Shop Now
                </button>
              </div>
              <div
                className="w-full lg:w-1/2 flex-shrink-0 max-w-sm "
                style={{ backgroundColor: "transparent" }}
              >
                <img className="max-h-96" src={bannerImg4} alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </motion.div>
    </div>
  );
};

export default BannerSection;
