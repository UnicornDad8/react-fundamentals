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
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
