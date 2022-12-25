import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  const location = useLocation();

  return (
    <div className={"header"}>
      <div className="left-header">
        <div style={{ flex: 1 }}>
          <Link to="/">
            <img
              src={logo}
              className={"mail-nav"}
              alt={"main-logo"}
              height="50"
            />
          </Link>
        </div>
        <div style={{ flex: 3 }}>
          <Link
            className={"mail-nav"}
            to="#"
            onClick={() => (window.location = "mailto:zikriakmale@gmail.com")}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              height={20}
              style={{ margin: "0px 5px" }}
            />
            zikriakmale@gmail.com
          </Link>
        </div>
      </div>

      <div className={"right-header"}>
        <Link
          to="/works"
          className={
            "link-nav" + (location.pathname === "/works" ? " link-active" : "")
          }
        >
          Works
        </Link>
        <Link
          to="/articles"
          className={
            "link-nav" +
            (location.pathname === "/articles" ? " link-active" : "")
          }
        >
          Articles
        </Link>
        <Link
          to="/resume"
          className={
            "link-nav" + (location.pathname === "/resume" ? " link-active" : "")
          }
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Header;
