import Logo from "./Logo";
import NavLink from "./NavLink";
import { useState, useEffect } from "react";
import classNames from "classnames";

export default function Navbar() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  var header = classNames({
    'header': true,
    'bordered': offset > 80
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
        <button className="nav-menu-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="currentColor">
              <path d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
              <path d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
              <path d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
            </g>
          </svg>
        </button>
      </nav>
    </header>
  );
}
