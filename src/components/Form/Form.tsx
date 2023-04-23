import { FormEvent, useRef } from "react";
import style from "./Form.module.css";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

    console.log(person);
  };

  return (
    <form className={style["form"]} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className={style["form-label"]}>
          Name
        </label>
        <input
          ref={nameRef}
          type="text"
          className={style["form-control"]}
          id="name"
        />
      </div>
      <div>
        <label htmlFor="age" className={style["form-label"]}>
          Age
        </label>
        <input
          ref={ageRef}
          type="number"
          className={style["form-control"]}
          id="age"
        />
      </div>
      <button
        type="submit"
        className={`${style["btn"]} ${style["btn-primary"]}`}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
