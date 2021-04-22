import React from "react";
import { useForm } from "react-hook-form";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CRow,
} from "@coreui/react";
import { cibMailRu, freeSet } from "@coreui/icons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import InputWithIcon from "../../components/InputWithIcon";
import { registerUser } from "../../store/redux-token-auth-config";
import { postRequest } from "../../services/Server";
import { SIGNUP } from "../../services/Constants";
import { showMessageAutoHide } from "../../director/Helpers";
import { HOME, ROOT } from "../../routes/routing";

const Register = (props) => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onChange",
    shouldFocusError: true,
  });
  const onSubmit = (data) => {
    console.log("debugging", SIGNUP, data);

    const params = {
      user: {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.passwordConfirmation,
        username: data.username,
      },
      confirm_success_url: "",
    };

    postRequest(SIGNUP, params)
      .then((result) => {
        console.log("Sign up success", result);
        if (result.data.status === "success") {
          showMessageAutoHide(
            "success",
            "REGISTRATION SUCCESS!",
            result.data.status
          );
          setTimeout(() => {
            props.history.replace(HOME);
          }, 2000);
        }
      })
      .catch((error) => {
        console.log("Sign up error", error);
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
                          message: "please fill the userName field",
                        },
                      })}
                      errorMessage={errors.name ? errors.name : null}
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
                          message: "please fill the userName field",
                        },
                      })}
                      errorMessage={errors.username ? errors.username : null}
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
                          message: "please fill the password field",
                        },
                        minLength: {
                          value: 6,
                          message: "minimum 6 character",
                        },
                      })}
                      errorMessage={errors.password ? errors.password : null}
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
                          message: "please fill the confirm password",
                        },
                        minLength: {
                          value: 6,
                          message: "minimum 6 character",
                        },
                      })}
                      errorMessage={
                        errors.passwordConfirmation
                          ? errors.passwordConfirmation
                          : null
                      }
                    />
                  </CInputGroup>
                  <CButton color="success" type="submit" block>
                    Create Account
                  </CButton>
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
