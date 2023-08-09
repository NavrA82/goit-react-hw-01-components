import PropTypes from 'prop-types';

import {
  WrapperStats,
  TitleStats,
  List,
  ListItem,
  StatName,
  StatPercentage,
} from './Statistics.Styled';

export const Statistics = ({ data, title }) => {
  return (
    <WrapperStats>
      {title && <TitleStats>{title}</TitleStats>}
      <List className="stat-list">
        {data.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id} label={label} className="item">
              <StatName className="label">{label}</StatName>
              <StatPercentage className="percentage">
                {percentage}%
              </StatPercentage>
            </ListItem>
          );
        })}
      </List>
    </WrapperStats>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
