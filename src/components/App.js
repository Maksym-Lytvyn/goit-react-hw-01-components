import './App.css';
import userData from './user.json';
import statisticData from './data.json';
import friendsData from './friends.json';
import transactionData from './transactions.json';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendsList from './FriendsList';
import TransactionHistory from './TransactionHistory';

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
      title={'Upload stats'}
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
