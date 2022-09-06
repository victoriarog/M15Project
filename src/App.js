import "./styles.css";

import { Heading1, Heading2, SectionTitle, Texts } from "./components/Text";
import { Spacer } from "./components/Spacer";
import { Container } from "./components/Container";
import { Navbar } from "./components/NavBar";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <SectionTitle>Headings</SectionTitle>
        <Spacer size={32} />
        <Heading1>Heading 1</Heading1>
        <Spacer size={32} />
        <Heading2>Heading 2</Heading2>
        <Spacer size={32} />
        <SectionTitle>Text</SectionTitle>
        <Spacer size={32} />
        <Texts>Text type</Texts>
        <Spacer size={32} />
        <SectionTitle>Colors</SectionTitle>
        <Spacer size={32} />
        <div
          style={{ padding: "25px", backgroundColor: `var(--color-smoky)` }}
        ></div>
        <Spacer size={16} />
        <div
          style={{ padding: "25px", backgroundColor: `var(--color-seaweed)` }}
        ></div>
        <Spacer size={16} />
        <div
          style={{ padding: "25px", backgroundColor: `var(--color-teal)` }}
        ></div>
        <Spacer size={16} />
        <div
          style={{ padding: "25px", backgroundColor: `var(--color-artichoke)` }}
        ></div>
        <Spacer size={16} />
        <div
          style={{ padding: "25px", backgroundColor: `var(--color-olive)` }}
        ></div>
      </Container>
    </div>
  );
}
