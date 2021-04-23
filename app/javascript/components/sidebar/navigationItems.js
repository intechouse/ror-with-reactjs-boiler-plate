import React from "react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

import {
  DASHBOARD,
  MODALS,
  PAGE_404,
  PAGE_500,
  TABLES,
} from "../../routes/routing";

const navigationItems = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: DASHBOARD,
    icon: (
      <CIcon
        content={freeSet.cilSpeedometer}
        customClasses="c-sidebar-nav-icon"
      />
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Tables",
    to: TABLES,
    icon: (
      <CIcon content={freeSet.cilChart} customClasses="c-sidebar-nav-icon" />
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Modal",
    to: MODALS,
    icon: (
      <CIcon content={freeSet.cilBell} customClasses="c-sidebar-nav-icon" />
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Error 404",
    to: PAGE_404,
    icon: (
      <CIcon content={freeSet.cilWarning} customClasses="c-sidebar-nav-icon" />
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Error 500",
    to: PAGE_500,
    icon: (
      <CIcon content={freeSet.cilWarning} customClasses="c-sidebar-nav-icon" />
    ),
  },
];

export default navigationItems;
