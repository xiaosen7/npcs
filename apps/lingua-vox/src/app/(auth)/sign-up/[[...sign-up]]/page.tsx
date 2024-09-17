"use client";
import { SignUp, useSignUp } from "@clerk/nextjs";
import React, { useEffect } from "react";

const SignUpPage: React.FC = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const isComplete = signUp?.status === "complete";

  useEffect(() => {
    if (isComplete) {
      // debugger;
      // createUser();
      // alert("complete" + signUp.id);
    }
  }, [isComplete, signUp]);

  return <SignUp fallbackRedirectUrl={"/bbb"} />;
};

export default SignUpPage;
