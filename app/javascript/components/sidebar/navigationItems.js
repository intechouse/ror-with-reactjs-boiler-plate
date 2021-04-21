import React from "react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const navigationItems = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/home/dashboard",
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
    to: "/home/tables",
    icon: (
      <CIcon content={freeSet.cilChart} customClasses="c-sidebar-nav-icon" />
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Modal",
    to: "/home/modals",
    icon: (
      <CIcon content={freeSet.cilBell} customClasses="c-sidebar-nav-icon" />
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Error 404",
    to: "/page404",
    icon: (
      <CIcon content={freeSet.cilWarning} customClasses="c-sidebar-nav-icon" />
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Error 500",
    to: "/page500",
    icon: (
      <CIcon content={freeSet.cilWarning} customClasses="c-sidebar-nav-icon" />
    ),
  },
];

export default navigationItems;
