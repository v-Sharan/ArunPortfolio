import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { client } from "../utils/client";
import { InternationalJournal } from "../utils/queries";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Ijournal = () => {
  const { data, isLoading } = useQuery("InternationalJournal", () =>
    client.fetch(InternationalJournal())
  );

  return (
    <React.Fragment>
      <div className="p-5 text-3xl mt-8 font-bold">International Journal</div>
      <div className="flex flex-col items-center justify-center">
        {/* {data?.map((item, index) => (
          <motion.ol
            variants={container}
            key={index}
            initial="hidden"
            animate="visible"
            className="tracking-wider p-10 text-lg list-decimal ml-20"
          >
            {item.award.map((arr, index) => (
              <li key={index} variants={items}>
                {arr}
              </li>
            ))}
          </motion.ol> */}
        {/* ))} */}
      </div>
    </React.Fragment>
  );
};

export default Ijournal;
