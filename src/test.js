import "./styles.css";

import { Heading1, Heading2, SectionTitle, Texts } from "./components/Text";
import { Spacer } from "./components/Spacer";
import { Navbar } from "./components/NavBar";
import { Container } from "./components/Container";
import  Landing  from "../src/components/Landing";
import  BookFlip  from "../src/components/BookFlip";
import Cards from "../src/components/Cards";




export default function Test() {
  return (
    <div className="Test">
      <Container>
      <Navbar />
      <Spacer size={32} />
      <Landing />
      </Container>
      <Container>
      <BookFlip />
      </Container>
      <Container>
        <Cards />
      </Container>
    </div>
  );
}
