import s from "./Cards.module.css";
import { Spacer } from "../Spacer";
import { Heading1, Heading2, SectionTitle, Texts } from "../Text";
import { Parallax } from 'react-scroll-parallax';


export const Cards = () => {
    return (
        <Parallax translateY={[-20, 20]} speed={5}>
        <div className={s.cardline}>

            <div class={s.card}>
                <img src={"assets/dog2.png"} className={s.cardImg}/>
                <div class={s.container}>
                <Texts>Woooof</Texts>
                </div>
            </div>

        <div class={s.card}>
            <img src={"assets/dog2.png"} className={s.cardImg}/>
            <div class={s.container}>
            <Texts>Woooof</Texts>
            </div>
        </div>

        <div class={s.card}>
            <img src={"assets/dog2.png"} className={s.cardImg}/>
            <div class={s.container}>
            <Texts>Woooof</Texts>
            </div>
        </div>

        <div class={s.card}>
            <img src={"assets/dog2.png"} className={s.cardImg}/>
            <div class={s.container}>
            <Texts>Woooof</Texts>
            </div>
        </div>

      </div> 
      </Parallax>
    );
};