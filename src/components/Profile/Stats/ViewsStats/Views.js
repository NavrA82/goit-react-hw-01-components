import { UserViews, UserViewsStats } from './Views.Styled';

export const Views = ({ views }) => {
  return (
    <>
      <UserViews className="label">Views</UserViews>
      <UserViewsStats className="quantity">{views}</UserViewsStats>
    </>
  );
};
