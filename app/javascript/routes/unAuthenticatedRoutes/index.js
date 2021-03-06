import loadable from '@loadable/component';

import {
  PAGE_404,
  PAGE_500,
  ROOT,
  RESET_PASSWORD,
  RESEND_EMAIL_CONFIRMATION
} from '../routing';

const Login = loadable(() => import('../../pages/auth/Login'));
const Page404 = loadable(() => import('../../pages/Page404'));
const Page500 = loadable(() => import('../../pages/Page500'));
const ResendEmailConfirmation = loadable(() =>
  import('../../pages/auth/emailConfirmation/ResendEmailConfirmation')
);
const ResetPassword = loadable(() =>
  import('../../pages/auth/passwordRecovery/ResetPassword')
);

export const unAuthenticationRoutes = [
  {
    path: ROOT,
    exact: true,
    name: 'LOGIN',
    component: Login
  },
  {
    path: PAGE_404,
    exact: true,
    name: 'PAGE_404',
    component: Page404
  },
  {
    path: PAGE_500,
    exact: true,
    name: 'PAGE_500',
    component: Page500
  },
  {
    path: RESEND_EMAIL_CONFIRMATION,
    exact: true,
    name: 'RESEND_EMAIL_CONFIRMATION',
    component: ResendEmailConfirmation
  },
  {
    path: RESET_PASSWORD,
    exact: true,
    name: 'RESET_PASSWORD',
    component: ResetPassword
  }
];
