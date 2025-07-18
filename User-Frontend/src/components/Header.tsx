import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 w-full flex flex-row justify-between items-center py-2 px-20">
      <div className="flex flex-row  items-center">
        <img src="/assets/icons/icon.png" alt="icon" className="w-16" />
        <h2 className="text-primary text-xl font-extrabold">SevenCare</h2>
      </div>

      <nav className="flex flex-row items-center gap-6 text-sm font-bold">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link
          to="/login"
          className="bg-primary rounded-lg py-1 px-5 text-zinc-100"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
