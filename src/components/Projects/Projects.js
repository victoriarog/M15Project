import s from "./Projects.module.css";
import {Texts} from "../Text";


export const Projects = () => {
    return (
        
        <><h2 className={s.ht}>Projects</h2>
        <div className={s.prjLine}>
            <div className={s.card}>
                <div className={s.container}>
                    <img src={"assets/kiki.png"} className={s.cardImg} />
                    <Texts>UrbanAnimals<br /><br /></Texts>
                    <p className={s.ct}>Developed a v1.0 of the website</p>
                </div>
            </div>

            <div className={s.card}>
                <div className={s.container}>
                    <img src={"assets/doggo.png"} className={s.cardImg} />
                    <Texts>WisdomDog<br /><br /></Texts>
                    <p className={s.ct}>Little WebGL project</p>
                </div>
            </div>

            <div className={s.card}>
                <div className={s.container}>
                    <img src={"assets/games.png"} className={s.cardImg} />
                    <Texts>Games prjs<br /><br /></Texts>
                    <p className={s.ct}>Some game projects I made</p>
                </div>
            </div>

            <div className={s.card}>
                <div className={s.container}>
                    <img src={"assets/nbook.png"} className={s.cardImg} />
                    <Texts>Art prjs<br /><br /></Texts>
                    <p className={s.ct}>Some art projects I made</p>
                </div>
            </div>

        </div></>
    );
};