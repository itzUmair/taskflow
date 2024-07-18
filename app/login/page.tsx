import Link from "next/link";
import LoginForm from "./LoginForm";

function page() {
  return (
    <main>
      <h1 className="font-bold mt-8 text-center mb-4 text-lg lg:text-2xl">
        Login
      </h1>
      <h3 className="text-center">Login to continue tracking your work!</h3>
      <LoginForm />
      <p className="text-center mt-2">
        Don&apos;t have an account?&nbsp;
        <Link href="/register" className="underline text-bold">
          Signup
        </Link>
      </p>
    </main>
  );
}

export default page;
