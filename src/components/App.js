import './App.css';
import userData from './Profile/user.json';
import statisticData from './Statistics/data.json';
import friendsData from './Friends/friends.json';
import transactionData from './Transactions/transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './Friends/FriendsList';
import TransactionHistory from './Transactions/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Profile
      username={userData.username}
      avatar={userData.avatar}
      stats={userData.stats}
      location={userData.location}
      tag={userData.tag}
      />
      <Statistics
      title="Upload stats"
      stats={statisticData}
      />
      <FriendsList
      avatar={friendsData.avatar}
      name={friendsData.name}
      isOnline={friendsData.isOnline}
      />
      <TransactionHistory 
      items={transactionData}
      />
    </div>
  );
}

export default App;
