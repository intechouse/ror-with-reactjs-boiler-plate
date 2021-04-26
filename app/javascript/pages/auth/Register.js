import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CRow
} from '@coreui/react';
import { cibMailRu, freeSet } from '@coreui/icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Beetle as Button } from 'react-button-loaders';

import InputWithIcon from '../../components/InputWithIcon';
import { registerUser } from '../../store/redux-token-auth-config';
import { postRequest } from '../../services/Server';
import { SIGNUP, WEBSITE_BASE_URL } from '../../services/Constants';
import {
  showMessageAutoHide,
  showMessageSomethingWentWrong,
  sweetAlertWithFailedButton
} from '../../director/Helpers';
import { EMAIL_CONFIRMATION_REQUEST, ROOT } from '../../routes/routing';

const Register = (props) => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onChange',
    shouldFocusError: true
  });
  const [loading, setLoading] = useState('');

  const onSubmit = (data) => {
    console.log('debugging', SIGNUP, data);

    const params = {
      user: {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.passwordConfirmation,
        username: data.username,
        mobile: data.phoneNumber
      },
      confirm_success_url: WEBSITE_BASE_URL + EMAIL_CONFIRMATION_REQUEST
    };
    setLoading('loading');

    postRequest(SIGNUP, params)
      .then((result) => {
        console.log('Sign up success', result);
        if (result.data.status === 'success') {
          showMessageAutoHide(
            'success',
            'REGISTRATION SUCCESS!',
            result.data.status
          );
          setTimeout(() => {
            props.history.replace(ROOT);
          }, 2000);
        }
      })
      .catch((error) => {
        console.log('Sign up error', error.response);
        setLoading('');
        if (
          error.response &&
          error.response.status === 422 &&
          error.response.data.errors &&
          error.response.data.errors.email
        ) {
          sweetAlertWithFailedButton(
            'REGISTERATION FAILED',
            'Email ' + error.response.data.errors.email[0],
            'Continue'
          );
        } else {
          showMessageSomethingWentWrong();
        }
      });
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4 register-card-body">
                <CForm onSubmit={handleSubmit(onSubmit)}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <InputWithIcon
                      type="name"
                      name="name"
                      autoComplete="name"
                      icon={freeSet.cilUser}
                      placeholder="Enter your name"
                      inputReference={register({
                        required: {
                          value: true,
                          message: 'please fill the userName field'
                        }
                      })}
                      errorMessage={errors.name ? errors.name : null}
                      isDisabled={loading}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <InputWithIcon
                      type="name"
                      name="username"
                      autoComplete="username"
                      icon={freeSet.cilUser}
                      placeholder="Enter your user name"
                      inputReference={register({
                        required: {
                          value: true,
                          message: 'please fill the userName field'
                        }
                      })}
                      errorMessage={errors.username ? errors.username : null}
                      isDisabled={loading}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <InputWithIcon
                      type="email"
                      name="email"
                      autoComplete="name"
                      icon={cibMailRu}
                      placeholder="Email address"
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
                  <CInputGroup className="mb-3">
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
                      errorMessage={errors.password ? errors.password : null}
                      isDisabled={loading}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <InputWithIcon
                      type="password"
                      name="passwordConfirmation"
                      autoComplete="off"
                      placeholder="confirm password"
                      icon={freeSet.cilLockLocked}
                      inputReference={register({
                        required: {
                          value: true,
                          message: 'please fill the confirm password'
                        },
                        minLength: {
                          value: 6,
                          message: 'minimum 6 character'
                        }
                      })}
                      errorMessage={
                        errors.passwordConfirmation
                          ? errors.passwordConfirmation
                          : null
                      }
                      isDisabled={loading}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <InputWithIcon
                      type="tel"
                      name="phoneNumber"
                      autoComplete="off"
                      placeholder="Phone Number"
                      icon={freeSet.cilPhone}
                      inputReference={register({
                        required: {
                          value: true,
                          message: 'please fill the Phone Number field'
                        },
                        pattern: {
                          value: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                          message: 'please enter valid format'
                        }
                      })}
                      errorMessage={
                        errors.phoneNumber ? errors.phoneNumber : null
                      }
                      isDisabled={loading}
                    />
                  </CInputGroup>
                  <div>
                    <Button
                      state={loading}
                      className="button-primary-color w-100"
                      type="submit"
                    >
                    Create Account
                    </Button>
                  </div>
                </CForm>
                <CCol xs="6" className="label-for-register-form">
                  <Link to={ROOT}>
                    <CButton color="link" className="px-0">
                      Already Have An Account?
                    </CButton>
                  </Link>
                </CCol>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block>
                      <span>facebook</span>
                    </CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block>
                      <span>twitter</span>
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default connect(null, { registerUser })(Register);
