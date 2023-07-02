import PropTypes from 'prop-types';
import './FriendsListItem.css';

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  const isOnlineStyles = isOnline
    ? 'frineds-list__status--online'
    : 'frineds-list__status--offline';

  return (
    <li className={'frineds-list__item'}>
      <span className={`frineds-list__status ${isOnlineStyles}`}></span>
      <img className="frineds-list__avatar" src={avatar} alt="User avatar" />
      <p className="frineds-list__name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
