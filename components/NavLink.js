import Link from "next/link";
import classNames from "classnames";

export default function NavLink({ href, filled, outlined, children }) {
  var linkClass = classNames({
    'btn': filled || outlined,
    'btn-filled': filled,
    'btn-outlined': outlined
  });

  return (
    <Link href={href} passHref>
      <a className={linkClass}>{children}</a>
    </Link>
  );
}
