import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../../categories";
import { IoIosArrowDown } from "react-icons/io";
import style from "./ExpenseForm.module.css";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "La descripción deberia tener al menos tres letras" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "El precio es obligatorio" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Elige una categoría para el producto" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      className={style["expense-form"]}
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className={style["mb-3"]}>
        <label htmlFor="description" className={style["form-label"]}>
          Descripción
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className={style["form-control"]}
        ></input>
        {errors.description && (
          <p className={style["text-error"]}>{errors.description.message}</p>
        )}
      </div>
      <div className={style["mb-3"]}>
        <label htmlFor="amount" className={style["form-label"]}>
          Precio
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className={style["form-control"]}
        ></input>
        {errors.amount && (
          <p className={style["text-error"]}>{errors.amount.message}</p>
        )}
      </div>
      <div className={style["mb-3"]}>
        <label htmlFor="category" className={style["form-label"]}>
          Categoría
        </label>
        <div className={style["select-box"]}>
          <select
            className={style["category"]}
            {...register("category")}
            id="category"
          >
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className={style["arrow-box"]}>
            <IoIosArrowDown size={28} color="#888" />
          </div>
        </div>
        {errors.category && (
          <p className={style["text-error"]}>{errors.category.message}</p>
        )}
      </div>
      <button className={`${style["btn"]} ${style["btn-primary"]}`}>
        Enviar
      </button>
    </form>
  );
};

export default ExpenseForm;
