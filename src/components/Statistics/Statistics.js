import {
  WrapperStats,
  TitleStats,
  List,
  ListItem,
  StatName,
  StatPercentage,
} from './Statistics.Styled';

export const Statistics = ({ stats }) => {
  return (
    <WrapperStats>
      <TitleStats className="title">Upload stats</TitleStats>

      <List className="stat-list">
        {stats.map(stat => {
          return (
            <ListItem key={stat.id} label={stat.label} className="item">
              <StatName className="label">{stat.label}</StatName>
              <StatPercentage className="percentage">
                {stat.percentage}%
              </StatPercentage>
            </ListItem>
          );
        })}
      </List>
    </WrapperStats>
  );
};
