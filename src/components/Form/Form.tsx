import { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import style from "./Form.module.css";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "Age must be at least 18" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
        {errors.name && (
          <p className={style["text-error"]}>{errors.name.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="age" className={style["form-label"]}>
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type="number"
          className={style["form-control"]}
          id="age"
        />
        {errors.age && (
          <p className={style["text-error"]}>{errors.age.message}</p>
        )}
      </div>
      <button
        disabled={!isValid}
        type="submit"
        className={
          isValid
            ? `${style["btn"]} ${style["btn-primary"]}`
            : `${style["btn"]} ${style["btn-primary"]} ${style["btn-disabled"]}`
        }
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
