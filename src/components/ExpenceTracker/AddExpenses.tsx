import { FC, useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { ALL_REPORTS, updateExpence } from "../../utils/helpers";
import {
  Modal,
  Button,
  Placeholder,
  Input,
  InputGroup,
  Grid,
  Row,
  Col,
  DatePicker,
  SelectPicker,
} from "rsuite";
import { validatePayloads } from "../../utils/validations";

interface Props {
  setFlag: Function;
}

export const AddExpenses: FC<Props> = ({ setFlag }: Props) => {
  const [open, setOpen] = useState<boolean>(true);
  const [dateTime, setDateTime] = useState<any>();
  const handleOpen = () => setOpen(true);
  const [data, setDatas] = useState<any>({
    amount: 0,
    category: "",
    description: "",
    paymentType: "",
  });
  const styles = {
    marginBottom: "10px",
  };
  const addExpenses = () => {
    const payloads = {
      data: data,
      createDate: dateTime,
    };
    if (validatePayloads(payloads)) {
      const res = updateExpence(payloads);
    }
    setOpen(false);
    setFlag(false);
  };
  const setValue = (val: any, name: any) => {
    setDatas((prev: any) => ({
      ...prev,
      [name]: val,
    }));
  };

  const dataFun = (val: any) => {
    setDateTime(val);
  };

  return (
    <div>
      <Modal open={open}>
        <Modal.Header>
          <Modal.Title>Add Your Expenses !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ paddingLeft: "15px" }}>
            <Grid fluid>
              <Row>
                <Col xs={24} sm={12} md={8}>
                  <Input
                    placeholder="Amount"
                    name="amount"
                    type="number"
                    style={styles}
                    onChange={(val) => {
                      setValue(val, "amount");
                    }}
                  />
                  <SelectPicker
                    data={ALL_REPORTS[0]}
                    placeholder="Select Category"
                    searchable={false}
                    onSelect={(val, item) => {
                      setValue(val, "category");
                    }}
                    style={{ width: 224 }}
                  />
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Input
                    size="md"
                    placeholder="Description"
                    name="description"
                    style={styles}
                    onChange={(val) => {
                      setValue(val, "description");
                    }}
                  />
                  <DatePicker
                    onChange={(val: any) => {
                      dataFun(val);
                    }}
                    style={styles}
                  />
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <SelectPicker
                    data={ALL_REPORTS[1]}
                    placeholder="Payment Method"
                    searchable={false}
                    onSelect={(val, item) => {
                      setValue(val, "paymentType");
                    }}
                    style={{ width: 224, marginBottom: 10 }}
                  />
                  {/* <Input size="md" placeholder="sdfs" style={styles} /> */}
                </Col>
              </Row>
            </Grid>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={addExpenses} appearance="primary">
            Add
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
              setFlag(false);
            }}
            appearance="subtle"
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
