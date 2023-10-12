import "./App.scss";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { LanguageContextProvider } from "./components/Language/LanguageContext";
function App() {
  return (
    <>
      <LanguageContextProvider>
        <Navigation />
        <Intro />
        <Works />
        <Skills />
        <Footer />
      </LanguageContextProvider>
    </>
  );
}

export default App;
