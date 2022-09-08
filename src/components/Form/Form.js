import s from "./Form.module.css";
import { useState } from 'react';
import { Heading2 } from "../Text";

export const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textarea, setTextarea] = useState("");
    const handleChange = (event) => {
        setTextarea(event.target.value)
      }
    return (
        <div>
        <h2 className={s.ht}>Talk to the form:</h2> <br/> <br/>
        <form>
        <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label> <br/> <br/>
      <label>Your email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label> <br/> <br/>
      <label>Your message: &nbsp;&nbsp;&nbsp;&nbsp;
      <textarea value={textarea} onChange={handleChange} placeholder={"Words go here ;v"}/>
      </label>
    </form>
        </div>
    );
};