import classNames from "classnames";
import Image from "next/image";
import { forwardRef } from "react";

const Step = forwardRef(({ number, title, description, cover, active }, ref) => (
  <div className={classNames({ step: true, active })} ref={ref}>
    <div className="step-cover"></div>
    <div className="step-number">{number}</div>
    <div className="separator"></div>
    <h4 className="step-title title-xs">{title}</h4>
    <p className="step-description grey">{description}</p>
  </div>
));

export default Step;
