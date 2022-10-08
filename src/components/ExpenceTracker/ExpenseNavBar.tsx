import { FC } from "react";

export const ExpenseNavBar: FC = () => {
  return (
    <div className="expense-nav-bar">
      <div className="head-title">
        <h3>Expense</h3>
      </div>
      <div>
        <li className="expense-items">
          <a className="nav-link" href="/dashboard">
            Dashboard
          </a>
        </li>
      </div>
      <hr />
      <div className="expense-items">
        <h4>EXPENSES</h4>
        <li className="nav-item active">
          <a className="nav-link" href="/expense">
            Expense
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/dashboard">
            Category
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/report">
            Report
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/dashboard">
            Summary
          </a>
        </li>
      </div>
    </div>
  );
};
