import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

const proFeatures = [
  {
    number: "01",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est erat sapien sit vitae eget morbi fermentum justo.",
    active: true,
    cover: "/images/bg-cta.png",
  },
  {
    number: "02",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est erat sapien sit vitae eget morbi fermentum justo.",
    cover: "/images/bg-cta.png",
  },
  {
    number: "03",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est erat sapien sit vitae eget morbi fermentum justo.",
    cover: "/images/bg-cta.png",
  },
];

function Tab({ cover, number, title, description, active, onClick }) {
  return (
    <div className={classNames({ "pro-feature-item": true, active })} onClick={onClick}>
      <div className="cover">
      </div>
      <div className="pill-counter">{number}</div>
      <div className="title-xs">{title}</div>
      <div className="dark-grey">{description}</div>
    </div>
  );
}

export default function ProTabs() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="schematics">
      <div className="pro-features">
        {proFeatures.map((item, index) => (
          <Tab key={index} active={selected === index} onClick={() => setSelected(index)} {...item} />
        ))}
      </div>
      {proFeatures.map((item, index) => (
        <div
          key={index}
          className={classNames({
            "pro-video": true,
            active: selected === index,
          })}
        ><p className="title-xl">{index + 1}</p></div>
      ))}
    </div>
  );
}
