/* import ProfileCard from "./ProfileCard";

// # 3
const Parent = () => {
  const user = {
    name: "Nicodemus Naveltuta",
    age: "47",
    title: "vice ninja",
    email: "nicokick@theoffice.net",
  };

  return (
    <div className="parent">
      <ProfileCard name={user.name} title={user.title} />
    </div>
  );
};

export default Parent; */
import Child from "./Child";

const Parent = ({ message }: { message: string }) => {
  return (
    <div>
      <Child message={message} />
    </div>
  );
};

export default Parent;
