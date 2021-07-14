import s from "../FriendList/FriendList.module.css";
import PropTypes from "prop-types";

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.container}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
