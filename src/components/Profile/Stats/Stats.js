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
      <StatsListItem key={followers}>
        <Followers followers={followers} />
      </StatsListItem>
      <StatsListItemViews key={views}>
        <Views views={views} />
      </StatsListItemViews>
      <StatsListItem key={likes}>
        <Likes likes={likes} />
      </StatsListItem>
    </StatsList>
  );
};
