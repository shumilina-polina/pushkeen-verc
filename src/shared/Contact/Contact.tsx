import s from "./Contact.module.scss";
import emailjs from "@emailjs/browser";
import { useCallback, useState } from "react";
import { Content } from "./Content";
import { SubmitMessage } from "./SubmitMessage";

export const Contact = () => {
  const [submitMessage, setSubmitMessage] = useState<boolean>(false);

  const renderContent = useCallback(() => {
    if (submitMessage) {
      return <SubmitMessage setSubmitMessage={setSubmitMessage} />;
    } else
      return (
        <Content setSubmitMessage={setSubmitMessage} sendEmail={sendEmail} />
      );
  }, [submitMessage]);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setSubmitMessage(true);

    emailjs
      .sendForm(
        "service_g5bbd95",
        "template_b1izhed",
        e.target,
        "b9BCqPQmwMN7r8f4z"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: Error) => {
          console.log(error.message);
        }
      );
    e.target.reset();
  };

  return (
    <section className={s.contact}>
      <div className="container">
        <div className={s.contact_wrapper}>{renderContent()}</div>
      </div>
    </section>
  );
};
