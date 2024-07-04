import React from "react";
import LoginCard from '../LoginCard';

import 'localStyles';

export default {
  title: "Cards/Login Card"
};


const Template = (args) => (
  <div style={{
    maxWidth: 500
  }}>
    <LoginCard {...args} />
  </div>
);


export const Simple = Template.bind({});
Simple.args = {
  className: undefined,
  title: 'Login',
  emailInputLabel: 'Email',
  emailInputPlaceholder: 'Enter email',
  passwordInputLabel: 'Password',
  passwordInputPlaceholder: 'Enter password',
  rememberMeLabel: 'Remember me',
  loginBtn: 'Login',
  passwordForgottenBtn: 'Password forgotten?',
  signupBtn: 'I already have an account',
  infoText: undefined,
  fixEmailValue: undefined,
  persistState: true,
  onChangePersistState: (checked) => { },
  onSubmit: (email: string, password: string, rememberMe: boolean) => { },
  onOpenDialog: (dialog: 'passwordForgotten' | 'signup') => { },
}

export const WithInfo = Template.bind({});
WithInfo.args = {
  className: undefined,
  title: 'Login',
  emailInputLabel: 'Email',
  emailInputPlaceholder: 'Enter email',
  passwordInputLabel: 'Password',
  passwordInputPlaceholder: 'Enter password',
  rememberMeLabel: 'Remember me',
  loginBtn: 'Login',
  passwordForgottenBtn: 'Password forgotten?',
  signupBtn: 'I already have an account',
  infoText: `## Info \n\n info text`,
  fixEmailValue: undefined,
  persistState: false,
  onChangePersistState: (checked) => { },
  onSubmit: (email: string, password: string, rememberMe: boolean) => { },
  onOpenDialog: (dialog: 'passwordForgotten' | 'signup') => { },
}


export const FixedEmail = Template.bind({});
FixedEmail.args = {
  className: undefined,
  title: 'Login',
  emailInputLabel: 'Email',
  emailInputPlaceholder: 'Enter email',
  passwordInputLabel: 'Password',
  passwordInputPlaceholder: 'Enter password',
  rememberMeLabel: 'Remember me',
  loginBtn: 'Login',
  passwordForgottenBtn: 'Password forgotten?',
  signupBtn: 'I already have an account',
  signupDisabled: true,
  infoText: undefined,
  fixEmailValue: 'test@test.com',
  persistState: true,
  onChangePersistState: (checked) => { },
  onSubmit: (email: string, password: string, rememberMe: boolean) => { },
  onOpenDialog: (dialog: 'passwordForgotten' | 'signup') => { },
}
