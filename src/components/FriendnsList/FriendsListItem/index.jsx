import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  const isOnlineStyles = isOnline
    ? styles['status--online']
    : styles['status--offline'];

  return (
    <li className={styles.item}>
      <span className={`${styles.status} ${isOnlineStyles}`}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
