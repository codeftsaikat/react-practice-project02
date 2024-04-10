import { Link } from "react-router-dom";

const UseUser = ({ user01 }) => {
  const { name, id, email, phone } = user01;
  const UserStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "20px",
    marginBottom: "10px",
  };
  return (
    <div style={UserStyle}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default UseUser;
