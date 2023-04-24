import { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import style from "./Form.module.css";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  console.log(errors);

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form className={style["form"]} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className={style["form-label"]}>
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          className={style["form-control"]}
          id="name"
        />
        {errors.name?.type === "required" && (
          <p className={style["text-error"]}>The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className={style["text-error"]}>
            The name must be at least 3 characters
          </p>
        )}
      </div>
      <div>
        <label htmlFor="age" className={style["form-label"]}>
          Age
        </label>
        <input
          {...register("age", { required: true, minLength: 2 })}
          type="number"
          className={style["form-control"]}
          id="age"
        />
        {errors.age?.type === "required" && (
          <p className={style["text-error"]}>The age field is required</p>
        )}
        {errors.age?.type === "minLength" && (
          <p className={style["text-error"]}>
            The age must be at least 2 digits long
          </p>
        )}
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
