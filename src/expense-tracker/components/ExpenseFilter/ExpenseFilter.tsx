import categories from "../../categories";
import { IoIosArrowDown } from "react-icons/io";
import style from "./ExpenseFilter.module.css";

interface ExpenseFilterProp {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProp) => {
  return (
    <div className={style["select-box"]}>
      <select
        id={style["parent_selector"]}
        className={style["event-type-select"]}
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">Categorías</option>
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
  );
};

export default ExpenseFilter;
