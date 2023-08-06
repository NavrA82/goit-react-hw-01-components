import {
  ImageProfile,
  WrapperDescImageProfile,
  TitleProfile,
  TagLocationProfile,
} from './Description.styled';

export const Description = ({
  profileCard: {
    card: { username, tag, location, avatar },
  },
}) => {
  return (
    <WrapperDescImageProfile>
      <ImageProfile src={avatar} alt="User avatar" className="avatar" />
      <TitleProfile className="name">{username}</TitleProfile>
      <TagLocationProfile className="tag">{tag}</TagLocationProfile>
      <TagLocationProfile className="location">{location}</TagLocationProfile>
    </WrapperDescImageProfile>
  );
};
