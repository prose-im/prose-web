import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import NavLink from "./NavLink";
import MenuButton from "./MenuButton";
import ClientOnlyPortal from "./ClientOnlyPortal";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const root = document.getElementById("__next");
    let group = root.querySelector("#menuIcon .js-nc-int-icon");

    const animateIn = () => {
      group.classList.add("nc-int-icon-state-b");
      root.classList.add("menu-isVisible");
    };
  
    const animateOut = () => {
      group.classList.remove("nc-int-icon-state-b");
      root.classList.remove("menu-isVisible");
    };

    if (openMenu) animateIn() 
    else animateOut()

    const handleRouteChange = (url, { shallow }) => {
      setOpenMenu(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [openMenu]);

  return (
    <>
      <MenuButton onClick={() => setOpenMenu(!openMenu)} />

      <ClientOnlyPortal selector="#__next">
        <div className="menu">
          <div className="menu-content">
            <ul>
              <li className="menu-links">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/features">Features</NavLink>
                <NavLink href="https://help.prose.org/">Docs</NavLink>
                <div className="btn-wrapper">
                  <NavLink href="/download" filled>
                    Download
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </ClientOnlyPortal>
    </>
  );
}
