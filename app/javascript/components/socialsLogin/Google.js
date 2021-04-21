import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { CButton } from "@coreui/react";
import GoogleButton from 'react-google-button'

function Google() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const responseGoogle = (response) => {
  //     console.log(response);
  //   }
  let googleContent;
  if (isLoggedIn) {
    googleContent = null;
  } else {
    googleContent = (
      <GoogleLogin
        clientId=""
        buttonText="google"
        // onSuccess={responseGoogle}
        // onFailure={responseGoogle}
        render={(renderProps) => (
          <CButton
            color="success"
            className="px-4"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Google
          </CButton>
        )}
      />
    );
  }
  return <div>{googleContent}</div>;
}

export default Google;
