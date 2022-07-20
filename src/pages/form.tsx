import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { useForm } from 'react-hook-form';
import * as React from "react";
// import '@/styles/form.css';

type FormData = {
  views: string;
  lastName: string;
};

const Form = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit =  handleSubmit(async ({ views, lastName }) => {
    console.log(views, lastName);
    try {
      const res = await fetch('http://localhost:3000/api/postapi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({firstName:'abc'}),
      }); 
      const nameObj = await res.json()
      console.log(nameObj)
  } catch (err) {
      console.log(err);
  }
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
          <label>Enter Views</label>
          <input {...register('views')} />
          <label>Last Name</label>
          <input {...register('lastName')} />

          <input type='submit' />
        </form>
    </Main>
  );
};

export default Form;
