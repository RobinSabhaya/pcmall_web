'use client';

import { useState } from 'react';

import Link from 'next/link';

import { useForm } from '@tanstack/react-form';

import { loginSchema, signupSchema } from '@/validations/authSchema';

import {
  useLogin,
  useSignup,
} from '../../../../hooks/query/Auth/useAuthMutations';
import Input from '../../../ui/Input/Input';
import SocialProviders from '../../../ui/SocialProvider/SocialProviders';

import type { AuthFormProps } from './AuthForm.type';

export interface FormValue {
  email: string;
  password: string;
  first_name?: string;
  confirm_password?: string;
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [show, setShow] = useState(false);
  const { mutate: signup } = useSignup();
  const { mutate: login } = useLogin();

  const defaultValues = {
    ...(mode == 'sign-up' && {
      first_name: '',
      confirm_password: '',
    }),
    email: '',
    password: '',
  };

  async function onSubmit({ value }: { value: FormValue }) {
    const payload = {
      email: value.email,
      password: value.password,
    };

    if (mode === 'sign-up') {
      signup({
        ...payload,
        first_name: String(value?.first_name),
        confirm_password: String(value?.confirm_password),
      });
    } else if (mode === 'sign-in') {
      login(payload);
    }
  }

  const form = useForm({
    defaultValues,
    validators: {
      onChange: mode === 'sign-up' ? signupSchema : loginSchema,
    },
    onSubmit,
  });

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-caption text-dark-700">
          {mode === 'sign-in'
            ? "Don't have an account? "
            : 'Already have an account? '}
          <Link
            href={mode === 'sign-in' ? '/auth/sign-up' : '/auth/sign-in'}
            className="underline"
          >
            {mode === 'sign-in' ? 'Sign Up' : 'Sign In'}
          </Link>
        </p>
        <h1 className="mt-3 text-heading-3 text-dark-900">
          {mode === 'sign-in' ? 'Welcome Back!' : 'Join PCMall Today!'}
        </h1>
        <p className="mt-1 text-body text-dark-700">
          {mode === 'sign-in'
            ? 'Sign in to continue your journey'
            : 'Create your account to start your journey'}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <hr className="h-px w-full border-0 bg-light-300" />
        <span className="shrink-0 text-caption text-dark-700">
          Or {mode === 'sign-in' ? 'sign in' : 'sign up'} with
        </span>
        <hr className="h-px w-full border-0 bg-light-300" />
      </div>

      <SocialProviders variant={mode} />

      <form
        className="space-y-4"
        onSubmit={e => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        {mode === 'sign-up' && (
          <form.Field name="first_name">
            {field => (
              <div className="space-y-1">
                <Input
                  id="first_name"
                  name="first_name"
                  type="text"
                  label={field.name}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900/10"
                  autoComplete="first_name"
                  value={field.state.value}
                  onChange={e => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>
        )}

        <form.Field name="email">
          {field => (
            <div className="space-y-1">
              <label htmlFor="email" className="text-caption text-dark-900">
                {field.name}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900/10"
                autoComplete="email"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="password">
          {field => (
            <div className="space-y-1">
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  label={field.name}
                  type={show ? 'text' : 'password'}
                  placeholder="minimum 8 characters"
                  className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 pr-12 text-body text-dark-900 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900/10"
                  autoComplete={
                    mode === 'sign-in' ? 'current-password' : 'new-password'
                  }
                  minLength={8}
                  onChange={e => field.handleChange(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 text-caption text-dark-700"
                  onClick={() => setShow(v => !v)}
                  aria-label={show ? 'Hide password' : 'Show password'}
                >
                  {show ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          )}
        </form.Field>

        {mode === 'sign-up' && (
          <form.Field name="confirm_password">
            {field => (
              <div className="space-y-1">
                <div className="relative">
                  <Input
                    id="confirm_password"
                    name="confirm_password"
                    label={field.name}
                    type={show ? 'text' : 'password'}
                    placeholder="minimum 8 characters"
                    className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 pr-12 text-body text-dark-900 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900/10"
                    minLength={8}
                    onChange={e => field.handleChange(e.target.value)}
                  />
                </div>
              </div>
            )}
          </form.Field>
        )}

        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-dark-900 px-6 py-3 text-body-medium text-light-100 hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-dark-900/20"
        >
          {mode === 'sign-in' ? 'Sign In' : 'Sign Up'}
        </button>

        {mode === 'sign-up' && (
          <p className="text-center text-footnote text-dark-700">
            By signing up, you agree to our{' '}
            <Link href="/" className="underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/" className="underline">
              Privacy Policy
            </Link>
          </p>
        )}
      </form>
    </div>
  );
}
