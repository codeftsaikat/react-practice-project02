import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();
  const post = useLoaderData();
  const { title, body, id } = post;
  const goBackButtonHandler = () => {
    navigate(-1);
  };

  const { postId } = useParams();
  console.log(postId);

  return (
    <div>
      <h1>this is my post details section {id}</h1>
      <p>{title}</p>
      <p>{body}</p>
      <button onClick={goBackButtonHandler}>Go back!</button>
    </div>
  );
};

export default PostDetails;
