import Link from "next/link";
import SignupForm from "./SignupForm";

function page() {
  return (
    <main>
      <h1 className="font-bold mt-8 text-center mb-4 text-lg lg:text-2xl">
        Signup
      </h1>
      <h3 className="text-center">Create and account!</h3>
      <SignupForm />
      <p className="text-center mt-2">
        Already have an account?&nbsp;
        <Link href="/login" className="underline text-bold">
          Login
        </Link>
      </p>
    </main>
  );
}

export default page;
