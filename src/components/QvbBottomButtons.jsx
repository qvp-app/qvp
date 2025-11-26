import { Button, Space } from "antd";
import { PlusOutlined, DownloadOutlined } from "@ant-design/icons";

const QvbBottomButtons = ({ rows, maxRows, addRow, exportDocx }) => {
  return (
    <Space style={{ marginTop: 20 }}>
      {rows.length < maxRows && (
        <Button type="primary" icon={<PlusOutlined />} onClick={addRow}>
          Add Row
        </Button>
      )}

      <Button
        type="default"
        icon={<DownloadOutlined />}
        onClick={exportDocx}
      >
        Download DOCX
      </Button>
    </Space>
  );
};

export default QvbBottomButtons;
