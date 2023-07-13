import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

  const SubCategory = ({ subcategory }) => {
  const { pictureurl, Name, price, rating, discount } = subcategory;
  const [showButton, setShowButton] = useState(false);

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <div
      className="indicator relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="indicator-item badge badge-primary">{discount}</span>

      <div className="card w-72 bg-base-100 shadow-xl">
        <figure className=" pt-10">
          <img src={pictureurl} alt="Shoes" className="rounded-xl h-60" />
        </figure>
        <div className="card-body ">
          <p className="text-xl font-bold text-purple">{Name}</p>
          <div className="flex justify-end">
            <p className="font-serif text-base">{price}$</p>

            <div className="flex">
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                style={{ color: "#e7d404" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                style={{ color: "#e7d404" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                style={{ color: "#e7d404" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                style={{ color: "#e7d404" }}
              />
              <FontAwesomeIcon
                icon={faStarHalfStroke}
                size="sm"
                style={{ color: "#e7d404" }}
              />
              <p className="ml-2"> {rating}</p>
              {showButton && (
                <button className="absolute bottom-0 left-0 right-0 p-2 bg-purple btn text-white transition duration-300 opacity-100">
                  View Details
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;