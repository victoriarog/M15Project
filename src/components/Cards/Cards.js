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
        <h2 className={s.ht}>About me</h2>
        <div className={s.cardline}>
        <ReactCardFlip isFlipped={flip} 
            flipDirection="horizontal">
            <div class={s.card} onClick={() => setFlip(!flip)}>
                <div class={s.container}>
                <img src={"assets/dog2.png"} className={s.cardImg}/>
                <Texts>Who am I? <br/><br/></Texts>
                <p className={s.ct}>A bit about the one and only me</p>
                </div>
            </div>

            <div class={s.card} onClick={() => setFlip(!flip)}>
                <div class={s.container}>
                <Texts>About me</Texts>
                <p className={s.ct}>
                    <br/>Born in Moscow, Russia <br/>
                    Currently live and work in Barcelona, Spain <br />
                    after moving here in June of 2013 <br/>
                    I have a background in art  
                    and programming, currently pursuing a BSci in Front End development.<br/>
                </p>
                </div>
            </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip1} 
            flipDirection="vertical">
            <div class={s.card} onClick={() => setFlip1(!flip1)}>
                <div class={s.container}>
                <img src={"assets/dog2.png"} className={s.cardImg}/>
                <Texts>Education <br/><br/></Texts>
                <p className={s.ct}>Where and what</p>
                </div>
            </div>

            <div class={s.card} onClick={() => setFlip1(!flip1)}>
                <div class={s.container}>
                <Texts>My studies <br/><br/></Texts>
                <p className={s.ct}>
                    From Sept'2018 to Jan'2020, pursued a 
                    BFA in Digital Arts and Animation, DigiPen Institute of Technology.
                    Diploma in Programming for UE4 in 2021, CGSpectrum.
                    Currently, BSci in Front End development at Harbour.Space university.
                    <br /> <br/>
                </p>
                </div>
            </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip2} 
            flipDirection="horizontal">
            <div class={s.card} onClick={() => setFlip2(!flip2)}>
                <div class={s.container}>
                <img src={"assets/dog2.png"} className={s.cardImg}/>
                <Texts>Hobbies <br/><br/></Texts>
                <p className={s.ct}>Me Time time</p>
                </div>
            </div>

            <div class={s.card} onClick={() => setFlip2(!flip2)}>
                <div class={s.container}>
                <Texts>Hobbies <br/><br/></Texts>
                <p className={s.ct}>
                    During my free time, I enjoy 
                    playing video games, especially indie developed ones, like Cult of the Lamb 
                    or Stardew Valley. I also love reading science fiction and fantasy books, e.g. Asimov, Strugatsky, etc. 
                </p>
                </div>
            </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip3} 
            flipDirection="vertical">
            <div class={s.card} onClick={() => setFlip3(!flip3)}>
                <div class={s.container}>
                <img src={"assets/dog2.png"} className={s.cardImg}/>
                <Texts>Random <br/> <br/></Texts>
                <p className={s.ct}>Some fun info bout me</p>
                </div>
            </div>

            <div class={s.card} onClick={() => setFlip3(!flip3)}>
                <div class={s.container}>
                <Texts>Info <br/> <br/></Texts>
                <p className={s.ct}>
                    I have four dogs, three sausage dogs and a stray. <br/>
                    I am a leftie. <br/> 
                    I really like coffee. <br/>
                </p>
                </div>
            </div>
            </ReactCardFlip>

      </div> 
      </Parallax>
    );
};