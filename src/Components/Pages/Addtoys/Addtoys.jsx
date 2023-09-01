import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import bg1 from "../../../assets/Addtoys/bg1.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Addtoys = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [toydescription, setToydescription] = useState("");
  const { user, logOut } = useContext(AuthContext);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setToydescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const Name = form.toyname.value;
    const pictureurl = form.image.value;
    const SellerName = form.sellername.value;
    const selleremail = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const subcategory = selectedOption;
    const description = toydescription;

    const alldata = {
      Name,
      pictureurl,
      SellerName,
      selleremail,
      price,
      rating,
      quantity,
      subcategory,
      description,
    };
    if (
      Name == "" ||
      SellerName == "" ||
      pictureurl == "" ||
      selleremail == "" ||
      price == "" ||
      rating == "" ||
      quantity == "" ||
      selectedOption == "" ||
      toydescription == ""
    ) {
      return toast.warn("please fill out all the field", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    fetch("https://toy-marketplace-server-side-smoky.vercel.app/addtoy", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "toywebsite-access-token"
        )}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(alldata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          toast.success("Toy added successfully!!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          form.reset();
        } else {
          logOut();
          navigate("/");
        }
      });
  };

  return (
    <div
      className="p-5 bg-opacity-60 mx-auto max-w-7xl"
      ref={ref}
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
      }}
    >
      <ToastContainer />
      <Helmet>
        <title>Toys Store | Addtoys</title>
      </Helmet>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.5 }}
      >
        <form onSubmit={handleSubmit}>
          <div className="md:flex my-5 lg:flex">
            <div className="form-control md:w-1/2 lg:w-1/2">
              <label className="label">
                <span className="label-text text-white text-lg">Toy Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Toy Name...."
                  name="toyname"
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 lg:ml-4 md:ml-4">
              <label className="label">
                <span className="label-text text-white text-lg">Image Url</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  placeholder="image url..."
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex my-5 lg:flex">
            <div className="form-control md:w-1/2 lg:w-1/2">
              <label className="label">
                <span className="label-text text-white text-lg">
                  Seller Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Seller name..."
                  value={user?.displayName}
                  name="sellername"
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 lg:ml-4 md:ml-4">
              <label className="label">
                <span className="label-text text-white text-lg">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  placeholder="seller email"
                  value={user?.email}
                  name="email"
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex my-5 lg:flex">
            <div className="form-control md:w-1/2 lg:w-1/2">
              <label className="label">
                <span className="label-text text-white text-lg">
                  Sub Category
                </span>
              </label>
              <select
                name="category"
                value={selectedOption}
                onChange={handleSelectChange}
                className="select select-primary w-full"
              >
                <option disabled selected value="">
                  Select a category
                </option>
                <option value="Marvel">Marvel</option>
                <option value="DC">DC</option>
                <option value="Star Wars">Star Wars</option>
              </select>
            </div>

            <div className="form-control md:w-1/2 lg:ml-4 md:ml-4">
              <label className="label">
                <span className="label-text text-white text-lg">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="price..."
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex my-5 lg:flex">
            <div className="form-control md:w-1/2 lg:w-1/2">
              <label className="label">
                <span className="label-text text-white text-lg">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Rating..."
                  name="rating"
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 lg:ml-4 md:ml-4">
              <label className="label">
                <span className="label-text text-white text-lg">
                  Avaliable Quantity
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="quantity...."
                  name="quantity"
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <label className="label">
            <span className="label-text text-white text-lg">Description</span>
          </label>
          <label className="input-group">
            <textarea
              onChange={handleDescriptionChange}
              className="textarea w-full textarea-primary"
              placeholder="Toy description...."
            ></textarea>
          </label>

          <input
            type="submit"
            value="Add Toy"
            className="btn btn-block bg-purple text-white mt-4"
          />
        </form>
      </motion.div>
    </div>
  );
};

export default Addtoys;
