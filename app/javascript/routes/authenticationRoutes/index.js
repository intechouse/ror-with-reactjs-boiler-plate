import loadable from '@loadable/component';

import { EMAIL_CONFIRMATION_REQUEST, FORGOT_PASSWORD, REGISTERATION } from '../routing';

const ForgotPassword = loadable(() =>
  import('../../pages/auth/passwordRecovery/ForgotPassword')
);

const Register = loadable(() => import('../../pages/auth/Register'));

const EmailConfirmationRequest = loadable(() => import('../../pages/auth/emailConfirmation/EmailConfirmationRequest'));

export const authenticationRoutes = [
  {
    path: FORGOT_PASSWORD,
    exact: true,
    name: 'FORGOT PASSWORD',
    component: ForgotPassword
  },
  {
    path: REGISTERATION,
    exact: true,
    name: 'REGISTERATION',
    component: Register
  },
  {
    path: EMAIL_CONFIRMATION_REQUEST,
    exact: true,
    name: 'EMAIL CONFIRMATION REQUEST',
    component: EmailConfirmationRequest
  }
];
