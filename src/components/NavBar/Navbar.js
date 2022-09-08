import s from "./Navbar.module.css";
import { Spacer } from "../Spacer";

export const Navbar = () => {
  return (
    <div className={s.nb}>
      {/* <img src={"assets/bmb.png"} className={s.bookmark} />
      <img src={"assets/line2.svg"} className={s.line} /> */}
      <ul className={s.navbar}>
        <Spacer
          style={{ display: "inline-block" }}
          axis="horizontal"
          size={64}
        />
        <li>Projects</li>
        <Spacer style={{ display: "inline-block" }} size={32} />
        <li>About Me</li>
        <Spacer style={{ display: "inline-block" }} size={32} />
        <li>Contact</li>
        <Spacer style={{ display: "inline-block" }} size={32} />
        <li>???????</li>
        <Spacer
          style={{ display: "inline-block" }}
          axis="horizontal"
          size={64}
        />
      </ul>
      {/* <h1 className={s.letters}>Welcome to the dangerzone</h1> */}
    </div>
  );
};
