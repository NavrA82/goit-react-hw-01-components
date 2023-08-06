import styled from 'styled-components';

export const WrapperDescImageProfile = styled.div`
  width: 360px;
  background-color: #119966;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 40px 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const ImageProfile = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  background-color: yellow;
  margin-left: auto;
  margin-right: auto;
`;
export const TitleProfile = styled.p`
  font-size: 32px;
  margin-top: 28px;
  text-align: center;
`;

export const TagLocationProfile = styled.p`
  font-size: 20px;
  margin-top: 8px;
  text-align: center;
  color: #11111199;
`;
