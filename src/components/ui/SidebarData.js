import React from "react";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Screens",
    path: "/screens",
    icon: <GiFoundryBucket />,
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
];
