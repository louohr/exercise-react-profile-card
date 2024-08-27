// 5. Multilevel props in nested components
import Parent from "./Parent";

const Grandparent = () => {
  const message = "Hej barnbarnet!";

  return (
    <div>
      <Parent message={message} />
    </div>
  );
};

export default Grandparent;
