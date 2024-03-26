import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="min-w-screen flex flex-col items-center gap-2 bg-primary-purple py-6 text-white md:py-12">
      <Link
        href="/"
        className="rounded p-2 font-logo text-2xl font-semibold uppercase transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white sm:text-3xl md:text-4xl"
      >
        Triple C Collective
      </Link>
      <span className="-mt-2 text-sm text-zinc-400">C10-0000551-LIC</span>
      <span className="-mt-2 text-sm text-zinc-400">
        Copyright &copy; 2023 YCNIUQ Inc.
      </span>
      <ul className="flex divide-x py-2 text-sm sm:text-base">
        <li className="px-2">
          <Link
            className="rounded p-2 transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </li>
        <li className="px-2">
          <Link
            className="rounded p-2 transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
            href="/cookie-policy"
          >
            Cookie Policy
          </Link>
        </li>
        <li className="px-2">
          <Link
            className="rounded p-2 transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
            href="/terms-of-use"
          >
            Terms of Use
          </Link>
        </li>
      </ul>
      <span className="flex flex-col items-center text-center text-xs">
        Made by
        <a
          className="my-1 rounded p-1 px-2 font-semibold text-cyan-500 transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
          id="jared"
          href="https://jaredthecomputerguy.dev/"
          target="_blank"
        >
          Jared Mercer
        </a>
      </span>
    </footer>
  );
};
