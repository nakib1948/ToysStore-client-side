import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import alltoys from "../../../assets/AllToys/alltoy.jpg";
import Toytable from "./Toytable";
import Pagination from "./Pagination";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Mytoytable from "./Mytoytable";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Mytoys = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const [mytoys, setmytoys] = useState([]);

  const url = `https://toy-marketplace-server-side-smoky.vercel.app/mytoys?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "toywebsite-access-token"
        )}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (!data.error) {
          await setmytoys(data);
        } else {
          logOut();
          navigate("/");
        }
      });
  }, []);

  const handleSelectChange = (event) => {
    const SelectedOption = event.target.value;

    const data = {
      text: SelectedOption,
    };
    fetch(url, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "toywebsite-access-token"
        )}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (!data.error) {
          await setmytoys(data);
        } else {
          logOut();
          navigate("/");
        }
      });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const postsPerPage = 20;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = mytoys.slice(firstPostIndex, lastPostIndex);

  return (
    <div ref={ref} className="mx-auto max-w-7xl">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.5 }}
      >
        <Helmet>
          <title>Toys Store | Mytoys</title>
        </Helmet>
        <div
          className="relative mb-5 rounded-md"
          style={{
            backgroundImage: `url(${alltoys})`,
            backgroundSize: "cover",
          }}
        >
          <div className="join flex justify-center items-center py-24">
            <input
              className="input input-primary input-bordered join-item lg:w-96"
              name="search"
              placeholder="Search Toy..."
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <button
              onClick={() => setSearch("")}
              className="btn bg-purple text-white join-item rounded-r-full"
            >
              Clear
            </button>
          </div>
          <div className="opacity-75 absolute inset-0 pointer-events-none">
            <div className="bg-gradient-to-t from-black via-transparent to-transparent h-full"></div>
          </div>
          <p className="text-3xl font-bold text-center pb-10 text-white relative z-10">
            Here are the available toys
          </p>
        </div>

        <select
          onChange={handleSelectChange}
          className="select select-primary w-min max-w-xs my-5"
        >
          <option disabled selected>
            Filter by Price
          </option>
          <option value="Default Price">Default Price</option>
          <option value="Lowest to Highest">Lowest to Highest</option>
          <option value="Highest to Lowest">Highest to Lowest</option>
        </select>
        {mytoys.length > 0 ? (
          <div className="overflow-x-auto bg-base-200">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-base text-purple ">NO.</th>
                  <th className="text-base text-purple ">Image</th>
                  <th className="text-base text-purple ">Toy Name</th>
                  <th className="text-base text-purple ">Sub-category</th>
                  <th className="text-base text-purple ">Price</th>
                  <th className="text-base text-purple ">Available Quantity</th>
                  <th className="text-base text-purple ">Details</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts
                  .filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (
                      val.Name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((toy, index) => (
                    <Mytoytable
                      mytoys={mytoys}
                      setmytoys={setmytoys}
                      key={toy._id}
                      id={index}
                      toy={toy}
                    ></Mytoytable>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center">
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
          </div>
        )}

        <Pagination
          totalPosts={mytoys.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Pagination>
      </motion.div>
    </div>
  );
};

export default Mytoys;
