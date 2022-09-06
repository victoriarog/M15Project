import s from "./AspectRatio.module.css";

export const Container = ({ style = {}, ...props }) => {
  return <div className={s.aspectRatio} {...props} />;
};
