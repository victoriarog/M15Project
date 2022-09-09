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
        <li>About Me</li>
        <Spacer style={{ display: "inline-block" }} size={32} />
        <li>Timeline</li>
        <Spacer style={{ display: "inline-block" }} size={32} />
        <li>Contact</li>
        <Spacer style={{ display: "inline-block" }} size={32} />
        <li href="https://youtu.be/dQw4w9WgXcQ">???????</li>
        <Spacer
          style={{ display: "inline-block" }}
          axis="horizontal"
          size={64}
        />
      </ul>
    </div>
  );
};
