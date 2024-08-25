import "./Profile.css";

function Profile({ name }) {
  const IconText = (
    name.split(" ")[0][0] + name.split(" ")[1][0]
  ).toUpperCase();
  return (
    <div className="profile">
      <span className="profile-text">{IconText}</span>
    </div>
  );
}

export default Profile;
