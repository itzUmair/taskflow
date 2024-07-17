import Image from "next/image";

const Header = () => {
  return (
    <nav className="w-full border-b-2 border-secondary-accent lg:px-8 lg:py-2">
      <Image
        src="/logo-light.png"
        alt="Taskflow"
        width={150}
        height={50}
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.png"
        alt="Taskflow"
        width={150}
        height={50}
        className="hidden dark:block"
      />
    </nav>
  );
};

export default Header;
