import s from "./Landing.module.css";
import { Spacer } from "../Spacer";
import { Heading1, Heading2, SectionTitle, Texts } from "../Text";
import { Parallax } from 'react-scroll-parallax';

export const Landing = () => {
    return (
            <Parallax translateY={[0, 0]}>
            <div>
                
            <img src={"assets/head.png"} className={s.img} />
            <div className={s.introtxt}>
                <Heading1>hi</Heading1>
                <Heading2>my name is Victoria</Heading2>
                <Texts>i'm a front end dev (trying ok?)</Texts>
                <img src={"assets/blob.svg"} className={s.blob} />
                <img src={"assets/blob1.svg"} className={s.blob1} />
            </div>
            </div>
            </Parallax>
            
    );  
}; 