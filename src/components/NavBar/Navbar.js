import s from "./Navbar.module.css";
import { Spacer } from "../Spacer";

export const Navbar = () => {
  return (
    <div className={s.nb}>
      <img src={"dog1.png"} />
      <ul className={s.navbar}>
        <Spacer
          style={{ display: "inline-block" }}
          axis="horizontal"
          size={64}
        />
        <li>thing 1</li>
        <Spacer style={{ display: "inline-block" }} size={32} />
        <li>thing 2</li>
        <Spacer style={{ display: "inline-block" }} size={32} />
        <li>thing 3</li>
        <Spacer style={{ display: "inline-block" }} size={32} />
        <li>thing 4</li>
        <Spacer
          style={{ display: "inline-block" }}
          axis="horizontal"
          size={64}
        />
      </ul>
    </div>
  );
};
