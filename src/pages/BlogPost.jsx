import { useParams } from "react-router-dom";
import { posts } from "../blog/data/posts";
import { Typography } from "antd";
import Navbar from "../components/Navbar";

const { Title } = Typography;

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <h2>Post not found.</h2>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 20,
        padding: "20px 10px",
      }}
    >
      {/* LEFT SIDEBAR */}
      <div
        style={{
          width: 160,
          display: window.innerWidth > 1024 ? "block" : "none",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "#f1f1f1",
            borderRadius: 6,
          }}
        >
          Advertisement
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 900, width: "100%" }}>
        <Navbar />

        <Title level={2}>{post.title}</Title>

        {/* TOP AD */}
        <div
          style={{
            width: "100%",
            height: 120,
            background: "#f1f1f1",
            borderRadius: 6,
            marginBottom: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#777",
          }}
        >
          Advertisement
        </div>

        {/* BLOG CONTENT */}
        <p style={{ lineHeight: "1.7", whiteSpace: "pre-line" }}>
          {post.content}
        </p>

        {/* BOTTOM AD */}
        <div
          style={{
            width: "100%",
            height: 120,
            background: "#f1f1f1",
            borderRadius: 6,
            marginTop: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#777",
          }}
        >
          Advertisement
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div
        style={{
          width: 160,
          display: window.innerWidth > 1024 ? "block" : "none",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "#f1f1f1",
            borderRadius: 6,
          }}
        >
          Advertisement
        </div>
      </div>
    </div>
  );
}
