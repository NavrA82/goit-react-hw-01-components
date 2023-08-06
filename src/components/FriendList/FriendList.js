import {
  List,
  ListItem,
  ListItemOnLine,
  ListItemName,
  ListItemAvatar,
} from './FriendList.Styled';

export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(friend => {
        return (
          <ListItem key={friend.id} className="item">
            <ListItemOnLine
              $online={friend.isOnline}
              className="status"
            ></ListItemOnLine>
            <ListItemAvatar
              src={friend.avatar}
              alt={friend.name}
              className="avatar"
            />
            <ListItemName className="name">{friend.name}</ListItemName>
          </ListItem>
        );
      })}
    </List>
  );
};
