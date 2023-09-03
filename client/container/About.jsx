import React from "react";
import { motion } from "framer-motion";

const data = [
  "Life Member in ISTE- LM45065",
  "Life Member of VSI (VLSI society of India)- 1601",
  "IET (Institution of Engineering and Technology) Annual member -1100210638",
];

const Languages = ["English", "Tamil", "Telugu"];

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

const About = () => {
  return (
    <div className=" flex items-center justify-center w-full md:w-[90%] sm:w-[55%] overflow-hidden flex-col mt-10 dark:text-white">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex p-6 items-center justify-between h-[90%] bg-white rounded-lg shadow-2xl w-[70%] xl:w-[40%] mb-10"
      >
        <div className="text-gray-950">
          <h1 className="text-xl font-bold">Personal Profile:</h1>
          <div>
            Nationality : Indian
            <br />
            Date of Birth : 28 Feb 1979 <br />
            PAN ID : ANFPA4763J <br />
            Passport Number : K3855316
            <br /> Father’s Name : P.G. Chokkalingam Marital <br />
            Status : Married <br />
            Phone Number : 9843506892
          </div>
        </div>
      </motion.div>
      <motion.div>
        <h1 className="pl-48 text-2xl mt-8 font-bold">
          Membership in Professional bodies
        </h1>
        <motion.ol
          variants={container}
          initial="hidden"
          animate="visible"
          className="tracking-wider p-10 text-lg list-decimal ml-20"
        >
          {data.map((item) => (
            <motion.li variants={items}>{item}</motion.li>
          ))}
        </motion.ol>
      </motion.div>
      <motion.div>
        <h1 className="pl-48 text-2xl mt-8 font-bold">Technical Skills</h1>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="tracking-wider p-10 text-lg list-decimal ml-20"
        >
          Language : C, C++, VHDL <br />
          Tools : MatLab, Modelsim, FPGA Advantage, Multisim <br />
          Platforms : DOS, Windows 9X, Windows NT/2000 <br />
          Hardware : Intel x85, x86, PIC Processors
        </motion.div>
      </motion.div>
      <motion.div>
        <h1 className="pl-[34%] text-2xl mt-8 font-bold">
          Funded project submitted
        </h1>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="tracking-wider pl-40 pt-10 w-full text-lg list-decimal"
        >
          Principal Investigator : Mr.C.Arun,
          <br /> Funding agency : DST
          <br /> Proposed expenditure : Rs. 12 lakhs <br />
          Title: Design and Implementation of a Hard Output Viterbi Algorithm
          <br />
          (HOVA) for use in a Concatenated Source Coding Scheme.
        </motion.div>
      </motion.div>
      <motion.div>
        <h1 className="text-2xl mt-8 font-bold">Languages known</h1>
        <motion.ol
          variants={container}
          initial="hidden"
          animate="visible"
          className="tracking-wider p-10 text-lg list-decimal ml-20"
        >
          {Languages.map((item) => (
            <motion.li variants={items}>{item}</motion.li>
          ))}
        </motion.ol>
      </motion.div>
    </div>
  );
};

export default About;
