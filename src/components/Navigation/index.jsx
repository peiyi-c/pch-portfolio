import "./index.scss";
import LogoPCH from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import { useState, useRef } from "react";

const Navigation = () => {
  const [menu, setMenu] = useState(false);
  const navRef = useRef();
  const toggleMenu = () => {
    setMenu(menu ? false : true);
  };

  return (
    <>
      <nav ref={navRef}>
        <div id="nav" className="nav container">
          <div className="nav__logo">
            <HashLink smooth to="/#intro">
              <img src={LogoPCH} alt="PCH" />
            </HashLink>
          </div>

          <div className="nav__bar" onClick={toggleMenu}>
            <div className="nav__bar__menu" role="switch" aria-checked={menu}>
              {menu ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
            <div
              className={menu ? "nav__bar__links open" : "nav__bar__links"}
              role="menu"
            >
              <HashLink smooth to="/#works" role="menuitem">
                Works
              </HashLink>
              <HashLink smooth to="/#skills" role="menuitem">
                Skills
              </HashLink>
              <HashLink smooth to="/#contact" role="menuitem">
                Contact
              </HashLink>
            </div>
          </div>
        </div>
        <hr />
      </nav>
      <div className="nav__bottom"></div>
    </>
  );
};

export default Navigation;
