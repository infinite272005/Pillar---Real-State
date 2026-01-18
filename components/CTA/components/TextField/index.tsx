import { styled, TextField as MuiTextField, TextFieldProps } from '@mui/material';
import React from 'react';

const StyledTextField = styled(MuiTextField)`
  &.MuiInputBase-root {
    color: #fff;
    &.MuiInput-root {
      height: 30px;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      font-family: 'IBM Plex Sans';
      margin-bottom: 24px;
    }
  }

  input {
    color: #fff;
    height: 30px;
    padding-bottom: 2px;
  }

  label {
    color: #fff;
    &.Mui-focused {
      color: #fff;
    }
  }
`;

const TextField: React.FC<TextFieldProps> = (props) => {
  const variant = props.variant || 'standard';

  // Conditionally assign InputProps based on variant
  const inputProps =
    variant === 'standard' || variant === 'filled'
      ? { required: true, disableUnderline: true }
      : { required: true };

  return (
    <div style={{ borderBottom: '1px solid white' }}>
      <StyledTextField
        fullWidth
        color="secondary"
        variant={variant}
        InputProps={{
          ...inputProps,
          ...props.InputProps, // merge any InputProps passed in
        }}
        {...props}
      />
    </div>
  );
};

export default TextField;
