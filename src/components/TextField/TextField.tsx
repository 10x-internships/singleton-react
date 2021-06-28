import React, { useState } from 'react';
import StyledTextField from './style';

type TextFieldProps = React.ComponentPropsWithRef<'input'> & {
  icon?: JSX.Element;
  placeholder: string;
};

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { icon, placeholder, ...others } = props;
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleFocus = () => {
    if (icon) setIsFocus(true);
  };
  const handleBlur = () => {
    if (icon) setIsFocus(false);
  };

  return (
    <StyledTextField isFocus={isFocus}>
      {icon}
      <input type="text" placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur} ref={ref} {...others} />
    </StyledTextField>
  );
});

export default TextField;
