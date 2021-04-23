import React from "react";
import InstaLogin from "react-instagram-login";
import { cibInstagram } from "@coreui/icons";
import CIcon from "@coreui/icons-react";


const InstaGram = () => {
  // const responseInstagram = (response) => {
  //     console.log(response);
  //   }
  let InstaContent;
  InstaContent = (
    <InstaLogin
      clientId=""
    //   onSuccess={responseInstagram}
    //   onFailure={responseInstagram}
    cssClass="insta col-12"
    >
      <CIcon content={cibInstagram} /><span className="mfs-2">Instagram</span>
    </InstaLogin>
  );

  return <div>{InstaContent}</div>;
}

export default InstaGram;
