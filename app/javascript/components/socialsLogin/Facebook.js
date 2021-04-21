import React, { useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { CButton } from "@coreui/react";
import { FacebookLoginButton } from "react-social-login-buttons";
import Facebook from './Facebook';

function Facebook() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  // responseFacebook=response=>{
  //     console.log(response);
  // }
  // componentClicked=()=>console.log("clicked");

  let fbContent;
  if (isLoggedIn) {
    fbContent = null;
  } else {
    fbContent = (
      <FacebookLogin
        appId=""
        autoLoad={true}
        fields=""
        // onClick={componentClicked}
        // callback={responseFacebook}
        render={(renderProps) => (
          <FacebookLoginButton
            onClick={renderProps.onClick}
          >
            <span>Facebook</span>
          </FacebookLoginButton>
        )}
      />
    );
  }
  return <div>{fbContent}</div>;
}

export default Facebook;
