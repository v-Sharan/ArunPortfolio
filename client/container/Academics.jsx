import * as React from "react";

import { motion } from "framer-motion";

import { Table } from "../components";

import { useQuery } from "react-query";

import { client } from "../utils/client";
import { AcademicsQueries } from "../utils/queries";
import Experience from "./Experience";

import { AcademicsColumns } from "../constants/columns";

const Academics = () => {
  const { data, isLoading } = useQuery("Academics", () =>
    client.fetch(AcademicsQueries())
  );

  return (
    <>
      <motion.div
        className="w-[90%] h-[60%] flex flex-col justify-center items-center rounded"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Table
          columns={AcademicsColumns}
          category="Academics & Experience"
          title="Academics"
          row={data}
          isLoading={isLoading}
        />
      </motion.div>
      <Experience />
    </>
  );
};
export default Academics;
