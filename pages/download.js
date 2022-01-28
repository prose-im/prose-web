import Head from "next/head";
import Image from "next/image";
import NavLink from "../components/NavLink";

import ProductImage from "../public/images/main__product__video.png";

export default function Download() {
  return (
    <>
      <Head>
        <title>Prose • Download</title>
        <meta name="description" content="Decentralized team messaging" />
      </Head>

      <section id="pricing-s1">
        <div className="container pad-x pad-y">
          <h1 className="title-xl text-center">Download Prose</h1>
          <p className="p-xl text-center">Start messaging your team today.</p>
          <div className="btn-wrapper">
            <NavLink href="/download" filled chevron>
              Download for MacOS
            </NavLink>
          </div>
          <div className="product-image">
            <Image layout="responsive" src={ProductImage} quality={100} priority alt="product-image" />
          </div>
        </div>
      </section>
    </>
  );
}
