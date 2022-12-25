import "./App.css";
import { Header, Footer } from "./components/organisms";

function App(props) {
  return (
    <div className={"App container"}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default App;
