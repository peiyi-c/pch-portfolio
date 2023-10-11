import "./index.scss";
import Wave from "../../assets/wave.svg";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="contact">
        <h1 className="contact__title">Get In Touch</h1>
        <form className="contact__form">
          <ul role="list">
            <li>
              <input placeholder="Name" type="text" name="name" required />
            </li>
            <li>
              <input placeholder="Email" type="email" name="email" required />
            </li>
            <li>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </li>
            <li>
              <input type="submit" value="SEND" />
            </li>
          </ul>
          <img className="contact__wave" aria-hidden="true" src={Wave} />
        </form>
      </footer>
    </>
  );
};

export default Footer;
