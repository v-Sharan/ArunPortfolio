import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { GiVideoConference, GiReceiveMoney } from "react-icons/gi";
import { BsAward, BsJournalCheck, BsPersonWorkspace } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";
import { RiHonourLine } from "react-icons/ri";
import { TbListSearch } from "react-icons/tb";
import { GrWorkshop } from "react-icons/gr";
import { VscOrganization } from "react-icons/vsc";

export const links = [
  {
    title: "Profile",
    links: [
      {
        name: "Home",
        icon: AiOutlineHome,
        link: "/",
      },
      {
        name: "Academics And Experience",
        icon: HiOutlineAcademicCap,
        link: "/academics",
      },
      {
        name: "Grand Received",
        icon: GiReceiveMoney,
        link: "/grand",
      },
      {
        name: "About",
        icon: SiAboutdotme,
        link: "/about",
      },
    ],
  },
  {
    title: "Projects",
    links: [
      {
        name: "Consultancy And Patent Filling Projects",
        icon: AiOutlineProject,
        link: "/consultancy",
      },
    ],
  },
  {
    title: "Awards",
    links: [
      {
        name: "Awards and Responsibilities",
        icon: BsAward,
        link: "/awards",
      },
    ],
  },
  {
    title: "Research",
    links: [
      {
        name: "Research Guidance",
        icon: TbListSearch,
        link: "/research",
      },
    ],
  },
  {
    title: "Technical paper",
    links: [
      {
        name: " conferences & Journal",
        icon: GiVideoConference,
        link: "/technical",
      },
      {
        name: "Guest of Honour",
        icon: RiHonourLine,
        link: "/honour",
      },
      {
        name: "Guest Lectures delivered",
        icon: GrWorkshop,
        link: "/lectures",
      },
    ],
  },
  {
    title: "FDP & Workshops Attended",
    links: [
      {
        name: "Workshops Attended",
        icon: BsPersonWorkspace,
        link: "/workshop",
      },
      {
        name: "Organizing Workshops",
        icon: VscOrganization,
        link: "/organized",
      },
    ],
  },
  {
    title: "National Events",
    links: [
      {
        name: "Conference",
        icon: GiVideoConference,
        link: "/nconference",
      },
      {
        name: "Journal",
        icon: BsJournalCheck,
        link: "/njournal",
      },
    ],
  },
  {
    title: "International Events",
    links: [
      {
        name: "Conference",
        icon: GiVideoConference,
        link: "/iconference",
      },
      {
        name: "Journal",
        icon: BsJournalCheck,
        link: "/ijournal",
      },
    ],
  },
];
