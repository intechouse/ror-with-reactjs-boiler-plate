import React from "react";
import loadable from "@loadable/component";

import { PAGE_404, PAGE_500, HOME, ROOT } from "../routing";

const Home = loadable(() => import("../../pages/Home"));
const Login = loadable(() => import("../../pages/auth/Login"));
const Page404 = loadable(() => import("../../pages/Page404"));
const Page500 = loadable(() => import("../../pages/Page500"));

export const unAuthenticationRoutes = [
  {
    path: HOME,
    exact: false,
    name: "HOME",
    component: Home,
  },
  {
    path: ROOT,
    exact: true,
    name: "LOGIN",
    component: Login,
  },
  {
    path: PAGE_404,
    exact: true,
    name: "PAGE_404",
    component: Page404,
  },
  {
    path: PAGE_500,
    exact: true,
    name: "PAGE_500",
    component: Page500,
  },
];
