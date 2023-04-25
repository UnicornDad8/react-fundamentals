import categories from "../../categories";
import style from "./ExpenseFilter.module.css";

interface ExpenseFilterProp {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProp) => {
  return (
    <div className="margin-vertical">
      <select
        id={style["parent_selector"]}
        className={style["event-type-select"]}
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
