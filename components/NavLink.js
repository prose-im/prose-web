import Link from "next/link";
import classNames from "classnames";

export default function NavLink({ href, filled, secondary, outlined, children }) {
  var linkClass = classNames({
    'btn': filled || outlined || secondary,
    'btn-filled': filled,
    'btn-outlined': outlined,
    'btn-secondary': secondary
  });

  return (
    <Link href={href} passHref>
      <a className={linkClass}>{children}</a>
    </Link>
  );
}
