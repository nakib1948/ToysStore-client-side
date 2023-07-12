import React from "react";

const Toytable = ({ toy, id }) => {
  const {_id, pictureurl, Name, subcategory, price, quantity } = toy;
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
        <button className="btn bg-purple lg:btn-sm py-2 text-white">View Details</button>
      </th>
    </tr>
  );
};

export default Toytable;
