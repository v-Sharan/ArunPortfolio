import React from "react";
import { useQuery } from "react-query";
import { client } from "../utils/client";
import { GuestOfHonour } from "../utils/queries";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";

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

const Ghonour = () => {
  const { data, isLoading } = useQuery("GuestOfHonour", () =>
    client.fetch(GuestOfHonour())
  );

  return (
    <React.Fragment>
      <div className="p-5 text-3xl mt-8 font-bold dark:text-white">Guest Of Honour</div>
      <div className="flex flex-col items-center justify-center dark:text-white">
        {isLoading && <CircularProgress />}
        {data?.map((item) => (
          <motion.ol
            key={`${item._id}`}
            variants={container}
            initial="hidden"
            animate="visible"
            className="tracking-wider p-10 text-lg list-decimal ml-20"
          >
            {item.description?.map((journal, i) => (
              <motion.li key={`${i}`} variants={items}>
                {journal}
              </motion.li>
            ))}
          </motion.ol>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Ghonour;
