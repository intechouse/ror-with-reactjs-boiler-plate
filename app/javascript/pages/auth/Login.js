import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CRow,
  CFormGroup
} from '@coreui/react';
import { cibMailRu, freeSet } from '@coreui/icons';
import { Beetle as Button } from 'react-button-loaders';

import InputWithIcon from '../../components/InputWithIcon';
import Facebook from '../../components/socialsLogin/Facebook';
import Google from '../../components/socialsLogin/Google';
import InstaGram from '../../components/socialsLogin/InstaGram';

// import Register from "./Register";
import { signInUser } from '../../store/redux-token-auth-config';
import {
  isLoggedInSelector,
  getCurrentUser
} from '../../store/selectors/authSelector';
import {
  showMessageAutoHide,
  sweetAlertWithFailedButton
} from '../../director/Helpers';
import {
  FORGOT_PASSWORD,
  HOME,
  REGISTERATION,
  RESEND_EMAIL_CONFIRMATION
} from '../../routes/routing';

const Login = (props) => {
  console.log('Login props', props);
  const { signInUser, isSignedIn, currentUser } = props;
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onChange',
    shouldFocusError: true
  });
  const [loading, setLoading] = useState('');

  const onSubmit = (data) => {
    console.log(data);

    setLoading('loading');
    signInUser(data)
      .then((result) => {
        console.log('Login success', result, isSignedIn, currentUser);

        setLoading('finished');
        showMessageAutoHide('success', 'LOGIN SUCCESS!', 'Login Success');
        setTimeout(() => {
          props.history.replace(HOME);
        }, 1000);
      })
      .catch((error) => {
        console.log('Login error', error.response, isSignedIn, currentUser);
        setLoading('');
        if (
          error.response &&
          error.response.status === 401 &&
          error.response.data.errors
        ) {
          sweetAlertWithFailedButton(
            'LOGIN FAILED',
            error.response.data.errors[0],
            'Continue'
          );
        }
      });
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CFormGroup row>
                      <CCol md="12">
                        <CInputGroup>
                          <InputWithIcon
                            type="email"
                            name="email"
                            autoComplete="name"
                            icon={cibMailRu}
                            placeholder="Enter your name"
                            inputReference={register({
                              required: {
                                value: true,
                                message: 'please fill the email field'
                              },
                              pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'please enter valid format'
                              }
                            })}
                            errorMessage={errors.email ? errors.email : null}
                            isDisabled={loading}
                          />
                        </CInputGroup>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="12">
                        <CInputGroup>
                          <InputWithIcon
                            type="password"
                            name="password"
                            autoComplete="password"
                            placeholder="Enter your Password"
                            icon={freeSet.cilLockLocked}
                            inputReference={register({
                              required: {
                                value: true,
                                message: 'please fill the password field'
                              },
                              minLength: {
                                value: 6,
                                message: 'minimum 6 character'
                              }
                            })}
                            errorMessage={
                              errors.password ? errors.password : null
                            }
                            isDisabled={loading}
                          />
                        </CInputGroup>
                      </CCol>
                    </CFormGroup>
                    <div className="button-container">
                      <Button
                        state={loading}
                        className="button-primary-color w-100"
                        type="submit"
                      >
                        Login
                      </Button>
                    </div>
                    <CRow>
                      <CCol xs="12" className="mt-2">
                        <Link to={FORGOT_PASSWORD}>
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </Link>
                      </CCol>

                    </CRow>
                    <CRow className="mt-1">
                      <CCol xs="12">
                        <Link to={RESEND_EMAIL_CONFIRMATION}>
                          <CButton color="link" className="px-0">
                            Resend Email Confirmation
                          </CButton>
                        </Link>
                      </CCol>
                      <CRow className="mt-3">
                        <CCol xs="12">
                          <Facebook />
                        </CCol>
                        <CCol xs="12" >
                          <Google />
                        </CCol>
                        <CCol xs="12" >
                          <InstaGram />
                        </ CCol>
                      </CRow>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: '44%' }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to={REGISTERATION}>
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  const isSignedIn = isLoggedInSelector(state);
  const currentUser = getCurrentUser(state);
  return {
    state,
    isSignedIn,
    currentUser
  };
};

export default connect(mapStateToProps, { signInUser })(Login);
