import React from "react";
import { useForm } from "react-hook-form";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CRow,
} from "@coreui/react";
import { cibMailRu } from "@coreui/icons";

import InputWithIcon from "../../components/InputWithIcon";
import { postRequest } from "../../services/Server";
import { FORGET_PASSWORD } from "../../services/Constants";
import {
  showMessage,
  sweetAlertWithFailedButton,
} from "../../director/Helpers";

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onChange",
    shouldFocusError: true,
  });
  const onSubmit = (data) => {
    console.log(data);
    const params = {
      email: data.email,
      redirect_url: "",
    };
    postRequest(FORGET_PASSWORD, params)
      .then((result) => {
        console.log("Forgot Passord, success", result);
        if (result.data.success) {
          showMessage("success", "PASSWORD RESET!", result.data.message, true);
        }
      })
      .catch((error) => {
        console.log("Forgot Passord, error", error.response);
        if (
          error.response &&
          error.response.status === 404 &&
          error.response.data.errors
        ) {
          sweetAlertWithFailedButton(
            "LOGIN FAILED",
            error.response.data.errors[0],
            "Continue"
          );
        }
      });
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit(onSubmit)}>
                  <h1>Forget Password</h1>
                  <p className="text-muted">Reset your password</p>

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

                  <CButton type="submit" color="primary" block>
                    Reset Password
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ForgotPassword;
