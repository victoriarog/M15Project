import "./styles.css";

import { Spacer } from "./components/Spacer";
import { Navbar } from "./components/NavBar";
import { Container } from "./components/Container";
import  Landing  from "../src/components/Landing";
import  BookFlip  from "../src/components/BookFlip";
import Cards from "../src/components/Cards";
import { ParallaxProvider } from 'react-scroll-parallax';
import Spin from "../src/components/Spin";
import Projects from "../src/components/Projects";




export default function Test() {
  return (
    <div className="Test">
      <ParallaxProvider>
      <Container>
      <Navbar />
      <Landing />
      </Container>
      <Container>
      <Cards />
      </Container>
      {/* <Container> */}
      {/* <BookFlip /> */}
      {/* <Projects /> */}
      {/* </Container> */}
      </ParallaxProvider>     
    </div>
  );
}