import PropTypes from 'prop-types';

import {
  ImageProfile,
  WrapperDescImageProfile,
  TitleProfile,
  TagLocationProfile,
} from './ProfileDescription.styled';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <WrapperDescImageProfile>
      <ImageProfile src={avatar} alt="User avatar" className="avatar" />
      <TitleProfile className="name">{username}</TitleProfile>
      <TagLocationProfile className="tag">{tag}</TagLocationProfile>
      <TagLocationProfile className="location">{location}</TagLocationProfile>
    </WrapperDescImageProfile>
  );
};
Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
