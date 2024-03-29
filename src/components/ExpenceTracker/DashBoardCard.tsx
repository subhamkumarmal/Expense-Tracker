import { FC, useEffect, useState } from "react";
import { dashBoardCards, fetchDashBoardDetails } from "../../utils/helpers";

export const DashBoardCard: FC = () => {
  const [dashBoardExpenses, setDashBoardExpenses] = useState<any[]>([]);
  useEffect(() => {
    fetchInitialDashDetails();
  }, []);

  const fetchInitialDashDetails = async () => {
    const res = await fetchDashBoardDetails();
    if (res) {
      setDashBoardExpenses(res?.dashBoardData);
    }
  };
  return (
    <div>
      <div className="dash-board-head">
        <h3>DashBoard Details</h3>
      </div>
      <div className="desh-board-card">
        {dashBoardExpenses &&
          dashBoardExpenses.map((item, key) => {
            return (
              <div className="card">
                <h6 className="spent-name">
                  {dashBoardCards[key].name}
                  <br />
                  <span>Rs {item.totalAmout}</span>
                </h6>
                <p className="no-of-expense">
                  {dashBoardCards[key].expense}
                  <span className="item-no">{item.onOfExpense}</span>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
