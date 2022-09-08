import  {Times}  from "./Times";
import "./Timeline.css";

export const Timeline = () => {
  return (
    <section className="container container-lines">
        <h2 className="ht">Timeline in short:</h2> <br/> <br/><br/><br/>
      <h3>
        How it started:
      </h3>
      <div className="line"></div>
      {Times.map((e) => (
        <div key={e.year}>
          <span>{e.year}: <br/><br/></span>
          <span>
            {e.title.cargo} at {e.title.name}
          </span>
          <div className="line"></div>
        </div>
      ))}
    </section>
  );
};