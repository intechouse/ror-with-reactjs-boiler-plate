import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import { css } from '@emotion/core';

import PleaseWait from './PleaseWait';

const Loading = (props) => {
  const { title, message, pleaseWait } = props;
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="row justify-content-center">
      <div className="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-1"></div>
      <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-10 loadingContainer">
        {title
          ? (
            <div className="row justify-content-center mb-5 loadingHeading">
              <h3>{title}</h3>
            </div>
          )
          : (
            ''
          )}
        <BounceLoader css={override} size={150} color={'#252919'} />
        {pleaseWait ? <PleaseWait /> : ''}
        {message
          ? (
            <div className="row justify-content-center mt-5">
              <h3>{message}</h3>
            </div>
          )
          : (
            ''
          )}
      </div>
      <div className="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-1"></div>
    </div>
  );
};

export default Loading;
