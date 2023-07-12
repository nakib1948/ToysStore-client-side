import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img1 from "../../../../assets/Marvel/hulk.jpg";
import img2 from "../../../../assets/Marvel/img2.jpg";
import img3 from "../../../../assets/Marvel/img5.jpg";
const CategorySection = () => {
  return (
    <div>
      <Tabs>
        
      
        <TabList className="react-tabs__tab-list flex flex-row justify-center">
          <Tab className="react-tabs__tab text-xl">Marvel</Tab>
          <Tab className="react-tabs__tab text-xl">DC</Tab>
          <Tab className="react-tabs__tab text-xl">Star Wars</Tab>
        </TabList>

      

        <TabPanel>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className=" pt-10">
              <img src={img1} alt="Shoes" className="rounded-xl h-60" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={img3} alt="Shoes" className="rounded-xl h-96" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={img2} alt="Shoes" className="rounded-xl h-96" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategorySection;
