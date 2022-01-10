import Image from "next/image";

export default function Step({ number, title, description, cover }) {
  return (
    <div className="step">
      <div className="step-cover">
        <Image layout="responsive" src={cover} width={544} height={402} alt="" />
      </div>
      <div className="step-number">{number}</div>
      <div className="separator"></div>
      <h4 className="step-title title-xs">{title}</h4>
      <p className="step-description grey">{description}</p>
    </div>
  );
}
