import React, { useState } from "react";
import InstaLogin from "react-instagram-login";
import { CButton } from "@coreui/react";


function InstaGram() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const responseInstagram = (response) => {
    //     console.log(response);
    //   }
    let InstaContent;
  if (isLoggedIn) {
    InstaContent = null;
  } else {
    InstaContent = (
      <InstaLogin
      clientId=""
      buttonText="InstaGram"
    //   onSuccess={responseInstagram}
    //   onFailure={responseInstagram}
    cssClass="px-4 btn btn-warning disabled"
    
      />
    );
  }
  return <div>{InstaContent}</div>;
}

export default InstaGram;
