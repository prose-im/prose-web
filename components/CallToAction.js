import NavLink from "./NavLink";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section id="cta" className="pad-y">
      <div className="cta-content">
        <div className="cta-text">
          <h3 className="title-md">Start messaging your team today.</h3>
          <p className="p-xl">No credit card required.</p>
          <NavLink href="/download" secondary>
            Download
          </NavLink>
        </div>
        <div className="app-icon">
          <Image layout="responsive" width={599} height={599} src="/app-icon.png" quality={100} alt="app icon" />
        </div>
      </div>
    </section>
  );
}
