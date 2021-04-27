import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  CCard,
  CCardBody,
  CCol,
  CButton,
  CContainer,
  CForm,
  CInputGroup,
  CRow
} from '@coreui/react';
import { cibMailRu } from '@coreui/icons';
import { Beetle as Button } from 'react-button-loaders';
import { Link } from 'react-router-dom';

import InputWithIcon from '../../../components/InputWithIcon';
import { postRequest } from '../../../services/Server';
import {
  RESEND_CONFIRMATION,
  WEBSITE_BASE_URL
} from '../../../services/Constants';
import {
  showMessage,
  sweetAlertWithFailedButton
} from '../../../director/Helpers';
import {
  EMAIL_CONFIRMATION_REQUEST,
  FORGOT_PASSWORD,
  ROOT
} from '../../../routes/routing';

const ResendEmailConfirmation = () => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onChange',
    shouldFocusError: true
  });
  const [loading, setLoading] = useState('');

  const onSubmit = (data) => {
    data.redirect_url = WEBSITE_BASE_URL + EMAIL_CONFIRMATION_REQUEST;
    console.log(data);

    setLoading('loading');
    postRequest(RESEND_CONFIRMATION, data)
      .then((result) => {
        console.log('ResendEmailConfirmation, success', result);

        setLoading('finished');
        if (result.data.success) {
          showMessage(
            'success',
            'Email Confirmation Sent!',
            result.data.message,
            true
          );
        }
      })
      .catch((error) => {
        console.log('ResendEmailConfirmation, error', error.response);
        setLoading('');
        if (
          error.response &&
          error.response.status === 404 &&
          error.response.data.errors
        ) {
          sweetAlertWithFailedButton(
            'RESEND CONFIRMATION FAILED',
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
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit(onSubmit)}>
                  <h1>Resend Email Confirmation</h1>
                  <p className="text-muted">Please Enter your Email.</p>

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
                  <div className="mb-3">
                    <Button
                      state={loading}
                      className="button-primary-color w-100"
                      type="submit"
                    >
                      Resend Email
                    </Button>
                  </div>

                  <CCol xs="6" className="label-for-register-form">
                    <Link to={FORGOT_PASSWORD}>
                      <CButton color="link" className="px-0">
                        Forgot password?
                      </CButton>
                    </Link>
                  </CCol>

                  <CCol xs="6" className="label-for-register-form">
                    <Link to={ROOT}>
                      <CButton color="link" className="px-0">
                        Already Have An Account?
                      </CButton>
                    </Link>
                  </CCol>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ResendEmailConfirmation;
