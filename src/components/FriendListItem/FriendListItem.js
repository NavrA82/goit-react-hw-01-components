import PropTypes from 'prop-types';

import {
  ListItemOnLine,
  ListItemName,
  ListItemAvatar,
  ListItem,
} from './FriendListItem.styled';

export const FriendListItem = ({ status, avatar, name }) => {
  return (
    <ListItem>
      <ListItemOnLine
        status={status.toString()}
        className="status"
      ></ListItemOnLine>
      <ListItemAvatar src={avatar} alt={name} className="avatar" />
      <ListItemName className="name">{name}</ListItemName>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
