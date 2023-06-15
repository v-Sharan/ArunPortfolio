import React from "react";
import { motion } from "framer-motion";

import { Table } from "../components";

import { useQuery } from "react-query";

import { GrantReceivedColumns } from "../constants";

import { client } from "../utils/client";
import { GrantReceived } from "../utils/queries";

const Grand = () => {
  const { data, isLoading } = useQuery("grand", () =>
    client.fetch(GrantReceived())
  );

  console.log(data);

  return (
    <motion.div
      className="w-[90%] h-[60%] flex flex-col justify-center items-center rounded"
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <Table
        columns={GrantReceivedColumns}
        category="Grands"
        title="Grant Received"
        row={data}
        isLoading={isLoading}
      />
    </motion.div>
  );
};

export default Grand;
