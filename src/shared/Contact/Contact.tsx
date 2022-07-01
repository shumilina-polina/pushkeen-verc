import { useTranslation } from "react-i18next";
import s from "./Contact.module.scss";
import emailjs from "@emailjs/browser";
import { useCallback, useState } from "react";
import { Content } from "./Content";
import { SubmitMessage } from "./SubmitMessage";

export const Contact = () => {
  const { t } = useTranslation();

  const [submitMessage, setSubmitMessage] = useState<boolean>(true);

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

    // emailjs
    //   .sendForm("gmail", "template_mine", e.target, "Rfs0JK0pSRV-tYFNs")
    //   .then(
    //     (result: any) => {
    //       console.log(result.text);
    //     },
    //     (error: Error) => {
    //       console.log(error.message);
    //     }
    //   );
    // e.target.reset();
  };

  return (
    <section className={s.contact}>
      <div className="container">
        <div className={s.contact_wrapper}>{renderContent()}</div>
      </div>
    </section>
  );
};
