import "./App.css";
import Homepage from "./pages/HomePage";
import { Header, Footer } from "./components/organisms";

function App() {
  return (
    <div className={"App container"}>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
