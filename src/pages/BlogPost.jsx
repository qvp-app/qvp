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
    <div style={{ padding: 40, maxWidth: 800, margin: "auto" }}>
        <Navbar />
      <Title level={2}>{post.title}</Title>
      <p style={{ lineHeight: "1.7", whiteSpace: "pre-line" }}>{post.content}</p>
    </div>
  );
}
