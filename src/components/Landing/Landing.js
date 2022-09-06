import s from "./Landing.module.css";
import { Spacer } from "../Spacer";
import { Heading1, Heading2, SectionTitle, Texts } from "../Text";

export const Landing = () => {
    return (
            <div className={s.introtxt}>
            <img src="http://placekitten.com/200/200" className={s.img} />
            <Spacer size={64} />
            <Heading1>henlo</Heading1>
            <Heading2>my name is ?!</Heading2>
            <Texts>im a front end dev</Texts>
            </div>
            
    );  
}; 