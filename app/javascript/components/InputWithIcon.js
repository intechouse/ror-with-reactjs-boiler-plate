import React from 'react';
import { CCol, CInputGroupPrepend, CInputGroupText } from '@coreui/react';
import { freeSet } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

const Input = (props) => {
  const { errorMessage } = props;
  let errors = null;
  if (errorMessage && Array.isArray(errorMessage)) {
    errors = '';
    errorMessage.forEach((e) => {
      errors =
        errors +
        props.name[0].toUpperCase() +
        props.name.substring(1) +
        ' ' +
        e +
        ', ';
    });
  } else if (errorMessage && errorMessage.message) {
    errors = errorMessage.message;
    
  }
  return (
    <>
      <CInputGroupPrepend>
        <CInputGroupText>
          <CIcon content={props.icon} alt="Settings" />
        </CInputGroupText>
      </CInputGroupPrepend>
      <input
        disabled={props.isDisabled === 'loading'}
        type={props.type}
        name={props.name}
        autoComplete={props.autoComplete}
        className={errors ? 'inputErrorBorder form-control' : 'form-control'}
        placeholder={props.placeholder}
        ref={props.inputReference}
      />
      <CCol md="12" className="error-space">
        {errors
          ? (
            <>
              <CIcon
                md="2"
                className="error"
                content={freeSet.cilWarning}
                alt="Settings"
              />
              <CCol md="8" className='error'>
                <p>{errors}</p>
              </CCol>
            </>
          )
          : (
            ''
          )}
      </CCol>
    </>
  );
};

export default Input;
