import styled from 'styled-components';

export const StatsList = styled.ul`
  max-width: 360px;
  background-color: #229988;
  display: flex;
  margin: 0 auto;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top: 2px solid #11111166;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  width: 100%;
`;
export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 0;
  row-gap: 4px;
  max-width: 120px;
`;
export const StatsListItemViews = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 0;
  row-gap: 4px;
  min-width: 120px;
  border-right: 2px solid #11111166;
  border-left: 2px solid #11111166;
`;
