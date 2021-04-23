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

import InputWithIcon from "../../../components/InputWithIcon";
import { postRequest } from "../../../services/Server";
import { FORGET_PASSWORD, WEBSITE_BASE_URL } from "../../../services/Constants";
import {
  showMessage,
  sweetAlertWithFailedButton,
} from "../../../director/Helpers";
import { RESET_PASSWORD } from "../../../routes/routing";

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onChange",
    shouldFocusError: true,
  });
  const onSubmit = (data) => {
    console.log(data);
    const params = {
      email: data.email,
      redirect_url: WEBSITE_BASE_URL + RESET_PASSWORD,
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
            "PASSWORD RESET FAILED",
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
                      type="email"
                      name="email"
                      autoComplete="name"
                      icon={cibMailRu}
                      placeholder="Enter Email"
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
