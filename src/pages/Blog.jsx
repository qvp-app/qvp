import { Card, Typography } from "antd";
import { Link } from "react-router-dom";
import { posts } from "../blog/data/posts";
import Navbar from "../components/Navbar";

const { Title } = Typography;

export default function Blog() {
  return (
    <div style={{ padding: 40, maxWidth: 800, margin: "auto" }}>
      <Navbar />
      <Title level={2}>Blog</Title>

      {posts.map((post) => (
        <Card key={post.slug} style={{ marginBottom: 20 }}>
          <Link to={`/blog/${post.slug}`}>
            <h3>{post.title}</h3>
          </Link>
        </Card>
      ))}
    </div>
  );
}
