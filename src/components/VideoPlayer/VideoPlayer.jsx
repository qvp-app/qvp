import styles from "./VideoPlayer.module.scss";

export default function VideoPlayer({ videoId }) {
  if (!videoId) {
    return <div className={styles.empty}>Enter a YouTube link to load video.</div>;
  }

  return (
    <div className={styles.videoWrapper}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    </div>
  );
}
