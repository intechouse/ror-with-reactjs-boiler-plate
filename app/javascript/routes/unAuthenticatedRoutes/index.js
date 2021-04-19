import React from "react";
import loadable from "@loadable/component";

import { HOME, ROOT } from "../routing";

const Home = loadable(() => import("../../pages/Home"));
const Login = loadable(() => import("../../pages/auth/Login"));

export const unAuthenticationRoutes = [
  {
    path: HOME,
    exact: true,
    name: "HOME",
    component: Home,
  },
  {
    path: ROOT,
    exact: true,
    name: "LOGIN",
    component: Login,
  },
];
