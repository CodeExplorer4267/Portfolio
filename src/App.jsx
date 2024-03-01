import Nav from "./components/navbar";
import About from "./components/AboutPic";
import Myimage from "./components/Myimage";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App(){
  return (
    <>
      <Nav></Nav>
      <About></About>
      <Myimage></Myimage>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>

  );
}
export default App;