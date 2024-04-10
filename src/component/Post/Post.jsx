import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { title, body, id } = post;
  const navigate = useNavigate();
  const UserStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "20px",
    marginBottom: "10px",
  };
  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };
 
  return (
    <div style={UserStyle}>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`/post/${id}`}>Show Post</Link>
      <button onClick={handleShowDetails}>Click to show details</button>
    </div>
  );
};

export default Post;
