import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FormVerifier, SignupUser } from "./auth-logic";
import Logo from "/logo-light.svg";

type FormErrors = {
  EmailError: string | null;
  PasswordError: string | null;
  ConfirmPasswordError: string | null;
};

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState<FormErrors>({
    EmailError: null,
    PasswordError: null,
    ConfirmPasswordError: null,
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user-token");
    if (user) {
      navigate("/dashboard");
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validity = FormVerifier(
      formData.email,
      formData.password,
      formData.confirmPassword
    );

    if (validity.type !== "valid") {
      if (validity.type === "EmailError") {
        setFormError((prevState) => {
          return { ...prevState, EmailError: validity.error };
        });
      } else if (validity.type === "ConfirmPasswordError") {
        setFormError((prevState) => {
          return { ...prevState, ConfirmPasswordError: validity.error };
        });
      } else {
        setFormError((prevState) => {
          return { ...prevState, PasswordError: validity.error };
        });
      }
      return;
    }

    const response = await SignupUser(formData.email, formData.password);

    if (response?.status !== 201) {
      if (response?.status === 400) {
        setFormError((prevState) => {
          return { ...prevState, EmailError: response.message };
        });
      }
    } else {
      toast.success(
        `Account created successfully!
        Try logging in...`,
        {
          position: "top-center",
          duration: 5000,
        }
      );
      navigate("/login");
    }
  };

  return (
    <>
      <img src={Logo} alt="Taskflow" className="mx-auto mt-8 w-32 md:w-48" />
      <form className="border-2 border-dashed border-accent-light p-4 mx-4 md:mx-auto w-full md:w-[24rem] rounded-md mt-8">
        <h1 className="text-center font-bold text-2xl mb-4 ">Signup</h1>
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
              setFormError({
                EmailError: null,
                PasswordError: null,
                ConfirmPasswordError: null,
              });
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
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            maxLength={256}
            value={formData.password}
            onChange={(e) => {
              setFormError({
                EmailError: null,
                PasswordError: null,
                ConfirmPasswordError: null,
              });
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
        <section>
          <label htmlFor="password" className="block my-2">
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            maxLength={256}
            value={formData.confirmPassword}
            onChange={(e) => {
              setFormError({
                EmailError: null,
                PasswordError: null,
                ConfirmPasswordError: null,
              });
              setFormData((prevData: FormData) => {
                return { ...prevData, confirmPassword: e.target.value };
              });
            }}
            className="w-full bg-primary-light p-2 rounded-md outline-accent-light"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prevState) => !prevState)}
            className="text-primary-text italic text-sm underline"
          >
            {showPassword ? "hide" : "show"} password
          </button>
          {formError.ConfirmPasswordError && (
            <p className="text-accent-red text-sm">
              {formError.ConfirmPasswordError}
            </p>
          )}
        </section>
        <button
          onClick={handleSubmit}
          className="bg-primary-text w-full text-primary-dark font-bold rounded-md my-4 py-2"
        >
          Signup
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <a href="/login" className="underline">
            Login
          </a>
        </p>
      </form>
    </>
  );
};

export default Signup;
