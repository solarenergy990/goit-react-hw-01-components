import FriendListItem from "./FriendListItem/FriendListItem";
import s from "./FriendList.module.css";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => {
        const { avatar, name, isOnline } = friend;

        return (
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
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
