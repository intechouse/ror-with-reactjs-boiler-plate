import React, { useState, useEffect } from 'react';

const PleaseWait = () => {
  const [pwText] = useState('Please wait...');
  const [pleaseWaitText, setPleaseWaitText] = useState('P');

  useEffect(() => {
    startPleaseWait();
  });

  const startPleaseWait = () => {
    const index = getLastIndexOf(pwText, pleaseWaitText);
    if (index !== pwText.length) {
      setTimeout(() => {
        setPleaseWaitText(pwText.substring(0, index + 1));
      }, 700);
    } else {
      setTimeout(() => {
        setPleaseWaitText('P');
      }, 700);
    }
  };

  const getLastIndexOf = (string, key) => {
    const io = string.indexOf(key);
    return io === -1 ? -1 : io + key.length;
  };

  return (
    <div className="row justify-content-center mt-5 pleaseWait">
      <h3>
        {'    '} {' ' + pleaseWaitText + ' '} {'    '}
      </h3>
    </div>
  );
};

export default PleaseWait;
