import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";
import media from "../public/images/main__product__video.png";

const features = [
  {
    title: "Messaging",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl massa quam pulvinar eu etiam feugiat. Tempor id viverra orci sed tortor amet, aenean fames eu. Dignissim fermentum et sed a.",
    media,
  },
  {
    title: "Calls",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl massa quam pulvinar eu etiam feugiat. Tempor id viverra orci sed tortor amet, aenean fames eu. Dignissim fermentum et sed a.",
    media,
  },
  {
    title: "Privacy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl massa quam pulvinar eu etiam feugiat. Tempor id viverra orci sed tortor amet, aenean fames eu. Dignissim fermentum et sed a.",
    media,
  },
  {
    title: "Notifications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl massa quam pulvinar eu etiam feugiat. Tempor id viverra orci sed tortor amet, aenean fames eu. Dignissim fermentum et sed a.",
    media,
  },
  {
    title: "Self-hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl massa quam pulvinar eu etiam feugiat. Tempor id viverra orci sed tortor amet, aenean fames eu. Dignissim fermentum et sed a.",
    media,
  },
];

function Tab({ active, onClick, children }) {
  return (
    <button onClick={onClick} className={classNames("feature-tab text-center", { active: active })}>
      {children}
    </button>
  );
}

export default function FeaturesTabs() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="features-tabs">
      <div className="full-width">
        <div className="features-tabs-toggles">
          {features.map(({ title }, idx) => (
            <Tab key={idx} active={currentTab === idx} onClick={() => setCurrentTab(idx)}>
              {title}
            </Tab>
          ))}
        </div>
      </div>
      <div className="features-tabs-content-wrapper">
        {features.map(({ media, description }, idx) => (
          <div key={idx} className={classNames("features-tabs-content", { active: currentTab === idx })}>
            <p className="features-tabs-description text-center">{description}</p>
            <div className="features-tabs-media">
              <Image layout="responsive" src={media} quality={100} placeholder="blur" alt="" />
              <div className="cloud">
                <Image layout="fill" src="/images/Cloud-Two.png" quality={100} alt="cloud" />
              </div>
              <div className="bubble">
                <Image layout="fill" src="/images/bubble.png" quality={100} alt="bubble" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
