import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { useForm } from 'react-hook-form';
import * as React from "react";
// import '@/styles/form.css';

type FormData = {
  firstName: string;
  lastName: string;
};

const Form = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit(({ firstName, lastName }) => {
    console.log(firstName, lastName);
  });
  return (
    <Main
      meta={
        <Meta
          title='Forms - Enter Daily Details'
          description='Data to Store in Database'
        />
      }>
      <p>React-Form-Hooks</p>
        <form onSubmit={onSubmit}>
          <label>First Name</label>
          <input {...register('firstName')} />
          <label>Last Name</label>
          <input {...register('lastName')} />

          <input type='submit' />
        </form>
    </Main>
  );
};

export default Form;
