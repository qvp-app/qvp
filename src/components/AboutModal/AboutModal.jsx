import { Modal } from "antd";

export default function AboutModal({ open, onClose }) {
  return (
    <Modal title="About QVP Tool" open={open} onCancel={onClose} footer={null}>
      {/* Creator info – moved to top */}
      <h3>About the Creator</h3>
      <p>
        QVP Tool is created by <b>Ayxan Həsənzadə</b> — a frontend developer
        from Azerbaijan who focuses on building clean, practical and
        learner-friendly web tools. Ayxan enjoys creating products that solve
        real problems, especially in language learning and productivity.
        <p>
          <a href="https://github.com/AyxanHesenzade" target="_blank">
            GitHub
          </a>
          <br />
          <a href="https://instagram.com/hasa4zada" target="_blank">
            Instagram
          </a>
          <br />
          <a href="https://t.me/FrontEndAykhan" target="_blank">
            Telegram
          </a>
        </p>
      </p>

      <h3>What is QVP Tool?</h3>
      <p>
        QVP Tool is a simple and fast vocabulary assistant designed to make
        learning new words easier and more organized. Type a word, get an
        instant translation, save it to your list, edit it anytime, and export
        everything as a clean DOCX file.
      </p>

      <h3>How It Works</h3>
      <p>
        • Enter any word — QVP translates it automatically.
        <br />
        • Add the word to your table — your dictionary grows.
        <br />
        • Edit or delete saved words anytime.
        <br />• Export your vocabulary to DOCX with one click.
      </p>

      <h3>🔥 New Feature: Video Learning Mode</h3>
      <p>
        QVP now includes a video-based learning system. Paste any YouTube link,
        watch the video directly inside the page and click CC to see subtitles.
        When you see a new word in the video, simply type it into QVP Input and
        instantly get its translation — the same way as in the main tool.
        <br />
        <br />
        The goal is to learn vocabulary directly from real conversations,
        movies, podcasts or any video content you enjoy.
      </p>

      <h3>Blog</h3>
      <p>
        Inside the QVP Blog you will find beginner-friendly grammar
        explanations, vocabulary lists, pronunciation guides and practical tips
        to improve your English step-by-step. New posts are added regularly.
      </p>
    </Modal>
  );
}
