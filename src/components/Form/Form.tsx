import { FormEvent, useState } from "react";
import style from "./Form.module.css";

const Form = () => {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form className={style["form"]} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className={style["form-label"]}>
          Name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
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
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          value={person.age}
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
