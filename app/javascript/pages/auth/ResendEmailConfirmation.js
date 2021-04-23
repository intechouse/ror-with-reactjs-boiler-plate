import React from 'react';
import { useForm } from 'react-hook-form';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CRow
} from '@coreui/react';
import { cibMailRu } from '@coreui/icons';

import InputWithIcon from '../../components/InputWithIcon';
import { postRequest } from '../../services/Server';
import { RESEND_CONFIRMATION } from '../../services/Constants';
import {
  showMessage,
  sweetAlertWithFailedButton
} from '../../director/Helpers';

const ResendEmailConfirmation = () => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onChange',
    shouldFocusError: true
  });
  const onSubmit = (data) => {
    console.log(data);

    postRequest(RESEND_CONFIRMATION, data)
      .then((result) => {
        console.log('ResendEmailConfirmation, success', result);
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
                    />
                  </CInputGroup>

                  <CButton type="submit" color="primary" block>
                    Resend Email
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

export default ResendEmailConfirmation;
