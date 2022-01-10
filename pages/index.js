import Head from "next/head";
import Image from "next/image";

import NavLink from "../components/NavLink";
import FeaturesTab from "../components/FeaturesTabs";
import IconFeature from "../components/IconFeature";
import CallToAction from "../components/CallToAction";

const features = [
  { icon: "Bell", title: "Privacy First", description: "Every team member’s identity can be securely verified." },
  {
    icon: "Bell",
    title: "Share images & files",
    description: "Every team member’s identity can be securely verified.",
  },
  {
    icon: "Bell",
    title: "Manage your messaging history",
    description: "Every team member’s identity can be securely verified.",
  },
  { icon: "Bell", title: "Invite team members", description: "Every team member’s identity can be securely verified." },
  { icon: "Bell", title: "Search everything", description: "Every team member’s identity can be securely verified." },
  {
    icon: "Bell",
    title: "Call anyone in your team",
    description: "Every team member’s identity can be securely verified.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Prose</title>
        <meta name="description" content="Decentralized team messaging" />
      </Head>

      <section id="home-s1">
        <div className="container pad-x pad-y">
          <div className="grid">
            <div className="cloud-one">
              <Image
                layout="responsive"
                src="/images/Cloud-One.png"
                width={166}
                height={137}
                quality={100}
                priority
                alt="cloud"
              />
            </div>
            <div className="cloud-two">
              <Image
                layout="responsive"
                src="/images/Cloud-Two.png"
                width={176}
                height={158}
                quality={100}
                priority
                alt="cloud"
              />
            </div>
            <div className="grid-item" id="hero-decent">
              <div className="content">
                <div className="title-xl">Decentralized</div>
              </div>
            </div>
            <div className="grid-item" id="hero-lock-switch">
              <div className="content">
                <div className="pill pill-pink"></div>
              </div>
            </div>
            <div className="grid-item" id="hero-lock-toggle">
              <div className="content justify-center">
                <div className="circle-white">
                  <div className="lock">
                    <Image layout="fill" src="/images/lock.png" quality={100} priority alt="lock" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item" id="hero-earth">
              <div className="content">
                <div className="pill pill-gradient-blue earth">
                  <div className="earth-inner">
                    <Image layout="responsive" src="/images/planet.png" width={98} height={98} quality={100} priority alt="earth" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item" id="hero-paper-plane">
              <div className="content">
                <div className="pill pill-blue">
                  <div className="paper-plane">
                    <Image
                      layout="responsive"
                      src="/images/plane.png"
                      width={298}
                      height={175}
                      quality={100}
                      priority
                      alt="paper-plane"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item" id="hero-team">
              <div className="content">
                <div className="title-xl">Team</div>
              </div>
            </div>
            <div className="grid-item" id="hero-messaging">
              <div className="content">
                <div className="title-xl">Messaging</div>
              </div>
            </div>
            <div className="grid-item" id="hero-buoy-target">
              <div className="content">
                <div className="pill pill-pink buoy-target">
                  <div className="buoy">
                    <Image
                      layout="responsive"
                      src="/images/buoy.png"
                      width={98}
                      height={98}
                      quality={100}
                      priority
                      alt="buoy"
                    />
                  </div>
                  <div className="target">
                    <Image
                      layout="responsive"
                      src="/images/target.png"
                      width={98}
                      height={98}
                      quality={100}
                      priority
                      alt="target"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item" id="hero-arrow-up">
              <div className="content">
                <div className="pill pill-pink arrow-up">
                  <svg width="90" height="90" viewBox="0 0 86 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M38.9284 2.62627C41.1771 0.377614 44.8229 0.377614 47.0715 2.62627L83.7155 39.2702C85.9641 41.5188 85.9641 45.1646 83.7155 47.4133C81.4668 49.6619 77.821 49.6619 75.5724 47.4133L48.758 20.5989L48.758 83.7669C48.758 86.947 46.1801 89.525 43 89.525C39.8199 89.525 37.242 86.947 37.242 83.7669L37.242 20.5989L10.4276 47.4133C8.17896 49.6619 4.53317 49.6619 2.28451 47.4133C0.0358591 45.1646 0.0358591 41.5189 2.28451 39.2702L38.9284 2.62627Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="p-xl text-center dark-grey">
            It is time to provide businesses with a first-class decentralized and open alternative to Slack and
            Microsoft Teams.
          </p>
        </div>
      </section>

      <section id="home-s2">
        <div className="container pad-x pad-y">
          <h2 className="title-md text-center contained">
            The <span className="highlight-one">experience</span> you’ve been waiting for.
          </h2>
          <FeaturesTab />
        </div>
      </section>

      <section id="home-s3">
        <div className="container pad-x pad-y">
          <h2 className="title-md text-center contained">
            It’s time to change the <span className="highlight-three">status quo</span>
          </h2>
          <div className="features-grid">
            <div className="features-grid-item native">
              <div className="macbook">
                <Image
                  layout="responsive"
                  src="/images/macbook-pro.png"
                  height={253}
                  width={442}
                  priority
                  quality={100}
                  alt="macbook pro"
                />
              </div>
              <h3 className="title-sm text-center">
                A completely <span className="navy">native app</span> gives you the performance you expect.
              </h3>
            </div>
            <div className="features-grid-item privacy">
              <div className="shield">
                <Image
                  layout="responsive"
                  src="/images/shield.png"
                  priority
                  height={224}
                  width={200}
                  quality={100}
                  alt="shield"
                />
              </div>
              <h3 className="title-sm">
                Privacy, built-in. <br />
                <span className="darker-text">All messages are end-to-end encrypted.</span>
              </h3>
            </div>
            <div className="features-grid-item oss">
              <h3 className="title-sm">
                Open Source. <br /> <span className="darker-text">Community driven and non-profit.</span>
              </h3>
              <div className="folder">
                <Image
                  layout="responsive"
                  src="/images/folder.png"
                  priority
                  height={312}
                  width={256}
                  quality={100}
                  alt="folder"
                />
              </div>
            </div>
            <div className="features-grid-item decent">
              <h3 className="title-sm">Decentralized</h3>
              <p className="title-xs">Your data is safe</p>
              <div className="globe">
                <Image
                  layout="responsive"
                  src="/images/globe.png"
                  priority
                  height={418}
                  width={318}
                  quality={100}
                  alt="globe"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="home-s4">
        <div className="container pad-x pad-y">
          <div className="flagged">
            <h2 className="title-md text-center">Batteries included</h2>
          </div>
          <div className="icon-features-grid">
            {features.map(({ icon, title, description }, idx) => (
              <IconFeature key={idx} icon={icon} title={title} description={description} />
            ))}
          </div>
          <div className="btn-wrapper">
            <NavLink href="/features" filled>
              Discover all features
            </NavLink>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
