import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  if (typeof stats === 'undefined') stats = 0;
  const { followers = 0, views = 0, likes = 0 } = stats;

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        {avatar && (
          <img className={styles.avatar} src={avatar} alt="User avatar" />
        )}
        {username && <p className={styles.name}>{username}</p>}
        {tag && <p className={styles.tag}>@{tag}</p>}
        {location && <p className={styles.location}>{location}</p>}
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{getStatValue(followers)}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{getStatValue(views)}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{getStatValue(likes)}</span>
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
