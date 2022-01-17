import Image from "next/image";
import ellipseTopLeft from "../public/images/ellipse-top-left.png";
import ellipseBottomRight from "../public/images/ellipse-bottom-right.png";
import monitor from "../public/images/Monitor.png";

const questions = [
  {
    question: "How does it work ?",
    answer:
      "Requires a computer running an operating system. The computer must have some memory and ideally some kind oflong-term storage. An input device as well as some form of output device is recommended.",
  },
  {
    question: "How does it work ?",
    answer:
      "Requires a computer running an operating system. The computer must have some memory and ideally some kind oflong-term storage. An input device as well as some form of output device is recommended.",
  },
  {
    question: "How does it work ?",
    answer:
      "Requires a computer running an operating system. The computer must have some memory and ideally some kind oflong-term storage. An input device as well as some form of output device is recommended.",
  },
];

export default function FAQ() {
  return (
    <div className="faq-wrapper">
      <h2 className="title-lg text-center contained">Frequently asked questions</h2>
      {questions.map(({ question, answer }, idx) => (
        <details key={idx}>
          <summary className="title-xs">{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
      <div className="ellipse-top-left">
        <Image layout="fill" src={ellipseTopLeft} alt="" />
      </div>
      <div className="ellipse-bottom-right">
        <Image layout="fill" src={ellipseBottomRight} alt="" />
      </div>
      <div className="monitor">
        <Image layout="responsive" src={monitor} alt="monitor" />
      </div>
    </div>
  );
}
