import { Table, Input, Card } from "antd";

const QvbTable = ({ rows, columns }) => {
  return (
    <Card style={{ padding: 20 }}>
      <Table
        dataSource={rows}
        columns={columns}
        pagination={false}
        rowKey={(_, index) => index}
      />
    </Card>
  );
};

export default QvbTable;
