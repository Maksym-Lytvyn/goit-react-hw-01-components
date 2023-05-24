import friendsData from './friends.json';
import cssFriendsList from './FriendsList.module.css';

const FriendsList = ({avatar, name, isOnline}) => (
    <ul className={cssFriendsList.friendList}>
        {friendsData.map(friend => (
            <li key={friend.id} className={cssFriendsList.itemFriends}>
            {friend.isOnline === true ? (<span style={{backgroundColor: 'green', borderRadius: '30%', width: '10px', height: '10px'}}>sx</span>) : (<span style={{backgroundColor: 'red', borderRadius: '30%', width: '30px', height: '30px'}}>sx</span>)}
            
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
          </li>
        ))}
    </ul>
)

export default FriendsList;