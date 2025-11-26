import { Button, Space } from "antd";
import { PlusOutlined, DownloadOutlined } from "@ant-design/icons";

const QvbBottomButtons = ({ rows, maxRows, addRow, exportDocx }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <Space>
        {rows.length < maxRows && (
          <Button type="primary" icon={<PlusOutlined />} onClick={addRow}>
            Add Row
          </Button>
        )}

        <Button type="default" icon={<DownloadOutlined />} onClick={exportDocx}>
          Download DOCX
        </Button>
      </Space>

      
      <div style={{ width: "100%", marginTop: 20 }}>
        <div
          id="ad-qvb-bottom"
          style={{
            width: "100%",
            height: 120,
            background: "#f1f1f1",
            borderRadius: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#888",
            fontSize: 14,
          }}
        >
          Advertisement
        </div>
      </div>
    </div>
  );
};

export default QvbBottomButtons;
