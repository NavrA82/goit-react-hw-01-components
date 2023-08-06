import { Followers } from '../Followers';
import { Likes } from '../Likes';
import { Views } from '../Views';
import { StatsList, StatsListItem } from './Stats.Styled';

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
      <StatsListItem key={2}>
        <Views views={views} />
      </StatsListItem>
      <StatsListItem key={3}>
        <Likes likes={likes} />
      </StatsListItem>
    </StatsList>
  );
};
