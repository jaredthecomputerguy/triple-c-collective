import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-primary-purple min-w-screen items-center text-white flex gap-2 py-6 flex-col md:py-12">
      <Link
        href="/"
        className="p-2 rounded hover:bg-white/10 transition-all focus:bg-white/10 active:bg-white/10 outline-none active:outline-white focus:outline-white text-2xl sm:text-3xl md:text-4xl font-logo uppercase font-semibold"
      >
        Triple C Collective
      </Link>
      <span className="text-zinc-400 text-sm -mt-2">C10-0000551-LIC</span>
      <span className="text-zinc-400 text-sm -mt-2">
        Copyright &copy; 2023 YCNIUQ Inc.
      </span>
      <ul className="divide-x flex py-2 text-sm sm:text-base">
        <li className="px-2">
          <Link
            className="p-2 rounded hover:bg-white/10 transition-all focus:bg-white/10 active:bg-white/10 outline-none active:outline-white focus:outline-white"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </li>
        <li className="px-2">
          <Link
            className="p-2 rounded hover:bg-white/10 transition-all focus:bg-white/10 active:bg-white/10 outline-none active:outline-white focus:outline-white"
            href="/cookie-policy"
          >
            Cookie Policy
          </Link>
        </li>
        <li className="px-2">
          <Link
            className="p-2 rounded hover:bg-white/10 transition-all focus:bg-white/10 active:bg-white/10 outline-none active:outline-white focus:outline-white"
            href="/terms-of-use"
          >
            Terms of Use
          </Link>
        </li>
      </ul>
      <span className="text-xs text-center flex flex-col items-center">
        Made with &#10084; by
        <a
          className="text-cyan-500 p-1 rounded -mt-2 font-semibold px-1 hover:bg-white/10 transition-all focus:bg-white/10 active:bg-white/10 outline-none active:outline-white focus:outline-white"
          id="jared"
          href="https://www.github.com/jaredthecomputerguy"
          target="_blank"
        >
          Jared Mercer
        </a>
      </span>
    </footer>
  );
};
