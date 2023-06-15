import React from "react";
import { client } from "../utils/client";
import { Experience } from "../utils/queries";
import { Table } from "../components";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

import { ExperienceColumns } from "../constants/columns";

const Experienc = () => {
  const { data, isLoading } = useQuery("experience", () =>
    client.fetch(Experience())
  );

  return (
    <motion.div
      className="w-[90%] h-[60%] flex flex-col justify-center items-center"
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <Table
        columns={ExperienceColumns}
        row={data}
        isLoading={isLoading}
        title="Experience"
      />
    </motion.div>
  );
};

export default Experienc;
