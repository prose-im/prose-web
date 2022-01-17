import Head from "next/head";
import Image from "next/image";

import NavLink from "../components/NavLink";
import CallToAction from "../components/CallToAction";
import IconFeature from "../components/IconFeature";
import FAQ from "../components/FAQ";
import ProTabs from "../components/ProTabs";

const features = [
  { icon: "Bell", title: "Trust model" },
  {
    icon: "Bell",
    title: "Schedule notifications",
  },
  {
    icon: "Bell",
    title: "Made for remote teams",
  },
  { icon: "Bell", title: "Trust model" },
  {
    icon: "Bell",
    title: "Schedule notifications",
  },
  {
    icon: "Bell",
    title: "Made for remote teams",
  },
  { icon: "Bell", title: "Trust model" },
  {
    icon: "Bell",
    title: "Schedule notifications",
  },
  {
    icon: "Bell",
    title: "Made for remote teams",
  },
  { icon: "Bell", title: "Trust model" },
  {
    icon: "Bell",
    title: "Schedule notifications",
  },
  {
    icon: "Bell",
    title: "Made for remote teams",
  },
];

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
            <NavLink href="/download" filled chevron>
              Setup Prose in minutes
            </NavLink>
          </div>
          <div className="pricing-tables">
            <div className="pricing-table personal">
              <h3 className="title-sm">Personal</h3>
              <div className="price">
                <span className="price-dollar-sign title-sm">$</span>
                <span className="price-tag">0</span>
                <span className="dark-grey bold">/users/month</span>
              </div>
              <div className="separator dark"></div>
              <p className="dark-grey bold">Simple, Prose with an extra Layer.</p>
            </div>
            <div className="pricing-table business">
              <div className="pricing-pill">Most popular</div>
              <h3 className="title-sm">Business</h3>
              <div className="price">
                <span className="price-dollar-sign title-sm">$</span>
                <span className="price-tag">19</span>
                <span className="dark-grey bold">/users/month</span>
              </div>
              <div className="separator dark"></div>
              <p className="dark-grey bold">The perfect plan to use Prose with.</p>
              <NavLink href="#pricing-s2" chevron>
                All features
              </NavLink>
              <div className="price-btn">
                <NavLink href="/download" filled>
                  Select Plan
                </NavLink>
              </div>
            </div>
          </div>
          <div className="chart">
            <Image
              layout="responsive"
              src="/images/pie-chart.png"
              width={248}
              height={438}
              quality={100}
              priority
              alt="pie-chart"
            />
          </div>
          <div className="piggy">
            <Image
              layout="responsive"
              src="/images/piggy.png"
              width={328}
              height={320}
              quality={100}
              priority
              alt="piggy"
            />
          </div>
          <div className="coin">
            <Image
              layout="responsive"
              src="/images/coin.png"
              width={292}
              height={648}
              quality={100}
              priority
              alt="coin"
            />
          </div>
          <div className="pencil">
            <Image
              layout="responsive"
              src="/images/pencil.png"
              width={221}
              height={387}
              quality={100}
              priority
              alt="pencil"
            />
          </div>
          <div className="cup">
            <Image
              layout="responsive"
              src="/images/cup.png"
              width={233}
              height={468}
              quality={100}
              priority
              alt="cup"
            />
          </div>
        </div>
      </section>

      <section id="pricing-s2">
        <div className="container pad-x pad-y">
          <h2 className="title-lg text-center contained">
            What is already <span className="highlight-two">included</span> with Prose
          </h2>
          <div className="included-grid">
            {features.map(({ icon, title }, idx) => (
              <IconFeature key={idx} icon={icon} title={title} />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing-s3">
        <div className="container pad-x pad-y">
          <div className="pro-title-wrapper">
            <p className="pro-caption">Prose Pro</p>
            <div className="pro-title">
              <h2 className="title-lg">
                Expand your <span className="highlight-three">experience</span> with Prose Pro
              </h2>
              <p className="dark-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut vel eget egestas tellus sed tristique
                id.
              </p>
            </div>
          </div>
          <ProTabs />
        </div>
      </section>

      <section id="pricing-s4">
        <div className="container pad-x pad-y">
          <FAQ />
        </div>
      </section>
      <CallToAction />
    </>
  );
}
