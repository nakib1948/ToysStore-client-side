import React from "react";

const Bestdeal = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-3 mb-5">
      <div
        className="card w-full h-64 shadow-xl image-full"
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <figure>
          <img
            src="https://i.ibb.co/nMmzxPH/pexels-erik-mclean-4048093.jpg"
            alt=""
          />
        </figure>
        <div className="card-body text-right">
          <p className="text-white">50% Flat Discount</p>
          <h2 className="text-4xl font-semibold ">Baby Groot Toys</h2>
          <div className="justify-end">
            <button className="btn btn-outline text-white mt-4">Buy Now</button>
          </div>
        </div>
      </div>

      <div
        className="card w-full h-64 shadow-xl image-full"
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <figure>
          <img src="https://i.ibb.co/r3hqC3T/rpg-468920-640.jpg" alt="Shoes" />
        </figure>
        <div className="card-body text-right">
          <p className="text-white">60% Flat Discount</p>
          <h2 className="text-4xl font-semibold ">star wars Toys</h2>
          <div className="justify-end">
            <button className="btn btn-outline text-white mt-4">Buy Now</button>
          </div>
        </div>
      </div>

      <div
        className="card w-full h-64 shadow-xl image-full"
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <figure>
          <img
            src="https://i.ibb.co/x5126cD/action-figures-7243788-640.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-right">
          <p className="text-white">70% Flat Discount</p>
          <h2 className="text-4xl font-semibold ">Avengers Toys</h2>
          <div className="justify-end">
            <button className="btn btn-outline text-white mt-4">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestdeal;
