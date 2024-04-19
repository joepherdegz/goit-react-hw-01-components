
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendListItem}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img src={avatar} alt="User avatrar" width="48" className={css.avatar} />
      <p className={css.name}>{name}</p>
    </li>
  );
};