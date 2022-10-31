import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
  onParentSubmit: PropTypes.func,
};
// TodoForm.defaultProps = {
//   onParentSubmit: null
// }

function TodoForm(props) {
  const schema = yup
    .object({
      title: yup.string().required('Please fill the title'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const {onParentSubmit} = props;
    console.log('submit',values);
    console.log('onParentSubmit',onParentSubmit);
    if(onParentSubmit){
      onParentSubmit(values);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField form={form} name="title" label="todo"></InputField>
    </form>
  );
}

export default TodoForm;
