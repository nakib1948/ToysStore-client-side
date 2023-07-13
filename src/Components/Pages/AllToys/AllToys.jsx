import React, { useEffect, useRef, useState } from "react";
import alltoys from "../../../assets/AllToys/alltoy.jpg";
import { useLoaderData } from "react-router-dom";
import Toytable from "./Toytable";
import Pagination from "./Pagination";

const AllToys = () => {
  // const [alltoys,setAlltoys]=useState([])
  const toys = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const [search,setSearch]=useState("")
  const postsPerPage = 20;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = toys.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
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
              onChange={(event)=>{
                setSearch(event.target.value);
            }}
            />
            <button onClick={()=>setSearch('')}  className="btn bg-purple text-white join-item rounded-r-full">
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
            {
            currentPosts.filter((val)=>{
                if(search=== ""){
                   return val
                }else if (val.Name.toLowerCase().includes(search.toLowerCase())){
                 return val
             }
             }).map((toy, index) => (
              <Toytable key={index} id={index} toy={toy}></Toytable>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalPosts={toys.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
};

export default AllToys;
