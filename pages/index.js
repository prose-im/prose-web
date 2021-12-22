import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prose</title>
        <meta name="description" content="Decentralized team messaging" />
      </Head>

      <section id="home-s1" className="pad-x">
        <div className="grid">
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
                  <Image layout="fill" src="/lock.png" quality={100} priority alt="lock" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item" id="hero-earth">
            <div className="content">
              <div className="pill pill-gradient-blue earth">
                <div className="earth-inner">
                  <Image layout="fill" src="/planet.png" width={98} height={98} quality={100} priority alt="earth" />
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
                    src="/plane.png"
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
                  <Image layout="responsive" src="/buoy.png" width={98} height={98} quality={100} priority alt="buoy" />
                </div>
                <div className="target">
                  <Image
                    layout="responsive"
                    src="/target.png"
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
      </section>
    </>
  );
}
