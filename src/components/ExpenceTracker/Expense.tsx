import { FC, useEffect, useState } from "react";
import { DatePicker, DateRangePicker, SelectPicker } from "rsuite";
import { expensesDetails, REPORTS_DIC } from "../../utils/helpers";
import { AddExpenses } from "./AddExpenses";
import moment from "moment";
import { stringify } from "querystring";
import { convert } from "../../utils/validations";
import { ExpensesDetailsPage } from "./ExpensesDetailsPage";

export const Expense: FC = () => {
  const [flag, setFlag] = useState<boolean>(false);
  const [dateTime, setDateTime] = useState<any>({
    startDate: "",
    endDate: "",
  });
  const [selectedDetails, setSelectedDetails] = useState<any[]>([]);
  const [selecteReport, setSelectedReport] = useState<String>("");
  const styles = { width: 200, display: "block" };
  useEffect(() => {
    getInitialDetails();
  }, [dateTime]);

  const getInitialDetails = async () => {
    const res = await expensesDetails(dateTime);
    if (res?.expensesListObj) {
      setSelectedDetails(res?.expensesListObj);
    }
  };

  const setFlagVal = () => {
    setFlag(!flag);
  };

  const getDate = (val: any) => {
    const dateTime = convert(val);
    setDateTime(dateTime);
  };
  return (
    <div>
      {!flag ? (
        <div>
          <div style={{ display: "inline-block", width: "90%" }}>
            <div className="create-report-div">
              <div className="create-expense-btn">
                <div>
                  <button
                    className="btn-expense-create"
                    onClick={() => {
                      setFlag(!flag);
                    }}
                  >
                    Create New
                  </button>
                </div>
                <div>
                  <DateRangePicker
                    size="sm"
                    style={styles}
                    format="yyyy-MM-dd HH:mm:ss"
                    onChange={(val: any) => {
                      getDate(val);
                    }}
                  />
                </div>
              </div>
              <div className="reports">
                <SelectPicker
                  data={REPORTS_DIC}
                  searchable={false}
                  style={{ width: 224 }}
                  onChange={(val) => {}}
                />
              </div>
            </div>
          </div>
          <div>
            {selectedDetails ? (
              <ExpensesDetailsPage selectedDetails={selectedDetails} />
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div>
          <AddExpenses setFlag={setFlagVal} />
        </div>
      )}
    </div>
  );
};
