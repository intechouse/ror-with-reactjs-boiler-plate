import React, { lazy } from "react";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));

const DashboardContent = (props) => {
  return (
    <>
      <WidgetsDropdown />
      <WidgetsBrand />
    </>
  );
};

export default DashboardContent;
