import { useState } from "react";
import ExpenseList from "../ExpenseList";
import ExpenseFilter from "../ExpenseFilter";
import ExpenseForm from "../ExpenseForm";

function ExpenseTracker() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Apple", amount: 7, category: "Groceries" },
    { id: 2, description: "Chair", amount: 30, category: "Utilities" },
    { id: 3, description: "Movies", amount: 20, category: "Entertainment" },
    { id: 4, description: "Cheese", amount: 10, category: "Groceries" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div style={{ marginBottom: 50 }}>
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default ExpenseTracker;
