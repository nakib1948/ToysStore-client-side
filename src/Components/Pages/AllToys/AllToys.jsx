import React, { useEffect, useState } from "react";
import alltoys from "../../../assets/AllToys/alltoy.jpg";
import { useLoaderData } from "react-router-dom";
import Toytable from "./Toytable";
const AllToys = () => {
  
// const [alltoys,setAlltoys]=useState([])
 const toys=useLoaderData();
 console.log(toys)

  return (
    <div>
      <div
        className="relative mb-5"
        style={{
          backgroundImage: `url(${alltoys})`,
          backgroundSize: "cover",
        }}
      >
        <div className="join flex justify-center items-center py-24">
          <input
            className="input input-primary input-bordered join-item lg:w-96"
            placeholder="Search Toy..."
          />
          <button className="btn bg-purple text-white join-item rounded-r-full">
            Search
          </button>
        </div>
        <div className="opacity-75 absolute inset-0 pointer-events-none">
          <div className="bg-gradient-to-t from-black via-transparent to-transparent h-full"></div>
        </div>
        <p className="text-3xl font-bold text-center pb-10 text-white relative z-10">
          Here are the available toys
        </p>
      </div>

      <div className="overflow-x-auto bg-base-200">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-base text-purple ">
              NO.
              </th>
              <th className="text-base text-purple ">Image</th>
              <th className="text-base text-purple ">Toy Name</th>
              <th className="text-base text-purple ">Sub-category</th>
              <th className="text-base text-purple ">Price</th>
              <th className="text-base text-purple ">Available Quantity</th>
              <th className="text-base text-purple ">Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
                toys.map((toy,index)=> <Toytable key={index} id={index} toy={toy}></Toytable> )
            }
          
          
          </tbody>
        
        </table>
      </div>
    </div>
  );
};

export default AllToys;
