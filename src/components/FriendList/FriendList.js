import Friend from "../Friend/Friend";
import s from "./FriendList.module.css";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => {
        const { avatar, name, isOnline, id } = friend;

        return (
          <li className={s.item} key={id}>
            <Friend avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
