import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { useLanguageContext } from "../Language/LanguageContext";
import LanguageSelect from "../Language/LanguageSelect";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  const { t } = useLanguageContext();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 111) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const toggleMenu = () => {
    console.log("menu");
    setMenu(menu ? false : true);
  };

  const scrollOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -111;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav role="navigation" className={scrolled ? "scrolled" : ""}>
      <div id="nav" className="nav container">
        <div className="nav__logo"></div>

        <div className="nav__bar" onClick={toggleMenu}>
          <div className="nav__bar__menu" role="switch" aria-checked={menu}>
            {menu ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
          <div
            className={`${menu ? "open" : ""} ${
              scrolled ? "scrolled" : ""
            } nav__bar__links`}
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
            <LanguageSelect />
          </div>
        </div>
      </div>
      <hr style={{ display: scrolled ? "block" : "none" }} />
    </nav>
  );
};

export default Navigation;
