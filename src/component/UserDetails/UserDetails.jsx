import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h2>This is my user details section</h2>
      <h3>Name: {name}</h3>
      <p>{website}</p>
    </div>
  );
};

export default UserDetails;
