import s from "./Landing.module.css";
import { Spacer } from "../Spacer";
import { Heading1, Heading2, SectionTitle, Texts } from "../Text";
import { Parallax } from 'react-scroll-parallax';

export const Landing = () => {
    return (
            <Parallax translateY={[-20, 20]}>
            {/* <div className={s.ld}>
                <img src={"assets/bms.png"} className={s.bms} />
                <img src={"assets/circle.png"} className={s.circle} />
            </div> */}
            <div className={s.introtxt}>
                <img src={"assets/dog1.png"} className={s.img} />
                <img src={"assets/blob.svg"} className={s.blob} />
                <img src={"assets/blob1.svg"} className={s.blob1} />
                <Heading1>hi</Heading1>
                <Heading2>my name is Victoria</Heading2>
                <Texts>i'm a front end dev</Texts>
            </div>
            </Parallax>
            
    );  
}; 