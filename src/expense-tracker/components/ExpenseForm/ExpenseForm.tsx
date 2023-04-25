import { categories } from "../../../App";
import style from "./ExpenseForm.module.css";

const ExpenseForm = () => {
  return (
    <form className={style["expense-form"]}>
      <div className={style["mb-3"]}>
        <label htmlFor="description" className={style["form-label"]}>
          Description
        </label>
        <input
          id="description"
          type="text"
          className={style["form-control"]}
        ></input>
      </div>
      <div className={style["mb-3"]}>
        <label htmlFor="amount" className={style["form-label"]}>
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className={style["form-control"]}
        ></input>
      </div>
      <div className={style["mb-3"]}>
        <label htmlFor="category" className={style["form-label"]}>
          Category
        </label>
        <select id="category" className={style["category"]}>
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className={`${style["btn"]} ${style["btn-primary"]}`}>
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
