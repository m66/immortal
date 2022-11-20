import MainContent from "./components/UI/MainContent/MainContent";

import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/reset.scss";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <BrowserRouter>
          <MainContent />
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
}

export default App;
