import { Followers } from './Followers/Followers';
import { Likes } from './LikeStats/Likes';
import { Views } from './ViewsStats/Views';
import { StatsList, StatsListItem, StatsListItemViews } from './Stats.Styled';

export const Status = ({
  profileCard: {
    card: {
      stats: { followers, views, likes },
    },
  },
}) => {
  return (
    <StatsList className="stats">
      <StatsListItem li key={1}>
        <Followers followers={followers} />
      </StatsListItem>
      <StatsListItemViews key={2}>
        <Views views={views} />
      </StatsListItemViews>
      <StatsListItem key={3}>
        <Likes likes={likes} />
      </StatsListItem>
    </StatsList>
  );
};
