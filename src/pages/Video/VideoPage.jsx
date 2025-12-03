import { useState } from "react";
import VideoInput from "../../components/VideoInput/VideoInput";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Navbar from "../../components/Navbar";

import QvbInputArea from "../../components/QvbInputArea";
import QvbTable from "../../components/QvbTable";
import QvbBottomButtons from "../../components/QvbBottomButtons";

import { translateWord } from "../../utils/translate";
import { exportDocx } from "../../utils/generateDocx";

import styles from "./VideoPage.module.scss";
import { Button, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default function VideoPage() {
  const [videoId, setVideoId] = useState(null);

  // QVB states
  const [rows, setRows] = useState([{ col1: "", col2: "" }]);
  const maxRows = 20;

  const updateCell = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const monetagLink = "https://otieu.com/4/10271133";
  const handleDeleteAndAd = (index) => {
    deleteRow(index);
    window.open(monetagLink, "_blank");
  };

  const deleteRow = (index) => {
    const updated = rows.filter((_, i) => i !== index);
    setRows(updated);
  };

  const addRow = () => {
    if (rows.length >= maxRows) return;
    setRows([...rows, { col1: "", col2: "" }]);
  };

  const handleWordChange = async (index, value) => {
    updateCell(index, "col1", value);

    if (value.trim()) {
      const translated = await translateWord(value, "en", "tr");
      updateCell(index, "col2", translated);
    } else {
      updateCell(index, "col2", "");
    }
  };

  const columns = [
    {
      title: "Word",
      dataIndex: "col1",
      render: (_, row, index) => (
        <Input
          value={row.col1}
          onChange={(e) => handleWordChange(index, e.target.value)}
        />
      ),
    },
    {
      title: "Meaning",
      dataIndex: "col2",
      render: (_, row, index) => (
        <Input
          value={row.col2}
          onChange={(e) => updateCell(index, "col2", e.target.value)}
        />
      ),
    },
    {
      title: "Delete",
      dataIndex: "delete",
      align: "center",
      width: 80,
      render: (_, __, index) => (
        <Button
          danger
          type="text"
          onClick={() => handleDeleteAndAd(index)}
          icon={<DeleteOutlined />}
        />
      ),
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <h2>YouTube Video Learning</h2>

      {/* Video URL Input */}
      <VideoInput onVideoIdChange={setVideoId} />

      {/* YouTube Player */}
      <VideoPlayer videoId={videoId} />

      {/* Translation Input */}
      <QvbInputArea
        translateWord={(word) => translateWord(word, "en", "tr")}
        onAddWord={(newRow) => setRows((prev) => [...prev, newRow])}
      />

      {/* Table */}
      <QvbTable
        rows={rows}
        updateCell={updateCell}
        deleteRow={deleteRow}
        handleWordChange={handleWordChange}
        columns={columns}
      />

      {/* Buttons */}
      <QvbBottomButtons
        addRow={addRow}
        rows={rows}
        maxRows={maxRows}
        exportDocx={() =>
          exportDocx(
            "Video Words",
            new Date().toISOString().split("T")[0],
            rows
          )
        }
      />
    </div>
  );
}
