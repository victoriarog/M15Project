import s from "./Cards.module.css";
import { Heading1, Heading2, SectionTitle, Texts } from "../Text";
import { Parallax } from 'react-scroll-parallax';
import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";


export const Cards = () => {
    const [flip, setFlip] = useState(false);
    const [flip1, setFlip1] = useState(false);
    const [flip2, setFlip2] = useState(false);
    const [flip3, setFlip3] = useState(false);
    return (
        <Parallax translateY={[-20, 20]} speed={5}>
        <div className={s.cardline}>

        <ReactCardFlip isFlipped={flip} 
            flipDirection="horizontal">
            <div class={s.card} onClick={() => setFlip(!flip)}>
                <div class={s.container}>
                <img src={"assets/dog2.png"} className={s.cardImg}/>
                <Texts>Woooof</Texts>
                <p className={s.ct}>woof woof woof</p>
                </div>
            </div>

            <div class={s.card} onClick={() => setFlip(!flip)}>
                <div class={s.container}>
                <img src={"assets/dog2.png"} className={s.cardImg}/>
                <Texts>Woooof</Texts>
                <p className={s.ct}>woof woof woof</p>
                </div>
            </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip1} 
            flipDirection="vertical">
            <div class={s.card} onClick={() => setFlip1(!flip1)}>
                <div class={s.container}>
                <img src={"assets/dog2.png"} className={s.cardImg}/>
                <Texts>Woooof</Texts>
                <p className={s.ct}>woof woof woof</p>
                </div>
            </div>

            <div class={s.card} onClick={() => setFlip1(!flip1)}>
                <div class={s.container}>
                <img src={"assets/dog2.png"} className={s.cardImg}/>
                <Texts>Woooof</Texts>
                <p className={s.ct}>woof woof woof</p>
                </div>
            </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip2} 
            flipDirection="horizontal">
            <div class={s.card} onClick={() => setFlip2(!flip2)}>
                <div class={s.container}>
                <img src={"assets/dog2.png"} className={s.cardImg}/>
                <Texts>Woooof</Texts>
                <p className={s.ct}>woof woof woof</p>
                </div>
            </div>

            <div class={s.card} onClick={() => setFlip2(!flip2)}>
                <div class={s.container}>
                <img src={"assets/dog2.png"} className={s.cardImg}/>
                <Texts>Woooof</Texts>
                <p className={s.ct}>woof woof woof</p>
                </div>
            </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip3} 
            flipDirection="vertical">
            <div class={s.card} onClick={() => setFlip3(!flip3)}>
                <div class={s.container}>
                <img src={"assets/dog2.png"} className={s.cardImg}/>
                <Texts>Woooof</Texts>
                <p className={s.ct}>woof woof woof</p>
                </div>
            </div>

            <div class={s.card} onClick={() => setFlip3(!flip3)}>
                <div class={s.container}>
                <img src={"assets/dog2.png"} className={s.cardImg}/>
                <Texts>Woooof</Texts>
                <p className={s.ct}>woof woof woof</p>
                </div>
            </div>
            </ReactCardFlip>

      </div> 
      </Parallax>
    );
};