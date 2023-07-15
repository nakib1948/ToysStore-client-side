import React from "react";
import { useNavigate } from "react-router-dom";
import Updatetoy from "./Updatetoy";
import Swal from "sweetalert2";
const Mytoytable = ({ toy, id, setmytoys, mytoys }) => {
  const { _id, pictureurl, Name, subcategory, price, quantity } = toy;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Warning!",
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#B91C1C",
      cancelButtonColor: "#B85EE6",
      confirmButtonText: "Confirm delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/toydelete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Toy deleted successfully!!!");
              const updatedtoy = mytoys.filter((data) => data._id !== _id);
              setmytoys(updatedtoy);
            }
          });
      }
    });
  };

  return (
    <tr>
      <td className="font-bold">{id + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={pictureurl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{Name}</td>
      <td>{subcategory}</td>
      <td>{price}$</td>
      <td>{quantity}</td>
      <th>
        <label
          htmlFor="my_modal_7"
          className="btn bg-purple lg:btn-sm mr-4 py-2 text-white"
        >
          {" "}
          Update
        </label>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-red-600 lg:btn-sm py-2 text-white"
        >
          Delete
        </button>

        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal">
          
          <Updatetoy toy={toy} setmytoys={setmytoys} mytoys={mytoys} />
           
         
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>

        {/* update modal */}

      </th>
    </tr>
  );
};

export default Mytoytable;
