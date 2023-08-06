import { UserFollowers, UserFollowersStats } from './Followers.Styled';
export const Followers = ({ followers }) => {
  return (
    <>
      <UserFollowers className="label">Followers</UserFollowers>
      <UserFollowersStats className="quantity">{followers}</UserFollowersStats>
    </>
  );
};
