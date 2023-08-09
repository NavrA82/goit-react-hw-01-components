import PropTypes from 'prop-types';

import {
  StatsList,
  StatsListItem,
  StatsListItemViews,
  UserStats,
  UserNameStats,
} from './ProfileStats.Styled';

export const Status = ({ stats: { followers, views, likes } }) => {
  return (
    <StatsList className="stats">
      <StatsListItem key={followers}>
        <UserNameStats className="label">Followers</UserNameStats>
        <UserStats className="quantity">{followers}</UserStats>
      </StatsListItem>
      <StatsListItemViews key={views}>
        <UserNameStats className="label">Views</UserNameStats>
        <UserStats className="quantity">{views}</UserStats>
      </StatsListItemViews>
      <StatsListItem key={likes}>
        <UserNameStats className="label">Likes</UserNameStats>
        <UserStats className="quantity">{likes}</UserStats>
      </StatsListItem>
    </StatsList>
  );
};
Status.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
