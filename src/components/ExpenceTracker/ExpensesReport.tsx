import { FC, useEffect, useState } from "react";
import { Nav, SelectPicker, Button, DateRangePicker } from "rsuite";
import {
  ALL_REPORTS,
  generateReportPDF,
  REPORTS_DIC,
} from "../../utils/helpers";
import { convert } from "../../utils/validations";
export const ExpenseReports: FC = () => {
  const [tabVal, setTabVal] = useState<any>(0);
  const [selectedValue, setSelectedValue] = useState<any>();
  const [selectedItem, setSelectedItem] = useState<any>({});
  const [dateTime, setDateTime] = useState<any>(null);
  const styles = { width: 200, display: "block" };
  const getDate = (val: any) => {
    const dateTime = convert(val);
    setDateTime(dateTime);
  };

  const generatePdf = (val: any) => {
    const { value, type } = selectedItem;
    window.open(
      `http://127.0.0.1:8008/render-pdf-view/?value=${value}&type=${type}&datetime=${dateTime}`,
      "_blank"
    );
    setDateTime(null);
  };
  return (
    <div style={{ display: "inline-block" }}>
      <div
        style={{
          width: "500px",
          alignItems: "center",
          backgroundColor: "white",
          float: "left",
          textAlign: "center",
          marginRight: "30rem",
          marginTop: "20px",
        }}
      >
        <div>
          <Nav>
            <Nav.Item
              onClick={() => {
                setTabVal(0);
              }}
            >
              Category Reports
            </Nav.Item>
            <Nav.Item
              onClick={() => {
                setTabVal(2);
              }}
            >
              Date Reports
            </Nav.Item>
            <Nav.Item
              onClick={() => {
                setTabVal(1);
              }}
            >
              Payment Reports
            </Nav.Item>
          </Nav>
        </div>
      </div>
      <div
        style={{ margin: "80px 0 0 0", width: "300px", marginLeft: "100px" }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {tabVal != 2 ? (
            <div>
              <SelectPicker
                data={ALL_REPORTS[tabVal]}
                searchable={false}
                onSelect={(val, item) => {
                  setSelectedItem(item);
                }}
                style={{ width: 224 }}
              />
            </div>
          ) : (
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
          )}
          <div>
            <Button color="cyan" appearance="primary" onClick={generatePdf}>
              Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
