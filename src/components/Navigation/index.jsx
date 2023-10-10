import "./index.scss";
import LogoPCH from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

const Navigation = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(menu ? false : true);
  };

  return (
    <>
      <nav id="nav" className="nav container">
        <div className="nav__logo">
          <HashLink smooth to="/">
            <img src={LogoPCH} alt="PCH" />
          </HashLink>
        </div>

        <div className="nav__bar" onClick={toggleMenu}>
          <div className="nav__bar__menu">
            {menu ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
          <div className={menu ? "nav__bar__links open" : "nav__bar__links"}>
            <HashLink smooth to="/#works">
              Works
            </HashLink>
            <HashLink smooth to="/#skills">
              Skills
            </HashLink>
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navigation;
