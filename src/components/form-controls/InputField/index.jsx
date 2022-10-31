import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const hasError = form.formState.isSubmitted;
  return (
    <>
      <Controller
        name={name}
        control={form.control}
        label={label}
        disabled={disabled}
        fullWidth
        // props.render is not a function
        render={({ field }) => <TextField {...field} />}
      />
      {hasError && typeof form.formState.errors[name] != 'undefined' ? <p>{form.formState.errors[name].message}</p> : ''}
    </>
  );
}

export default InputField;
