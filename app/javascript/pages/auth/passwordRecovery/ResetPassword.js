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
import { freeSet } from '@coreui/icons';
import { Beetle as Button } from 'react-button-loaders';

import InputWithIcon from '../../../components/InputWithIcon';
import { putRequest } from '../../../services/Server';
import { RESET_PASSWORD } from '../../../services/Constants';
import {
  showMessage,
  showMessageSomethingWentWrong,
  sweetAlertWithFailedButton
} from '../../../director/Helpers';
import { ROOT } from '../../../routes/routing';

const ForgotPassword = (props) => {
  console.log('ResetPassword Props are', props);
  const [loading, setLoading] = useState('');

  const { location } = props;
  console.log('ResetPassword, Location is: ', location);
  console.log(
    'ResetPassword, Location is: ',
    decodeURIComponent(location.search)
  );

  const params = new Map(
    decodeURIComponent(location.search)
      .slice(1)
      .split('&')
      .map((kv) => kv.split('='))
  );
  console.log('ResetPassword, Params are: ', params);

  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onChange',
    shouldFocusError: true
  });
  const onSubmit = (data) => {
    const headers = {
      'Content-Type': 'application/json',
      'access-token': params.get('access-token'),
      client: params.get('client'),
      client_id: params.get('client_id'),
      token: params.get('token'),
      uid: params.get('uid')
    };
    console.log('ResetPassword, Data is: ', data);
    console.log('ResetPassword, Headers are: ', headers);

    setLoading('loading');
    putRequest(RESET_PASSWORD, data, headers)
      .then((result) => {
        console.log('Forgot Passord, success', result);

        setLoading('finished');
        if (
          result.status === 200 &&
          result.data.success &&
          result.data.message
        ) {
          showMessage('success', 'PASSWORD RESET!', result.data.message, true);
          props.history.replace(ROOT);
        } else {
          showMessageSomethingWentWrong();
        }
      })
      .catch((error) => {
        console.log('Forgot Passord, error', error.response);
        setLoading('');
        if (error.response.status === 422 && error.response.data && error.response.data.errors) {
          if (error.response.data.errors.full_messages) {
            sweetAlertWithFailedButton(
              'PASSWORD RESET FAILED',
              error.response.data.errors.full_messages[0],
              'Continue'
            );
          } else {
            sweetAlertWithFailedButton(
              'PASSWORD RESET FAILED',
              error.response.data.errors[0],
              'Continue'
            );
          }
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
                      autoComplete="off"
                      placeholder="Enter your Password"
                      icon={freeSet.cilLockLocked}
                      inputReference={register({
                        required: {
                          value: true,
                          message: 'Password is required'
                        },
                        minLength: {
                          value: 6,
                          message: 'Password length should be minimum 6'
                        }
                      })}
                      errorMessage={errors.password ? errors.password : null}
                      isDisabled={loading}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <InputWithIcon
                      type="password"
                      name="password_confirmation"
                      autoComplete="off"
                      placeholder="Confirm password"
                      icon={freeSet.cilLockLocked}
                      inputReference={register({
                        required: {
                          value: true,
                          message: 'Password is required'
                        },
                        minLength: {
                          value: 6,
                          message: 'Password length should be minimum 6'
                        }
                      })}
                      errorMessage={
                        errors.password_confirmation
                          ? errors.password_confirmation
                          : null
                      }
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
