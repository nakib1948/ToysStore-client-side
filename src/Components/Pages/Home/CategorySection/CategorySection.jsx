import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SubCategory from "./SubCategory";
import { useLoaderData } from "react-router-dom";

const CategorySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const toys = useLoaderData();

  return (
    <div ref={ref}>
      <p className="text-3xl pb-10 font-bold text-purple text-center">Purchase by category</p>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Use inView to control the animation
        variants={variants}
        transition={{ duration: 1.5 }}
      >
        <Tabs>
          <TabList className="react-tabs__tab-list text-purple flex flex-row justify-center">
            <Tab className="react-tabs__tab text-xl">Marvel Toys</Tab>
            <Tab className="react-tabs__tab text-xl">DC Toys</Tab>
            <Tab className="react-tabs__tab text-xl">Star Wars Toys</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
              {toys
                .filter((data, index) => {
                  return data.subcategory === "Marvel";
                })
                .slice(0, 8)
                .map((data, key) => (
                  <SubCategory key={key} subcategory={data} />
                ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
              {toys
                .filter((data, index) => {
                  return data.subcategory === "DC";
                })
                .slice(0, 8)
                .map((data, key) => (
                  <SubCategory key={key} subcategory={data} />
                ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
              {toys
                .filter((data, index) => {
                  return data.subcategory === "Star Wars";
                })
                .slice(0, 8)
                .map((data, key) => (
                  <SubCategory key={key} subcategory={data} />
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default CategorySection;
