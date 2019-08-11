import MaskedInput from 'react-text-mask';
import React from 'react';
import * as mask from './inputMask';

function TextMask(props) {
  const { inputRef, type, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={mask[type] || mask.creditCard}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

export default TextMask;
