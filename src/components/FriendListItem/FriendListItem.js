import PropTypes from 'prop-types';
import s from '../FriendListItem/FriendListItem.module.css';

function FriendListItem({ id, avatar, name, isOnline }) {
  // console.log(typeof friends)
  // id, avatar, name, isOnline
  // console.log(friends)
  // console.log(id, avatar, name, isOnline);
  return (
    <li key={id} className={s.item}>
      <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
