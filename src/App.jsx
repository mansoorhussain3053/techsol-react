import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AnimatedCursor from "react-animated-cursor";
import HomePage from "./components/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";



function App() {
  return (
    <>
      <Header />
      
      <AnimatedCursor
        className="Cursor__Hidden"
        innerSize={24}
        outerSize={20}
        z-index={99}
        color="69,242,252"
        outerAlpha={0.2}
        innerScale={0.7}
        innerStyle={{
          background:
            "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
        }}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 15,
              outerSize: 15,
              color: "131,58,180",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact/>} />

        
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
