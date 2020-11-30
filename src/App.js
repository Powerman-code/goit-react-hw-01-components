// import Painting from './conponents/Painting'
// import PaintingList from "./conponents/PaintingList"
// import paintings from "./paintings.json"
// import Section from "./conponents/Section"
// import ColorPicker from "./conponents/ColorPicker/ColorPicker"
// import Alert from './conponents/Alert/Alert'
import SocialProfile from './components/SocialProfile/SocialProfile';
import user from './components/workMat/user.json';
import statisticalData from './components/workMat/statisticalData.json';
import Statistics from './components/Statistics/Statistics';
import friends from './components/workMat/friends.json';
import FriendsList from './components/FriendList/FriendList';
// import FriendsListItem from './components/FriendListItem/FriendListItem';
import transactions from './components/workMat/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// console.log(user);

export default function App() {
  return (
    <div>
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
