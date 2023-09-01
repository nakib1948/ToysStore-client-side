import React from "react";

const Questions = () => {
  return (
    <>
      <p className="text-3xl mt-10 font-bold text-center  text-purple">
       Any Questions?
      </p>
      <p className="text-center text-gray-500 font-serif mb-10">We are always waiting to recieve your queston and opinion.please feel free to contact with us</p>

      <div
        className="hero rounded-md bg-fixed"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/hLkTkvL/question-mark-3470783-640.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div data-aos="flip-right"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="1000">
          <div className="card md:w-[500px] shadow-2xl ">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Message</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="message"
                  type="text"
                />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white font-semibold text-lg bg-purple">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
