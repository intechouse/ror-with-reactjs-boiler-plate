import { CCol, CContainer, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { Beetle as Button } from 'react-button-loaders';

import { RESEND_EMAIL_CONFIRMATION, ROOT } from '../../../routes/routing';
import Loading from '../../../components/loading/Loading';

const EmailConfirmationRequest = (props) => {
  console.log('EmailConfirmationRequest,  Props are: ', props);
  const { location } = props;
  console.log('EmailConfirmationRequest, Location is: ', location);
  const params = new Map(
    location.search
      .slice(1)
      .split('&')
      .map((kv) => kv.split('='))
  );
  console.log('EmailConfirmationRequest, Params are: ', params);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <React.Fragment>
      <section className="login-area ptb-60">
        {isLoading
          ? (
            <div className="container">
              <Loading
                title="Email Confirmation"
                message="Confirming your email"
                pleaseWait={true}
              />
            </div>
          )
          : (
            <div className="c-app c-default-layout flex-row align-items-center">
              <CContainer>
                <CRow className="justify-content-center">
                  <CCol md="8 text-center">
                    {params.get('account_confirmation_success') === 'true' && (
                      <div id="email-verified-container">
                        <h3>
                        Your email address has been verified successfully.
                        </h3>
                        <br />
                        <Button
                          className="m-auto button-primary-color"
                          onClick={() => {
                            props.history.push(ROOT);
                          }}
                          id="login-button"
                        >
                        CLICK HERE TO LOGIN!
                        </Button>
                      </div>
                    )}
                    {params.get('account_confirmation_success') === 'false' && (
                      <div id="email-verified-container">
                        <h3>Your email verification link has been expired.</h3>
                        <h4>Try resending the confirmation email.</h4>
                        <br />
                        <Button
                          className="m-auto w-50 button-primary-color"
                          onClick={() => {
                            props.history.push(RESEND_EMAIL_CONFIRMATION);
                          }}
                          id="resend-email-button"
                        >
                        RESEND CONFIRMATION EMAIL!
                        </Button>
                      </div>
                    )}
                    {params.get('already_verified') === 'true' && (
                      <div id="email-verified-container">
                        <h3>
                        Your account&apos;s email address has already been verified.
                        </h3>
                        <br />
                        <Button
                          className="m-auto button-primary-color"
                          onClick={() => {
                            props.history.push(ROOT);
                          }}
                          id="login-button"
                        >
                        CLICK HERE TO LOGIN!
                        </Button>
                      </div>
                    )}
                    {params.get('something_wrong') === 'true' && (
                      <div id="email-verified-container">
                        <h3>Oh, SORRY!</h3>
                        <h4>It&apos;s not you. Its Us.</h4>
                        <h4>Try resending the confirmation email.</h4>
                        <br />
                        <Button
                          className="m-auto w-50 button-primary-color"
                          onClick={() => {
                            props.history.push(RESEND_EMAIL_CONFIRMATION);
                          }}
                          id="resend-email-button"
                        >
                        RESEND CONFIRMATION EMAIL!
                        </Button>
                      </div>
                    )}
                  </CCol>
                </CRow>
              </CContainer>
            </div>
          )}
      </section>
    </React.Fragment>
  );
};

export default EmailConfirmationRequest;
