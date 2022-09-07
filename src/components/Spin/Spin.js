import { useParallax } from "react-scroll-parallax";
import s from "./Spin.module.css";

export const Spin = () => {
    const parallax = useParallax<HTMLDivElement>({
      rotate: [0, 360],
    });
    return (
      <div ref={parallax.ref} className={s.spinner}>
        😵‍💫
        <div className="diamond">💎</div>
        <div className="clown">🤡</div>
        <div className="money">💰</div>
        <div className="hand">👌🏻</div>
      </div>
    );
  };