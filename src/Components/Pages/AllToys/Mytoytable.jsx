import React from "react";
import { useNavigate } from "react-router-dom";
import Updatetoy from "./Updatetoy";

const Mytoytable = ({ toy, id }) => {
  const { _id, pictureurl, Name, subcategory, price, quantity } = toy;

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
        <button
          onClick={() => window.my_modal_3.showModal()}
          className="btn bg-purple lg:btn-sm mr-4 py-2 text-white"
        >
          Update
        </button>
        <button className="btn bg-red-600 lg:btn-sm py-2 text-white">
          Delete
        </button>

        {/* You can open the modal using ID.showModal() method */}

        <dialog id="my_modal_3" className="modal">
          <Updatetoy toy={toy} />
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </th>
    </tr>
  );
};

export default Mytoytable;
