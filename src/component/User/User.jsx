import { useLoaderData } from "react-router-dom";
import UseUser from "../UseUser/UseUser";
import "./user.css";

const User = () => {
  const users2 = useLoaderData();
  console.log(users2);
  return (
    <div>
      <h1>Our Users:{users2.length}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab
        eligendi nihil numquam quidem harum incidunt quo, quia modi pariatur
        cupiditate veniam? Facilis impedit corrupti non ipsam dicta eius
        pariatur?
      </p>
      <div className="users">
        {users2.map((user) => (
          <UseUser key={user.id} user01={user}></UseUser>
        ))}
      </div>
    </div>
  );
};

export default User;
