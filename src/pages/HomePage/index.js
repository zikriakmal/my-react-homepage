import "./styles.css";
import logo from "../../assets/images/logo.png";
import image from "../../assets/images/ilust.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <div className={"container"}>
      <HomepageHeader />
      <HomepageContent />
      <HomepageFooter />
    </div>
  );
};

const HomepageHeader = () => {
  return (
    <div className={"header"}>
      <div className="left-header">
        <div style={{ flex: 1 }}>
          <img src={logo} alt={"main-logo"} height="40" />
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
        <p style={{ fontWeight: "600" }}>Works</p>
        <p style={{ fontWeight: "600" }}>Resume</p>
        <p style={{ fontWeight: "600" }}>Articles</p>
      </div>
    </div>
  );
};

const HomepageContent = () => {
  return (
    <div className={"content"}>
      <div className={"content-media-link"} style={{ flex: 1 }}>
        <div>
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ height: 40, width: 40 }}
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faTwitter} style={{ height: 40, width: 40 }} />
        </div>
        <div>
          <FontAwesomeIcon icon={faTiktok} style={{ height: 40, width: 40 }} />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ height: 40, width: 40 }}
          />
        </div>
      </div>
      <div className={"content-description"} style={{ flex: 3 }}>
        <p style={{ fontSize: 46, margin: 0, textAlign: "left" }}>Hello I'm </p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: 20 }} />
          <p
            style={{
              margin: 0,
              fontWeight: "700",
              fontSize: 46,
              marginLeft: 20,
            }}
          >
            Zikri Akmal
          </p>
        </div>
        <p style={{ fontSize: 24, fontWeight: 300, textAlign: "left" }}>
          A Software Developer, Been passionate in programming since 2015, playing music for
          fun, writing code article, make coding video content, specialized in
          node.js ,react.js, react native, golang
        </p>
      </div>
      <div style={{ flex: 3 }}>
        <img height={340} src={image} alt={"profile"} />
      </div>
    </div>
  );
};

const HomepageFooter = () => {
  return (
    <div className={"footer"}>
      <p>Made with ❤️ by zikri akmal </p>
    </div>
  );
};

export default HomePage;
