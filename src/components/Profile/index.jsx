import PropTypes from 'prop-types';
import './Profile.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="profile__description">
        <img className="profile__avatar" src={avatar} alt="User avatar" />
        <p className="profile__name">{username}</p>
        <p className="profile__tag">{tag}</p>
        <p className="profile__location">{location}</p>
      </div>

      <ul className="profile__stats list">
        <li>
          <span className="profile__label">Followers</span>
          <span className="profile__quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="profile__label">Views</span>
          <span className="profile__quantity">{stats.views}</span>
        </li>
        <li>
          <span className="profile__label">Likes</span>
          <span className="profile__quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.prototype = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    username: PropTypes.number,
  }),
};

export default Profile;
