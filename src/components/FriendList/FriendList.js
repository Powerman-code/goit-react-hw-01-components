import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from '../FriendList/FriendList.module.css';

function FriendList({ friends }) {
  // if (friends.length === 0) {
  //   console.log(friends.length);
  //   return null
  // };
  // console.log(friends);

  return (
    <ul className={s.list}>
      {friends.map(FriendListItem)}
      {/* {friends.map(friend => (
        <FriendListItem
          {...friend}
          // id={friend.id}
          // avatar={friend.avatar}
          // name={friend.name}
          // isOnline={friend.isOnline}
        />
      ))} */}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
