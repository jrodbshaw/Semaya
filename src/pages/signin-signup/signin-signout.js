import React from "react";

import Signin from "../../components/signin/Signin";
import SignUp from "../../components/signup/SignUp";

import "./signin-signup.styles.scss";

const SigninSignout = () => {
  return (
    <div className="sign-in-and-sign-out">
      <Signin />
      <SignUp />
    </div>
  );
};

export default SigninSignout;
