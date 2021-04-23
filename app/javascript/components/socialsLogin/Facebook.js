import React, { useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { CButton } from "@coreui/react";
import { cibFacebook } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const Facebook = () => {
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
        className="button"
        // onClick={componentClicked}
        // callback={responseFacebook}
        render={(renderProps) => (
          <CButton  className="btn-facebook col-12 btn-brand mr-1 mb-1"><CIcon content={cibFacebook}/><span className="mfs-2">Facebook</span></CButton>

        )}
      />
    );
  }
  return <div>{fbContent}</div>;
}

export default Facebook;
