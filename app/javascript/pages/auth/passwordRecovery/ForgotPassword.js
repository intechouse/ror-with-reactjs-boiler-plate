import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CRow
} from '@coreui/react';
import { cibMailRu } from '@coreui/icons';
import { Beetle as Button } from 'react-button-loaders';

import InputWithIcon from '../../../components/InputWithIcon';
import { postRequest } from '../../../services/Server';
import { FORGET_PASSWORD, WEBSITE_BASE_URL } from '../../../services/Constants';
import {
  showMessage,
  sweetAlertWithFailedButton
} from '../../../director/Helpers';
import { RESET_PASSWORD } from '../../../routes/routing';

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onChange',
    shouldFocusError: true
  });
  const [loading, setLoading] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    const params = {
      email: data.email,
      redirect_url: WEBSITE_BASE_URL + RESET_PASSWORD
    };

    setLoading('loading');
    postRequest(FORGET_PASSWORD, params)
      .then((result) => {
        console.log('Forgot Passord, success', result);

        setLoading('finished');
        if (result.data.success) {
          showMessage('success', 'PASSWORD RESET!', result.data.message, true);
        }
      })
      .catch((error) => {
        console.log('Forgot Passord, error', error.response);
        setLoading('');
        if (
          error.response &&
          error.response.status === 404 &&
          error.response.data.errors
        ) {
          sweetAlertWithFailedButton(
            'PASSWORD RESET FAILED',
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
                  <h1>Forget Password</h1>
                  <p className="text-muted">Reset your password</p>

                  <CInputGroup className="mb-3">
                    <InputWithIcon
                      type="email"
                      name="email"
                      autoComplete="email"
                      icon={cibMailRu}
                      placeholder="Enter your email"
                      inputReference={register({
                        required: {
                          value: true,
                          message: 'Email is required'
                        },
                        pattern: {
                          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: 'Email is invalid'
                        }
                      })}
                      errorMessage={errors.email ? errors.email : null}
                      isDisabled={loading}
                    />
                  </CInputGroup>

                  <div>
                    <Button
                      state={loading}
                      className="button-primary-color w-100"
                      type="submit"
                    >
                    Reset Password
                    </Button>
                  </div>
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
