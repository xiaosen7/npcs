"use client";
import { SignIn, useSignIn } from "@clerk/nextjs";
import React, { useEffect } from "react";

const SignInPage: React.FC = () => {
  const { signIn, setActive } = useSignIn();
  const isComplete = signIn?.status === "complete";

  useEffect(() => {
    if (isComplete) {
    }
  }, [isComplete, signIn]);
  signIn;

  return <SignIn fallbackRedirectUrl={"/aaa"} />;
};

export default SignInPage;
