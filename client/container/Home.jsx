import React from "react";
import { motion } from "framer-motion";
import { Table } from "../components";
import { PublicationSummaryColumns } from "../constants";

const rows = [
  { indexing: "WOS", articals: 49, citations: 152, h_index: 7 },
  { indexing: "Scopus", articals: 101, citations: 544, h_index: 12 },
  { indexing: "Google Scholar", articals: 179, citations: 842, h_index: 16 },
];

const Home = () => {
  return (
    <motion.div
      className="min-h-screen"
      whileInView={{ x: [-100, 10], opacity: [1, 1] }}
      transition={{ duration: 0.4 }}
    >
      <div className=" flex items-center justify-center w-full md:w-[90%] sm:w-[55%] overflow-hidden flex-col mt-10">
        <div className="flex p-6 justify-between h-[90%] bg-white rounded-lg shadow-2xl w-[70%] mb-10">
          <div className="text-gray-950">
            <h1>Dr.C.Arun</h1>
            <h1>Professor-ECE</h1>
            <h1>RMK College of Engineering & Technology</h1>
            <h1>
              E-mail:{" "}
              <a
                className="hover:underline cursor-pointer text-blue-500"
                href="mailto:carunece@gmail.com"
              >
                carunece@gmail.com
              </a>
            </h1>
            <h1>
              Mobile: <a href="tel:9843506892">9843506892</a>
            </h1>
            <div className="border-b-2 m-3" />
            <div className="text-gray-950">
              Address:
              <br />
              16/29, 1st Floor, F2-Block,
              <br className="sm:block" /> Alpha Poppy Apartment, Avvai Nager
              West Street
              <br className="sm:block" />
              Choolaimedu-94, Chennai,
              <br />
              TamilNadu, India.
            </div>
          </div>
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.2, ease: "backInOut" }}
            src="/photo-rbg.png"
            alt="image"
            className="w-18 h-16 md:h-48 md:w-48 rounded-full bg-red-700 flex flex-end object-contain"
          />
        </div>
        <motion.div
          className="px-14 m-10"
          variants={{
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.7,
                staggerChildren: 0.5,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl font-bold dark:text-white">Objective</h1>
          <div className="py-6 dark:text-gray-300">
            <div className="">
              Zeal to attain a distinct position in the field of Engineering and
              Technology, through dedication and devotion, capable of achieving
              the goals of an esteemed organization.
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={{
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.7,
              staggerChildren: 0.5,
            },
          },
        }}
        className="flex justify-center items-center w-[90%]"
      >
        <Table
          row={rows}
          columns={PublicationSummaryColumns}
          title={"Journal Publication Summary"}
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
