import Head from "next/head";
import Image from "next/image";

import NavLink from "../components/NavLink";
import CallToAction from "../components/CallToAction";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Prose • Pricing</title>
        <meta name="description" content="Decentralized team messaging" />
      </Head>

      <section id="pricing-s1">
        <div className="container pad-x pad-y">
          <h1 className="title-xl text-center">Choose a plan</h1>
          <p className="p-xl text-center">Organize your tasks, lists and reminders in one app.</p>
          <div className="btn-wrapper">
            <NavLink href="/download" filled>
              Setup Prose in minutes
            </NavLink>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
