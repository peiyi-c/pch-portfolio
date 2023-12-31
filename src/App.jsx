import "./App.scss";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { LanguageContextProvider } from "./components/Language/LanguageContext";
function App() {
  return (
    <>
      <LanguageContextProvider>
        <Navigation />
        <main role="main">
          <Intro />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </LanguageContextProvider>
    </>
  );
}

export default App;
