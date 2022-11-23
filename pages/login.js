import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

import Layout from './../components/Layout';

export default function LoginScreen() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <Layout title="Login Page">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-4 text-lg">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="w-full"
            id="email"
            autoFocus
            {...register('email', {
              required: 'Please enter the email.',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Enter valid email address.',
              },
            })}
          />
          {/* {accepts two parameters  1)field name and 2)required validation} */}
          {errors.email && (
            <div className="text-red-600">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="w-full"
            id="password"
            autoFocus
            {...register('password', {
              required: 'Please enter the password.',
              minLength: {
                value: 6,
                message: 'password should be more then 5 characters',
              },
            })}
          />
          {errors.password && (
            <div className="text-red-600">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <button className="primary-button">Login </button>
        </div>
        <div className="mb-4">
          Don't have an account account? <Link href="register">Register</Link>
        </div>
      </form>
    </Layout>
  );
}
