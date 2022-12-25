import "./styles.css";
import image from "../../assets/images/ilust.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Atoms } from "../../components";
import App from "../../App";

const HomePage = () => {
  return (
    <App>
      <HomepageContent />
    </App>
  );
};

const HomepageContent = () => {
  return (
    <div className={"content"}>
      <div className={"content-media-link fade-in"} style={{ flex: 1 }}>
        <div>
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ height: 40, width: 40 }}
          />
        </div>
        <Atoms.Gap height={20} />
        <div>
          <FontAwesomeIcon icon={faTwitter} style={{ height: 40, width: 40 }} />
        </div>
        <Atoms.Gap height={20} />
        <div>
          <FontAwesomeIcon icon={faTiktok} style={{ height: 40, width: 40 }} />
        </div>
        <Atoms.Gap height={20} />
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
        <p style={{ fontSize: 18, fontWeight: 300, textAlign: "left" }}>
          A Software Developer, Been passionate in programming since 2015,
          playing music for fun, writing programming article, make coding video
          content, specialized in node.js ,react.js, react native, golang
        </p>
      </div>
      <div style={{ flex: 2 }}>
        <img className={"fade-in"} height={340} src={image} alt={"profile"} />
      </div>
    </div>
  );
};

export default HomePage;
