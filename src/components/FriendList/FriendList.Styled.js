import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin: 40px auto;
  max-width: 360px;
`;
export const ListItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  padding-left: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  width: 100%;
`;

export const ListItemOnLine = styled.span`
  background-color: ${props => (props.$online ? 'green' : 'red')};
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;

export const ListItemAvatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const ListItemName = styled.p`
  margin-left: 8px;
  font-size: 28px;
  font-weight: 700;
`;
