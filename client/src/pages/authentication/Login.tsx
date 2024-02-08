import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormVerifier, LoginUser } from "./login-logic";
import Logo from "/logo-light.svg";

type FormErrors = {
  EmailError: string | null;
  PasswordError: string | null;
};

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState<FormErrors>({
    EmailError: null,
    PasswordError: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user-token");
    if (user) {
      navigate("/dashboard");
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validity = FormVerifier(formData.email, formData.password);

    if (validity.type !== "valid") {
      if (validity.type === "EmailError") {
        setFormError((prevState) => {
          return { ...prevState, EmailError: validity.error };
        });
      } else {
        setFormError((prevState) => {
          return { ...prevState, PasswordError: validity.error };
        });
      }
      return;
    }

    const response = await LoginUser(formData.email, formData.password);

    if (response?.status !== 200) {
      if (response?.status === 404) {
        setFormError((prevState) => {
          return { ...prevState, EmailError: response.message };
        });
      } else if (response?.status === 401) {
        setFormError((prevState) => {
          return { ...prevState, PasswordError: response.message };
        });
      }
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <img src={Logo} alt="Taskflow" className="mx-auto mt-8 w-32 md:w-48" />
      <form className="border-2 border-dashed border-accent-light p-4 mx-4 md:mx-auto w-full md:w-[24rem] rounded-md mt-8">
        <h1 className="text-center font-bold text-2xl mb-4 ">Login</h1>
        <section>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            maxLength={256}
            value={formData.email}
            onChange={(e) => {
              setFormError({ EmailError: null, PasswordError: null });
              setFormData((prevData: FormData) => {
                return { ...prevData, email: e.target.value };
              });
            }}
            className="w-full bg-primary-light p-2 rounded-md outline-accent-light"
          />
          {formError.EmailError && (
            <p className="text-accent-red text-sm">{formError.EmailError}</p>
          )}
        </section>
        <section>
          <label htmlFor="password" className="block my-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            maxLength={256}
            value={formData.password}
            onChange={(e) => {
              setFormError({ EmailError: null, PasswordError: null });
              setFormData((prevData: FormData) => {
                return { ...prevData, password: e.target.value };
              });
            }}
            className="w-full bg-primary-light p-2 rounded-md outline-accent-light"
          />
          {formError.PasswordError && (
            <p className="text-accent-red text-sm">{formError.PasswordError}</p>
          )}
        </section>
        <button
          onClick={handleSubmit}
          className="bg-primary-text w-full text-primary-dark font-bold rounded-md my-4 py-2"
        >
          Login
        </button>
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="underline">
            Signup
          </a>
        </p>
      </form>
    </>
  );
};

export default Login;
