"use client";

import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(
    "there is an error"
  );

  const handleSubmit = async () => {
    // TODO
  };

  const validateForm = () => {
    // TODO
  };

  return (
    <form className="flex flex-col gap-y-4 max-w-96 mx-auto mt-8">
      <span>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
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
          className="bg-transparent block border-2 rounded-md py-1 px-2 border-secondary-accent w-full focus:border-white outline-none"
        />
      </span>

      <span>
        <label htmlFor="password">Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
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
        onClick={handleSubmit}
        className="before:ease relative py-2 w-full overflow-hidden bg-secondary-accent transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-lg hover:shadow-secondary-accent hover:before:-translate-x-96 rounded-md"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
