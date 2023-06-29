import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendnsList';

import user from '../data/user';
import statsData from '../data/statistics';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friends} />
    </div>
  );
};
