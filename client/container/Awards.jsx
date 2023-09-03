import React from "react";
import { client } from "../utils/client";
import { Awards, AdminstrativeResponsibility } from "../utils/queries";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

const Award = () => {
  const { data: awards, isLoading: awardIsLoading } = useQuery("Awards", () =>
    client.fetch(Awards())
  );
  const { data: responsible, isLoading: responsibleIsLoading } = useQuery(
    "responsible",
    () => client.fetch(AdminstrativeResponsibility())
  );

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
  return (
    <React.Fragment>
      <div className="p-5 text-3xl mt-8 font-bold dark:text-white">
        Awards and Merits Received
      </div>
      <div className="flex flex-col items-center justify-center dark:text-white">
        {awards?.map((item, index) => (
          <motion.ol
            variants={container}
            key={index}
            initial="hidden"
            animate="visible"
            className="tracking-wider p-10 text-lg list-decimal ml-20"
          >
            {item.award.map((arr, index) => (
              <motion.li key={index} variants={items}>
                {arr}
              </motion.li>
            ))}
          </motion.ol>
        ))}
      </div>
      {awardIsLoading && (
        <span className="loading loading-spinner text-primary"></span>
      )}
      <div className="p-5 text-3xl mt-8 font-bold dark:text-white">
        Administrative Responsibilities
      </div>
      <div className="flex flex-col items-center justify-center dark:text-white">
        {responsible?.map((item, index) => (
          <motion.ol
            variants={container}
            key={index}
            initial="hidden"
            animate="visible"
            className="tracking-wider p-10 text-lg list-decimal ml-20"
          >
            {item.adminstrative_responsibility.map((arr, index) => (
              <motion.li key={index} variants={items}>
                {arr}
              </motion.li>
            ))}
          </motion.ol>
        ))}
      </div>
      {responsibleIsLoading && (
        <span className="loading loading-spinner text-primary"></span>
      )}
    </React.Fragment>
  );
};

export default Award;
