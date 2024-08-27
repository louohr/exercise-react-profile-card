import "./App.css";
import Grandparent from "./Components/Grandparent";
/* import ProfileCard from "./Components/ProfileCard"; */

function App() {
  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <Grandparent />
      </div>
      {/* <Parent /> */}
      {/* <ProfileCard person={{ name: "Usagi Tsukino", title: "Sailor Moon" }} /> */}
    </div>
  );
}

export default App;
