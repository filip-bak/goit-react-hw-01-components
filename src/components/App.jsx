// COMPONENTS
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendnsList';
import TransactionHistory from './TransactionHistory';

// DATA
import user from '../data/user';
import stats from '../data/statistics';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
// import transactions2 from '../data/transactions2.json';

export const App = () => {
  return (
    <div className="wrapper">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
