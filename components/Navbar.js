import Logo from "./Logo";
import NavLink from "./NavLink";
import { useState, useEffect } from "react";
import classNames from "classnames";
import Menu from "./Menu";

export default function Navbar() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  let header = classNames({
    header: true,
    bordered: offset > 80
  });

  return (
    <header className={header}>
      <nav className="nav container pad-x">
        <NavLink href="/">
          <Logo />
        </NavLink>
        <ul>
          <li className="nav-links">
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/docs">Docs</NavLink>
          </li>
        </ul>
        <ul>
          <li className="nav-cta">
            <NavLink href="/login" outlined>
              Login
            </NavLink>
            <NavLink href="/download" filled>
              Download
            </NavLink>
          </li>
        </ul>
        <Menu/>
      </nav>
    </header>
  );
}
