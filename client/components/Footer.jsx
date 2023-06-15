import React from "react";
import { AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer footer-center p-5 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a
          className="link link-hover"
          href="https://publons.com/wos-op/researcher/3182204/arun-chokkalingam/metrics/"
          target={"_blank"}
        >
          Web of Science Publications
        </a>
        <a
          className="link link-hover"
          href="https://www.scopus.com/authid/detail.uri?authorId=22833289100"
          target={"_blank"}
        >
          Scopus Citation
        </a>
        <a
          className="link link-hover"
          href="https://scholar.google.com/citations?user=C8lRd-UAAAAJ&hl=en&authuser=2"
        >
          Google Scholer
        </a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://youtube.com/playlist?list=PLvzhMI9KCrTSedg3-Y6h7C6GqV6Z-Z_ad">
            <AiFillYoutube
              size={40}
              className="hover:text-red-500 text-red-600"
            />
          </a>
          <a href="">
            <AiFillFacebook
              size={40}
              className="hover:text-blue-500 text-blue-600"
            />
          </a>
          <a href="">
            <SiGmail size={40} className="hover:text-red-500 text-red-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
