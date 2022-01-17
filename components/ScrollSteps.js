import { useRef, useEffect, useState, createRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import classNames from "classnames";
import Step from "./Step";

const steps = [
  {
    number: "01.",
    title: "Create your Prose cloud account",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget porttitor at sit ullamcorper nibh. Blandit tortor a fringilla nunc, nullam varius. Amet turpis auctor ipsum non.",
    cover: "/images/bg-cta.png",
  },
  {
    number: "02.",
    title: "Setup your domain name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget porttitor at sit ullamcorper nibh. Blandit tortor a fringilla nunc, nullam varius. Amet turpis auctor ipsum non.",
    cover: "/images/bg-cta.png",
  },
  {
    number: "03.",
    title: "Create user accounts & start using Prose",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget porttitor at sit ullamcorper nibh. Blandit tortor a fringilla nunc, nullam varius. Amet turpis auctor ipsum non.",
    cover: "/images/bg-cta.png",
  },
];

export default function ScrollSteps() {
  const [refs, setRefs] = useState([]);

  const onScreen = [
    useOnScreen({ ref: refs[0], options: { rootMargin: "0% 0% -60% 0%", threshold: 0 } }),
    useOnScreen({ ref: refs[1], options: { rootMargin: "0% 0% -60% 0%", threshold: 0 } }),
    useOnScreen({ ref: refs[2], options: { rootMargin: "0% 0% -60% 0%", threshold: 0 } }),
  ];

  useEffect(() => {
    setRefs((refs) =>
      Array(steps.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, []);

  return (
    <div className="process-list">
      <div className="process-list-content">
        {steps.map((item, idx) => (
          <Step key={idx} ref={refs[idx]} {...item} active={onScreen[idx]} />
        ))}
      </div>
      <div className="process-list-visual">
        <div className="step-tracker">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className={classNames({
                "steps-visuals": true,
                active: idx === 0 ? true : onScreen[idx],
              })}
            >
              <p className="title-xl">{idx + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
