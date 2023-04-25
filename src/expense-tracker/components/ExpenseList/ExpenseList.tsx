import style from "./ExpenseList.module.css";

interface ExpenseProp {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface ExpenseListProps {
  expenses: ExpenseProp[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  if (expenses.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <th className={style["description-width"]}>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td className={style["description-width"]}>
              {expense.description}
            </td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td className="center-btn">
              <button
                className={`${style["btn"]} ${style["btn-outline-danger"]}`}
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className={style["description-width"]}>Total</td>
          <td>
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
