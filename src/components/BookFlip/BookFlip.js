import s from "./BookFlip.module.css";
import { Spacer } from "../Spacer";
import { Heading1, Heading2, SectionTitle, Texts } from "../Text";
import HTMLFlipBook from "react-pageflip";

export function BookFlip(props) {
  return (
    <HTMLFlipBook 
    width={300} 
    height={300} 
    maxShadowOpacity={0.3} 
    className={s.book}>
      <div className={s.demoPage}>Page 1</div>
      <div className={s.demoPage}>Page 2</div>
      <div className={s.demoPage}>Page 3</div>
      <div className={s.demoPage}>Page 4</div>
    </HTMLFlipBook>
  );
}