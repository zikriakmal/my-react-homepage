import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "./style.css";

const Header = () => {
  const location = useLocation();

  return (
    <div className={"header"}>
      <div className="left-header">
        <div style={{ flex: 1 }}>
          <Link to="/" className={"link-nav"}>
            <img
              src={logo}
              className={"link-nav"}
              alt={"main-logo"}
              height="70"
            />
          </Link>
        </div>
        <div style={{ flex: 3 }}>
          <p
            href="#"
            onClick={() => (window.location = "mailto:zikriakmale@gmail.com")}
            style={{ fontSize: 16, fontWeight: "bolder" }}
          >
            zikriakmale@gmail.com
          </p>
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
            "link-nav" + (location.pathname === "/articles" ? " link-active" : "")
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
