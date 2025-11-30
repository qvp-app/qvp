import { useState } from "react";
import { Input } from "antd";
import styles from "./VideoInput.module.scss";

export default function VideoInput({ onVideoIdChange }) {
  const [url, setUrl] = useState("");

  const extractVideoId = (link) => {
    try {
      // 1) https://www.youtube.com/watch?v=ID
      const vParam = new URL(link).searchParams.get("v");
      if (vParam) return vParam;

      // 2) https://youtu.be/ID
      if (link.includes("youtu.be/")) {
        return link.split("youtu.be/")[1].split("?")[0];
      }

      // 3) https://www.youtube.com/embed/ID
      if (link.includes("/embed/")) {
        return link.split("/embed/")[1].split("?")[0];
      }

      return null;
    } catch (error) {
      return null;
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setUrl(val);

    const id = extractVideoId(val);
    onVideoIdChange(id); // send videoId upward
  };

  return (
    <div className={styles.inputWrapper}>
      <Input
        placeholder="Paste YouTube link..."
        value={url}
        onChange={handleChange}
        size="large"
      />
    </div>
  );
}
