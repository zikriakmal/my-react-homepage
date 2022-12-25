import logo from "../../../assets/images/logo.png";
import './style.css';

const Header = () => {
  return (
    <div className={"header"}>
      <div className="left-header">
        <div style={{ flex: 1 }}>
          <img src={logo} alt={"main-logo"} height="70" />
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
        <p style={{ fontWeight: "800", margin: 0 }}>Works</p>
        <p style={{ fontWeight: "800", margin: 0 }}>Resume</p>
        <p style={{ fontWeight: "800", margin: 0 }}>Articles</p>
      </div>
    </div>
  );
};

export default Header;
