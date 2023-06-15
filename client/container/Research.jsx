import React from "react";
import { useQuery } from "react-query";
import { client } from "../utils/client";
import { ResearchGuidance } from "../utils/queries";
import { ResearchColumn } from "../constants/columns";
import { Table } from "../components";
import { motion } from "framer-motion";

const Research = () => {
  const { data, isLoading } = useQuery("research", () =>
    client.fetch(ResearchGuidance())
  );
  return (
    <motion.div
      className="w-[90%] h-[60%] flex flex-col justify-center items-center rounded"
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <Table
        columns={ResearchColumn}
        category="Grands"
        title="Grant Received"
        row={data}
        isLoading={isLoading}
        maxHeight="800"
      />
    </motion.div>
  );
};

export default Research;
