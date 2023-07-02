import PropTypes from 'prop-types';
import './Profile.css';
const Profile = ({ username, tag, location, avatar, stats }) => {
  if (typeof stats === 'undefined') stats = 0;
  const isStats = typeof stats === 'undefined';
  const { followers = 0, views = 0, likes = 0 } = stats;

  return (
    <div className="profile">
      <div className="profile__description">
        {avatar && (
          <img className="profile__avatar" src={avatar} alt="User avatar" />
        )}
        {username && <p className="profile__name">{username}</p>}
        {tag && <p className="profile__tag">@{tag}</p>}
        {location && <p className="profile__location">{location}</p>}
      </div>

      <ul className="profile__stats">
        <li>
          <span className="profile__label">Followers</span>
          <span className="profile__quantity">{getStatValue(followers)}</span>
        </li>
        <li>
          <span className="profile__label">Views</span>
          <span className="profile__quantity">{getStatValue(views)}</span>
        </li>
        <li>
          <span className="profile__label">Likes</span>
          <span className="profile__quantity">{getStatValue(likes)}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    username: PropTypes.number,
  }),
};
function getStatValue(stat) {
  return stat.toLocaleString('en');
}

export default Profile;
