import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';

import FriendListItem from './FriendsListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends &&
        typeof friends === 'object' &&
        friends.map(el => (
          <FriendListItem
            key={el.id}
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};

export default FriendList;
