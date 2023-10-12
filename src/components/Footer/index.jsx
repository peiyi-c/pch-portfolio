import "./index.scss";
import Wave from "../../assets/wave.svg";
import Wave2 from "../../assets/wave2.svg";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [message, setMessage] = useState("");
  const refForm = useRef();
  const refName = useRef();
  const refEmail = useRef();
  const refSubject = useRef();
  const refMessage = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
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
          setMessage("Message successfully sent!");
          refName.current.value = "";
          refEmail.current.value = "";
          refSubject.current.value = "";
          refMessage.current.value = "";
        },
        (error) => {
          console.log(error.text);
          setMessage("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <footer id="contact" className="contact">
        <img className="contact__wave-2" aria-hidden="true" src={Wave2} />
        <h1 className="contact__title">Get In Touch</h1>
        <form ref={refForm} onSubmit={sendEmail} className="contact__form">
          <ul role="list">
            <li>
              <input
                ref={refName}
                placeholder="Name"
                type="text"
                name="name"
                required
              />
            </li>
            <li>
              <input
                ref={refEmail}
                placeholder="Email"
                type="email"
                name="email"
                required
              />
            </li>
            <li>
              <input
                ref={refSubject}
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
            </li>
            <li>
              <textarea
                ref={refMessage}
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </li>
            <li>
              <input type="submit" value="SEND" />
            </li>
            <li>
              <span className="contact__form__message">{message}</span>
            </li>
          </ul>
        </form>
        <img className="contact__wave-1" aria-hidden="true" src={Wave} />
      </footer>
    </>
  );
};

export default Footer;
