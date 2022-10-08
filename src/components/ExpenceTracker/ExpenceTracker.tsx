import { FC, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ExpenseNavBar } from "./ExpenseNavBar";
import { DashBoardCard } from "./DashBoardCard";
import { Expense } from "./Expense";
import { ExpenseReports } from "./ExpensesReport";

import "../../style/expense.style.css";

export const ExpenceTracker: FC = () => {
  return (
    <div className="expense-tracker">
      <div>
        <ExpenseNavBar />
      </div>
      <div>
        <Router>
          <Routes>
            <Route path="/dashboard" element={<DashBoardCard />} />
          </Routes>
          <Routes>
            <Route path="/expense" element={<Expense />} />
          </Routes>
          <Routes>
            <Route path="/report" element={<ExpenseReports />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};
