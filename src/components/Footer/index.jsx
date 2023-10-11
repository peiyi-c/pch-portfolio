import "./index.scss";
import Wave from "../../assets/wave.svg";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="contact">
        <h1 className="contact__title">Contact</h1>
        <div className="contact__links"></div>
      </footer>
      <img className="concat__wave" aria-hidden="true" src={Wave} />
    </>
  );
};

export default Footer;
