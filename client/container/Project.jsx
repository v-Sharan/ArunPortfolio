import React from "react";
import { Table } from "../components";

import { motion } from "framer-motion";

import { useQuery } from "react-query";

import { consconsultancyCloumns, patentColumn } from "../constants";

import { client } from "../utils/client";
import { ConsultancyProject, PatentFiling } from "../utils/queries";

const Project = () => {
  const { data: consultancy, isLoading: conslatncyIsLoading } = useQuery(
    "consultancy",
    () => client.fetch(ConsultancyProject())
  );
  const { data: patent, isLoading } = useQuery("Patent", () =>
    client.fetch(PatentFiling())
  );

  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="w-[90%] h-[60%] flex flex-coljustify-center flex-col items-center"
    >
      <Table
        columns={consconsultancyCloumns}
        row={consultancy}
        title="Consultancy"
        isLoading={conslatncyIsLoading}
        category="Consultancy and Patent Filling"
      />
      <Table
        columns={patentColumn}
        row={patent}
        title="Patent Filling"
        isLoading={conslatncyIsLoading}
      />
    </motion.div>
  );
};

export default Project;
