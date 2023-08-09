import PropTypes from 'prop-types';

import { Description } from '../ProfileDescription/ProfileDescription';
import { Status } from '../ProfileStats/ProfileStats';
import { WrapperCard } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <WrapperCard>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Status stats={stats} />
    </WrapperCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
