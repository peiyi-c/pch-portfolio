import "./index.scss";
import LogoPCH from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import { useState, useRef } from "react";
import { useLanguageContext } from "../Language/LanguageContext";
const Navigation = () => {
  const [menu, setMenu] = useState(false);
  const navRef = useRef();
  const { t } = useLanguageContext();
  const toggleMenu = () => {
    setMenu(menu ? false : true);
  };

  const scrollOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -111;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
      <nav ref={navRef}>
        <div id="nav" className="nav container">
          <div className="nav__logo">
            <HashLink smooth to="#top" scroll={scrollOffset}>
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
              <HashLink
                smooth
                to="/pch-portfolio/#intro"
                scroll={scrollOffset}
                role="menuitem"
              >
                {t("About Me")}
              </HashLink>
              <HashLink
                smooth
                to="/pch-portfolio/#projects"
                scroll={scrollOffset}
                role="menuitem"
              >
                {t("Projects")}
              </HashLink>
              <HashLink
                smooth
                to="/pch-portfolio/#skills"
                scroll={scrollOffset}
                role="menuitem"
              >
                {t("Skills")}
              </HashLink>
              <HashLink
                smooth
                to="/pch-portfolio/#contact"
                scroll={scrollOffset}
                role="menuitem"
              >
                {t("Contact")}
              </HashLink>
            </div>
          </div>
        </div>
        <hr />
      </nav>
    </>
  );
};

export default Navigation;
