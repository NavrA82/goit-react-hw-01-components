import styled from 'styled-components';

export const WrapperStats = styled.section`
  width: 520px;
  padding: 80px;
  background-color: #556633;
  margin: 40px auto;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

export const TitleStats = styled.h2`
  padding: 20px;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
  background-color: #229988;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const List = styled.ul`
  display: flex;
  margin: 0 auto;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  width: 100%;
`;
export const ListItem = styled.li`
  background-color: ${stat => {
    switch (stat.label) {
      case '.docx':
        return '#226688';
      case '.pdf':
        return '#337788';
      case '.mp3':
        return '#446688';
      case '.psd':
        return '#559988';
      default:
        return '#226688';
    }
  }};
  border-bottom-left-radius: ${stat => {
    switch (stat.label) {
      case '.docx':
        return '8px';
      default:
        return '0';
    }
  }};
  border-bottom-right-radius: ${stat => {
    switch (stat.label) {
      case '.pdf':
        return '8px';
      default:
        return '0';
    }
  }};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 0;
  row-gap: 4px;
  min-width: 72px;
`;
export const StatName = styled.span`
  text-align: center;
  color: #fff;
`;

export const StatPercentage = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;
