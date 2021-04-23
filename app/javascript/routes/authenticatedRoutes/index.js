import React from "react";
import loadable from "@loadable/component";

import { HOME } from "../routing";

const Home = loadable(() => import("../../pages/Home"));

export const authenticatedRoutes = [
  {
    path: HOME,
    exact: false,
    name: "HOME",
    component: Home,
  },
];
