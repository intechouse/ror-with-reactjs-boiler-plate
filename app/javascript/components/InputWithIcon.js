import React from "react";
import PropTypes from "prop-types";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CFormGroup,
} from "@coreui/react";

const Input = (props) => {
  const { errorMessage } = props;
  let errors = null;
  if (errorMessage && Array.isArray(errorMessage)) {
    errors = "";
    errorMessage.forEach((e) => {
      errors =
        errors +
        props.name[0].toUpperCase() +
        props.name.substring(1) +
        " " +
        e +
        ", ";
    });
  } else if (errorMessage && errorMessage.message) {
    errors = errorMessage.message;
  }
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        autoComplete={props.autoComplete}
        className={
          "form-control " +
          (errors ? "inputErrorBorder " : "") +
          (props.className ? props.className : "")
        }
        placeholder={props.placeholder}
        ref={props.inputReference}
      />
      <CCol md="12">
      {errors ? (
        <p className="inputErrors">
          <i className="fas fa-exclamation-triangle"></i> {errors}
        </p>
      ) : (
        ""
      )}
      </CCol>
      
    </>
  );
};

export default Input;
