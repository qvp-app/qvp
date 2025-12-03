import styles from "./QvbTable.module.scss";
import { Table, Card, Input, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useWindowSize } from "../hooks/useWindowSize";

export default function QvbTable({ rows, columns, updateCell, deleteRow, handleWordChange }) {
  const width = useWindowSize();
  const monetagLink = "https://otieu.com/4/10271133";
  const handleDeleteAndAd = (index) => {
    deleteRow(index); 
    window.open(monetagLink, "_blank"); 
  };

  if (width < 768) {
    return (
      <div className={styles.mobileWrapper}>
        {rows.map((row, index) => (
          <Card key={index} className={styles.mobileCard}>
            <div className={styles.mobileField}>
              <label>Word</label>
              <Input
                value={row.col1}
                onChange={(e) => handleWordChange(index, e.target.value)}
              />
            </div>

            <div className={styles.mobileField}>
              <label>Meaning</label>
              <Input
                value={row.col2}
                onChange={(e) => updateCell(index, "col2", e.target.value)}
              />
            </div>

            <Button
              danger
              type="primary"
              icon={<DeleteOutlined />}
              onClick={() => handleDeleteAndAd(index)}
              
            >
              Delete
            </Button>
          </Card>
        ))}
      </div>
    );
  }


  return (
    <Card className={styles.tableWrapper}>
      <Table
        dataSource={rows}
        columns={columns}
        pagination={false}
        rowKey={(_, index) => index}
        scroll={{ x: "100%" }}
      />
    </Card>
  );
}
