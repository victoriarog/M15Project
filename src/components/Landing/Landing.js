import s from "./Landing.module.css";
import { Spacer } from "../Spacer";
import { Heading1, Heading2, SectionTitle, Texts } from "../Text";

export const Landing = () => {
    return (
            <div className={s.introtxt}>
            <img src={"assets/dog1.png"} className={s.img} />
            <img src={"assets/blob.svg"} className={s.blob} />
            <img src={"assets/blob1.svg"} className={s.blob1} />
            {/* <Spacer size={64} /> */}
            <Heading1>hi</Heading1>
            <Heading2>my name is Victoria</Heading2>
            <Texts>i'm a front end dev</Texts>
            </div>
            
    );  
}; 