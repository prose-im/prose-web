import Link from "next/link";
import classNames from "classnames";
import ChevronRightIcon from "./Icon/ChevronRight";

export default function NavLink({ href, filled, secondary, outlined, children, chevron }) {
  var linkClass = classNames({
    "nav-link": true,
    btn: filled || outlined || secondary,
    "btn-filled": filled,
    "btn-outlined": outlined,
    "btn-secondary": secondary,
  });

  return (
    <Link href={href} passHref>
      <a className={linkClass}>
        {children}
        {chevron && <ChevronRightIcon />}
      </a>
    </Link>
  );
}
