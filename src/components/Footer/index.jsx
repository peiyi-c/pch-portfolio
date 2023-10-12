import "./index.scss";
import Wave from "../../assets/wave.svg";
import Wave2 from "../../assets/wave2.svg";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [send, setSend] = useState("pending");
  const refForm = useRef();
  const refName = useRef();
  const refEmail = useRef();
  const refSubject = useRef();
  const refMessage = useRef();
  const status = {
    success: {
      text: "Message successfully sent!",
    },
    failed: {
      text: "Failed to send the message, please try again..",
    },
    invalid: {
      text: "Please check your email!",
    },
    incomplete: {
      text: "Please fill in all required fields!",
    },
    pending: {
      text: "Pending",
    },
  };
  const checkEmail = (email) => {
    const regex = new RegExp("[^@]+@[^.]+..+", "i");
    return email.match(regex);
  };
  const clearMessage = () => {
    const timer = setTimeout(() => {
      setSend("pending");
    }, 5000);
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
      return;
    }
    if (!checkEmail(refEmail.current.value)) {
      setSend("invalid");
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
          console.log(send);
          refName.current.value = "";
          refEmail.current.value = "";
          refSubject.current.value = "";
          refMessage.current.value = "";
          clearMessage();
        },
        (error) => {
          console.log(error.text);

          setSend("failed");
          console.log(send);
          clearMessage();
        }
      );
  };

  return (
    <>
      <footer id="contact" className="contact">
        <img className="contact__wave-2" aria-hidden="true" src={Wave2} />
        <h1 className="contact__title">Get In Touch</h1>
        <form
          ref={refForm}
          onSubmit={sendEmail}
          className="contact__form"
          noValidate
        >
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
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
              <span className={`${send} contact__form__message`}>
                {status[send]["text"]}
              </span>
            </li>
          </ul>
        </form>
        <img className="contact__wave-1" aria-hidden="true" src={Wave} />
      </footer>
    </>
  );
};

export default Footer;
