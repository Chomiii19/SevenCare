import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-primary h-[10%] flex flex-col justify-center font-roboto text-zinc-200 items-center py-3">
      <div>
        <Link to={""}>About</Link> | <Link to={""}>Contact</Link>
      </div>
      <p>© Baltazar, Caayao, Celestra, Dabalos, Lavitoria</p>
    </footer>
  );
}
