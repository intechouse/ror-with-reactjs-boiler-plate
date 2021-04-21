import React from "react";
import { connect } from "react-redux";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import TheHeaderDropdown from "./TheHeaderDropdown";

const TheHeader = (props) => {
  console.log("Theheader, propes: ", props);
  const { sidebarShow } = props;

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    props.dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    props.dispatch({ type: "set", sidebarShow: val });
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/home/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdown />
      </CHeaderNav>
    </CHeader>
  );
};

const mapStateToProps = (state) => {
  console.log("Header, Map State to Props: ", state);
  return {
    sidebarShow: state.sidebar.sidebarShow,
  };
};

export default connect(mapStateToProps)(TheHeader);
