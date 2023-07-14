import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from "react-toastify";

const Updatetoy = ({toy}) => {
    const {user}=useContext(AuthContext)
    const [selectedOption, setSelectedOption] = useState("");
    const [toydescription, setToydescription] = useState("");

    const { _id,Name,pictureurl,SellerName,selleremail,price,rating,quantity,subcategory,description
    } = toy;
   
     const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      };
      const handleDescriptionChange = (event) => {
        setToydescription(event.target.value);
      };
    
      const handleSubmit=(event)=>{
        event.preventDefault();

        const form = event.target;
        const Name = form.toyname.value;
        const pictureurl = form.image.value;
        const SellerName = form.sellername.value;
        const selleremail = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const subcategory= selectedOption;
        const description= toydescription;

        const updatetoy={
            Name,pictureurl,SellerName,selleremail,price,rating,quantity,subcategory,description

        }
        fetch(`http://localhost:3000/updatetoy/${_id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatetoy),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success("Toy updated successfully!!!", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            });

    }

    return (
       
    
        <form onSubmit={handleSubmit} method="dialog" className="modal-box w-11/12 max-w-5xl">
            <ToastContainer />
          <div className="md:flex my-5 lg:flex">
            <div className="form-control md:w-1/2 lg:w-1/2">
              <label className="label">
                <span className="label-text text-purple text-lg">Toy Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Toy Name...."
                  name="toyname"
                  defaultValue={Name}
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 lg:ml-4 md:ml-4">
              <label className="label">
                <span className="label-text text-purple text-lg">Image Url</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  defaultValue={pictureurl}
                  placeholder="image url..."
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex my-5 lg:flex">
            <div className="form-control md:w-1/2 lg:w-1/2">
              <label className="label">
                <span className="label-text text-purple text-lg">
                  Seller Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Seller name..."
                  defaultValue={SellerName}
                  name="sellername"
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 lg:ml-4 md:ml-4">
              <label className="label">
                <span className="label-text text-purple text-lg">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  placeholder="seller email"
                  value={selleremail}
                  name="email"
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex my-5 lg:flex">
            <div className="form-control md:w-1/2 lg:w-1/2">
              <label className="label">
                <span className="label-text text-purple text-lg">
                  Sub Category
                </span>
              </label>
              <select
                name="category"
                defaultValue={subcategory}
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
                <span className="label-text text-purple text-lg">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="price..."
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex my-5 lg:flex">
            <div className="form-control md:w-1/2 lg:w-1/2">
              <label className="label">
                <span className="label-text text-purple text-lg">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Rating..."
                  name="rating"
                  defaultValue={rating}
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 lg:ml-4 md:ml-4">
              <label className="label">
                <span className="label-text text-purple text-lg">
                  Avaliable Quantity
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="quantity...."
                  name="quantity"
                  defaultValue={quantity}
                  className="input input-primary input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <label className="label">
            <span className="label-text text-purple text-lg">Description</span>
          </label>
          <label className="input-group">
            <textarea
              onChange={handleDescriptionChange}
              className="textarea w-full textarea-primary"
              defaultValue={description}
              placeholder="Toy description...."
            ></textarea>
          </label>

          <input
            type="submit"
            value="Update"
            className="btn btn-block bg-purple text-white mt-4"
          />
        </form>
  
       
    );
};

export default Updatetoy;