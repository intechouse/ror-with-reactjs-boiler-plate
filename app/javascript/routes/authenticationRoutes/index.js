import React from "react";
import loadable from "@loadable/component";

import { FORGOT_PASSWORD, REGISTERATION } from "../routing";

const ForgotPassword = loadable(() =>
  import("../../pages/auth/ForgotPassword")
);

const Register = loadable(() => import("../../pages/auth/Register"));

export const authenticationRoutes = [
  {
    path: FORGOT_PASSWORD,
    exact: true,
    name: "FORGOT PASSWORD",
    component: ForgotPassword,
  },
  {
    path: REGISTERATION,
    exact: true,
    name: "REGISTERATION",
    component: Register,
  },
];
