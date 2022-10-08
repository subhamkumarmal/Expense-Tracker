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
        <h3>Dash Board</h3>
      </div>
      <div className="desh-board-card">
        {dashBoardExpenses &&
          dashBoardExpenses.map((item, key) => {
            return (
              <div className="card">
                <h5>
                  {dashBoardCards[key].name}
                  <br />
                  <span>{item.totalAmout}</span>
                </h5>
                <p>
                  {dashBoardCards[key].expense}
                  {item.onOfExpense}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
