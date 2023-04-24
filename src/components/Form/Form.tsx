import { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import style from "./Form.module.css";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form className={style["form"]} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className={style["form-label"]}>
          Name
        </label>
        <input
          {...register("name")}
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
          {...register("age")}
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
