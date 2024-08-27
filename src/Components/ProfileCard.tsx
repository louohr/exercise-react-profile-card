// import { useState } from "react";
// 1. Static Profile card
/* export default function ProfileCard() {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBcOmsX1ViKRuDMT0EukF58Q_DSZbwGy8RA&s"
        alt="sailor-moon profile-image"
      />
      <div>
        Name: Usagi Tsukino <br />
        Title: Sailor Moon
      </div>
      <button>Click here to know more!</button>
    </div>
  );
}
 */

// 2. Dynamic Profile card using state
/* export default function ProfileCard() {
  const [name, setName] = useState("Usagi Tsukino");
  const [title, setTitle] = useState("Sailor Moon");

  // Change the title when button is clicked
  const handleChangeTitle = () => {
    setTitle("Senior Ninja");
  };

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBcOmsX1ViKRuDMT0EukF58Q_DSZbwGy8RA&s"
        alt="sailor-moon profile-image"
      />
      <h2>{name}</h2>
      <p>{title}</p>
      <button onClick={handleChangeTitle}>Change Title</button>
      <button>Click here to know more!</button>
    </div>
  );
} */

// 3. Dynamic Profile card using props

/* type ProfileCardProps = {
  person: {
    name: string;
    title: string;
  };
};

export default function ({ person }: ProfileCardProps) {
  const { name, title } = person;

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBcOmsX1ViKRuDMT0EukF58Q_DSZbwGy8RA&s"
        alt="sailor-moon profile-image"
      />
      <div>
        {name}
        {title}
      </div>
      <button>Click here to know more!</button>
    </div>
  );
} */

// 4. Dynamic Profile card using deconstructed props
/* const ProfileCard = ({ name, title }: { name: string; title: string }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <h2>{title}</h2>
    </div>
  );
};

export default ProfileCard; */
