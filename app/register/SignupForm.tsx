"use client";

import { FormEvent, useState } from "react";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [signupFormData, setsignupFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formValid: boolean = validateForm();
    if (!formValid) {
      return;
    }
  };

  const validateForm = (): boolean => {
    if (signupFormData.name.length === 0) {
      setErrorMessage("Name is required");
      return false;
    } else if (signupFormData.name.length < 3) {
      setErrorMessage("Name must be atleast 3 characters long");
      return false;
    } else if (signupFormData.email.length === 0) {
      setErrorMessage("Email is required");
      return false;
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(signupFormData.email)
    ) {
      setErrorMessage("Invalid email");
      return false;
    } else if (signupFormData.password.length === 0) {
      setErrorMessage("Password is required");
      return false;
    } else if (signupFormData.password.length < 8) {
      setErrorMessage("Password must be atleast 8 characters long");
      return false;
    } else {
      return true;
    }
  };

  return (
    <form className="flex flex-col gap-y-4 max-w-96 mx-auto mt-8" noValidate>
      <span>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={signupFormData.name}
          onChange={(e) => {
            setErrorMessage("");
            setsignupFormData((prevData) => {
              return { ...prevData, name: e.target.value };
            });
          }}
          autoFocus
          className="bg-transparent block border-2 rounded-md py-1 px-2 border-secondary-accent w-full focus:border-white outline-none"
        />
      </span>

      <span>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={signupFormData.email}
          onChange={(e) => {
            setErrorMessage("");
            setsignupFormData((prevData) => {
              return { ...prevData, email: e.target.value };
            });
          }}
          className="bg-transparent block border-2 rounded-md py-1 px-2 border-secondary-accent w-full focus:border-white outline-none"
        />
      </span>

      <span>
        <label htmlFor="password">Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={signupFormData.password}
          onChange={(e) => {
            setErrorMessage("");
            setsignupFormData((prevData) => {
              return { ...prevData, password: e.target.value };
            });
          }}
          className="bg-transparent block border-2 rounded-md py-1 px-2 border-secondary-accent w-full focus:border-white outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prevState) => !prevState)}
          className="text-xs underline italic"
        >
          {showPassword ? "Hide" : "Show"} password
        </button>
      </span>
      {errorMessage && <p className="bg-red-500 text-center">{errorMessage}</p>}
      <button
        type="submit"
        onClick={(event) => handleSubmit(event)}
        className="before:ease relative py-2 w-full overflow-hidden bg-secondary-accent transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-lg hover:shadow-secondary-accent hover:before:-translate-x-96 rounded-md"
      >
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
