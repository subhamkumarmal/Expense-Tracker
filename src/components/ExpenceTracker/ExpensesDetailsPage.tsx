import { FC, memo } from "react";
import { Table } from "rsuite";

interface Props {
  selectedDetails: any;
}

export const ExpensesDetailsPage: FC<Props> = memo(
  ({ selectedDetails }: Props) => {
    return (
      <div style={{ width: "1000px", marginRight: "100px" }}>
        <Table
          height={400}
          data={selectedDetails}
          onRowClick={(rowData) => {
            console.log(rowData);
          }}
        >
          <Table.Column width={200} align="center" fixed>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.Cell dataKey="amount" />
          </Table.Column>

          <Table.Column width={200}>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.Cell dataKey="category" />
          </Table.Column>

          <Table.Column width={200}>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.Cell dataKey="description" />
          </Table.Column>

          <Table.Column width={200}>
            <Table.HeaderCell>Payment Type</Table.HeaderCell>
            <Table.Cell dataKey="paymentType" />
          </Table.Column>

          <Table.Column width={200}>
            <Table.HeaderCell>Create Date</Table.HeaderCell>
            <Table.Cell dataKey="create_date" />
          </Table.Column>
        </Table>
      </div>
    );
  }
);
