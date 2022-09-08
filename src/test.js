import "./styles.css";

import { Spacer } from "./components/Spacer";
import { Navbar } from "./components/NavBar";
import { Container } from "./components/Container";
import  Landing  from "../src/components/Landing";
import  BookFlip  from "../src/components/BookFlip";
import Cards from "../src/components/Cards";
import { ParallaxProvider } from 'react-scroll-parallax';
import Spin from "../src/components/Spin";
import Form from "./components/Form";




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
      <Container>
      <Form />
      </Container>
      </ParallaxProvider>     
    </div>
  );
}