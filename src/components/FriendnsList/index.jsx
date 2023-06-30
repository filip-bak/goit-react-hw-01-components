import PropTypes from 'prop-types';
import './FriendsList.css';

const FriendList = ({ friends }) => {
  return (
    <ul className="friends-list list">
      {friends.map(el => (
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

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <li className="frineds-list__item">
      <span
        className={
          isOnline ? 'frineds-list__status' : 'frineds-list__status-off'
        }
      ></span>
      <img className="frineds-list__avatar" src={avatar} alt="User avatar" />
      <p className="frineds-list__name">{name}</p>
    </li>
  );
};

FriendList.prototype = {
  friends: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};

FriendListItem.prototype = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;
