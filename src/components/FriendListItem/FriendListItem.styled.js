import styled from 'styled-components';

export const ListItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  align-items: center;
  padding: 20px 36px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  width: 100%;
`;

export const ListItemOnLine = styled.span`
  background-color: ${props => (props.status === 'true' ? 'green' : 'red')};
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;

export const ListItemAvatar = styled.img`
  width: 56px;
  height: 56px;
  padding: 4px;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const ListItemName = styled.p`
  font-size: 28px;
  font-weight: 700;
`;
