import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { CButton } from "@coreui/react";

import { cibGoogle } from "@coreui/icons";
import CIcon from "@coreui/icons-react";


const Google=()=> {
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
        // onSuccess={responseGoogle}
        // onFailure={responseGoogle}
        render={(renderProps) => (
          <CButton className="btn btn-google-plus col-12"><CIcon content={cibGoogle} /><span className="mfs-2">Google</span></CButton>

            
        )}
      />
    );
  }
  return <div>{googleContent}</div>;
}

export default Google;
