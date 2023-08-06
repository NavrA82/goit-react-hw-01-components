import { UserLikes, UserLikesStats } from './Likes.Styled';
export const Likes = ({ likes }) => {
  return (
    <>
      <UserLikes className="label">Likes</UserLikes>
      <UserLikesStats className="quantity">{likes}</UserLikesStats>
    </>
  );
};
