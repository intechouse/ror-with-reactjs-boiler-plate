import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CFormGroup,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

import InputWithIcon from "../../components/InputWithIcon";

// import Register from "./Register";

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onChange",
    shouldFocusError: true,
  });
  const onSubmit = (data) => {
    console.log(data);
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
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <InputWithIcon
                          type="email"
                          name="email"
                          autoComplete="name"
                          placeholder="Enter your name"
                          inputReference={register({
                            required: {
                              value: true,
                              message: "please fill the email field",
                            },
                            pattern: {
                              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                              message: "please enter valid format",
                            },
                          })}
                          errorMessage={errors.email ? errors.email : null}
                        />
                        </CInputGroup>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="12">
                        <CInputGroup>
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <InputWithIcon
                            type="password"
                            name="password"
                            autoComplete="password"
                            placeholder="Enter your Password"
                            inputReference={register({
                              required: {
                                value: true,
                                message: "please fill the password field",
                              },
                              minLength: {
                                value: 6,
                                message: "minimum 6 character",
                              },
                            })}
                            errorMessage={
                              errors.password ? errors.password : null
                            }
                          />
                        </CInputGroup>
                      </CCol>
                    </CFormGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <Link to="/forgot-password">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/register">
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

export default Login;
