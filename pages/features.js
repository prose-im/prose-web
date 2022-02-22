import Head from "next/head";
import Image from "next/image";

import NavLink from "../components/NavLink";
import CallToAction from "../components/CallToAction";
import FeaturesScroll from "../components/ScrollSteps";


export default function Features() {
  return (
    <>
      <Head>
        <title>Prose • Features</title>
        <meta name="description" content="Decentralized team messaging" />
      </Head>

      <section id="features-s1">
        <div className="container pad-x pad-y">
          <h1 className="title-xl text-center">One app for all <span className="no-break">your team</span> communication</h1>
          <p className="p-xl text-center">
            Prose helps your business make its communication instant, private and secure Choose to host Prose on your
            premises or in the cloud.
          </p>
          <div className="btn-wrapper">
            <NavLink href="/download" filled chevron>
              Try it free
            </NavLink>
          </div>
        </div>
        <div className="loupe">
          <Image
            layout="responsive"
            src="/images/loupe.png"
            width={332}
            height={425}
            quality={100}
            priority
            alt="loupe"
          />
        </div>
        <div className="sticky-notes">
          <Image
            layout="responsive"
            src="/images/sticky-notes.png"
            width={241}
            height={255}
            quality={100}
            priority
            alt="sticky-notes"
          />
        </div>

        <div className="clock">
          <Image
            layout="responsive"
            src="/images/clock.png"
            width={240}
            height={279}
            quality={100}
            priority
            alt="clock"
          />
        </div>

        <div className="plane">
          <Image
            layout="responsive"
            src="/images/plane-reversed.png"
            width={386}
            height={309}
            quality={100}
            priority
            alt="plane"
          />
        </div>

        <div className="bell">
          <Image
            layout="responsive"
            src="/images/bell.png"
            width={480}
            height={757}
            quality={100}
            priority
            alt="bell"
          />
        </div>
      </section>

      <section id="features-s2">
        <div className="container pad-x pad-y">
          <div className="flagged">
            <h2 className="title-lg text-center contained">See what you can do in one app</h2>
          </div>
          <div className="promos">
            <div className="promo-feature">
              <div className="promo-feature-image">
                <Image
                  layout="responsive"
                  src="/images/team-calls.png"
                  width={709}
                  height={562}
                  quality={100}
                  priority
                  alt="illustration of interface"
                />
              </div>
              <div className="promo-feature-content-wrapper">
                <div className="promo-feature-content">
                  <h3 className="title-md">
                    Organize <span className="highlight-three">team</span> calls in a snap
                  </h3>
                  <p className="dark-grey">
                    Share messages and files with your colleagues, with a best-in-class native messaging experience.
                    Prose is designed for remote teams, split across different timezones.
                  </p>
                </div>
              </div>
            </div>

            <div className="promo-feature inverted">
              <div className="promo-feature-image">
                <Image
                  layout="responsive"
                  src="/images/team-calls.png"
                  width={709}
                  height={562}
                  quality={100}
                  priority
                  alt="illustration of interface"
                />
              </div>
              <div className="promo-feature-content-wrapper">
                <div className="promo-feature-content">
                  <h3 className="title-md">
                    Designed for <span className="highlight-two">remote</span> teams
                  </h3>
                  <p className="dark-grey">
                    See other peoples last active, timezones and location (if shared), also share your own status
                  </p>
                </div>
              </div>
            </div>

            <div className="promo-feature highlighted">
              <div className="promo-feature-image">
                <Image
                  layout="responsive"
                  src="/images/team-calls.png"
                  width={709}
                  height={562}
                  quality={100}
                  priority
                  alt="illustration of interface"
                />
              </div>
              <div className="promo-feature-content-wrapper">
                <div className="promo-feature-content">
                  <h3 className="title-lg">
                    <span className="highlight-one">Organize</span> your team members
                  </h3>
                  <p className="light-grey">
                    Get access to your data through any additional software or try integrating it into our system, while
                    we show you resource usage statistics.
                  </p>
                  <NavLink href="https://help.prose.org/" chevron>Discover the docs</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features-s3">
        <div className="container pad-x pad-y">
          <div className="half-width">
            <h2 className="title-lg">Create your @company.com Prose chat in 5 minutes</h2>
            <p className="p-xl dark-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et placerat vulputate augue odio diam.
            </p>
          </div>
          <FeaturesScroll/>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
