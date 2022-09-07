import s from "./Cards.module.css";
import { Spacer } from "../Spacer";
import { Heading1, Heading2, SectionTitle, Texts } from "../Text";


export const Cards = () => {
    return (
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

      </div> 
    );
};