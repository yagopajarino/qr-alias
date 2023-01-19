import Github from "./Github.js";
import Twitter from "./Twitter.js";

export default function Footer() {
  return (
    <footer className=" bg-slate-900 text-slate-50 w-full">
      <div className="w-full flex p-5 items-center justify-center space-x-5">
        <a
          href="https://yagopajarino.ar"
          className="text-gray-400 hover:text-gray-200 transition-colors"
        >
          Yago Pajariño
        </a>
        <Github />
        <Twitter />
      </div>
    </footer>
  );
}
