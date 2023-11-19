import "./index.scss";
import Wave from "../../assets/wave.svg";
import Wave2 from "../../assets/wave2.svg";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguageContext } from "../Language/LanguageContext";
const Footer = () => {
  const [send, setSend] = useState("pending");
  const refForm = useRef();
  const refName = useRef();
  const refEmail = useRef();
  const refSubject = useRef();
  const refMessage = useRef();
  const { t } = useLanguageContext();

  const checkEmail = (email) => {
    const regex = new RegExp("[^@]+@[^.]+..+", "i");
    return email.match(regex);
  };
  const clearMessage = () => {
    const timer = setTimeout(() => {
      setSend("pending");
    }, 3000);
    return () => clearTimeout(timer);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !refName.current.value.trim() ||
      !refEmail.current.value.trim() ||
      !refSubject.current.value.trim() ||
      !refMessage.current.value.trim()
    ) {
      setSend("incomplete");
      clearMessage();
      return;
    }
    if (!checkEmail(refEmail.current.value)) {
      setSend("invalid");
      clearMessage();
      return;
    }

    emailjs
      .sendForm(
        "service_t3m97oq",
        "template_8zxlmrf",
        refForm.current,
        "HsdRu0CzvsGg2vQbh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend("success");
          refName.current.value = "";
          refEmail.current.value = "";
          refSubject.current.value = "";
          refMessage.current.value = "";
          clearMessage();
        },
        (error) => {
          console.log(error.text);

          setSend("failed");
          clearMessage();
        }
      );
  };

  return (
    <>
      <footer id="contact" className="contact">
        <img
          className="contact__wave-2"
          aria-hidden="true"
          src={Wave2}
          alt="wave"
        />
        <h1 className="contact__title" role="heading">
          {t("Contact")}{" "}
        </h1>
        <h5 className="contact__text">{t("Contact-Text")}</h5>
        <form
          ref={refForm}
          onSubmit={sendEmail}
          className="contact__form"
          role="form"
          noValidate
        >
          <ul role="list">
            <li>
              <input
                ref={refName}
                className={`${send}`}
                placeholder={t("Name")}
                type="text"
                name="name"
                required
              />
            </li>
            <li>
              <input
                ref={refEmail}
                className={`${send}`}
                placeholder={t("Email")}
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
              />
            </li>
            <li>
              <input
                ref={refSubject}
                className={`${send}`}
                placeholder={t("Subject")}
                type="text"
                name="subject"
                required
              />
            </li>
            <li>
              <textarea
                ref={refMessage}
                className={`${send}`}
                placeholder={t("Message")}
                name="message"
                required
              ></textarea>
            </li>
            <li>
              <input
                className={`${send}`}
                type="submit"
                value={t("Send")}
                disabled={send === "success"}
                role="button"
              />
            </li>
            <li>
              <span className={`${send} contact__form__message`}>
                {t("Message-" + `${send}`)}
              </span>
            </li>
          </ul>
        </form>
        <img
          className="contact__wave-1"
          aria-hidden="true"
          src={Wave}
          alt="wave"
        />
      </footer>
    </>
  );
};

export default Footer;
