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
      className="flex justify-center flex-col items-center"
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
