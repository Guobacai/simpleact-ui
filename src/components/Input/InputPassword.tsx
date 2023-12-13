import React, { useState } from 'react';
import { Input, InputProps } from './Input';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const InputPassword = (props: InputProps) => {
  const [shouldReveal, setShouldReveal] = useState(false);

  const tailingIcon = shouldReveal ? faEye : faEyeSlash;
  const inputType = shouldReveal ? 'text' : 'password';

  return (
    <Input
      {...props}
      type={inputType}
      icon={tailingIcon}
      iconPosition="tailing"
      handleClickTailingIcon={() => setShouldReveal(!shouldReveal)}
    ></Input>
  );
};
