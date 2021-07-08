import React from "react";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Screens",
    path: "/screens",
    icon: <FaIcons.FaArtstation />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Flip Flow",
        path: "/screens/flipflow",
        icon: <FaIcons.FaRecycle />,
      },
      {
        title: "Woven Wire Mesh",
        path: "/screens/mesh",
        icon: <FaIcons.FaRecycle />,
      },
      {
        title: "Perforated Plate",
        path: "/screens/perforated",
        icon: <FaIcons.FaRecycle />,
      },
      {
        title: "Poly Panel",
        path: "/screens/polypanel",
        icon: <FaIcons.FaRecycle />,
      },
      {
        title: "Finger",
        path: "/screens/finger",
        icon: <FaIcons.FaRecycle />,
      },
      {
        title: "Ball Deck",
        path: "/screens/balldeck",
        icon: <FaIcons.FaRecycle />,
      },
    ],
  },
  {
    title: "Feeders",
    path: "/feeders",
    icon: <AiIcons.AiFillBulb />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Direct Drive",
        path: "/feedersDD",
        icon: <FaIcons.FaShippingFast />,
      },
      {
        title: "Sub Resonant",
        path: "/feeders/subresonant",
        icon: <FaIcons.FaCarAlt />,
      },
    ],
  },
  {
    title: "Conveyors",
    path: "/conveyors",
    icon: <FaIcons.FaArtstation />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Direct Drive",
        path: "/conveyors/directdrive",
        icon: <RiIcons.RiCaravanLine />,
      },
      {
        title: "Sub Resonant",
        path: "/conveyors/subresonant",
        icon: <RiIcons.RiCaravanLine />,
      },
    ],
  },
  {
    title: "Spiral",
    path: "/spiral",
    icon: <GiIcons.GiDividedSpiral />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Cooler",
    path: "/cooler",
    icon: <RiIcons.RiTempColdLine />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
  },
];
