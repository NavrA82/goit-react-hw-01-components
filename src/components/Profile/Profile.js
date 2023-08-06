import { Description } from './Description/Description';
import { Status } from './Stats/Stats';
import { WrapperCard } from './Profile.styled';

export const Profile = profileCard => {
  return (
    <WrapperCard>
      <Description profileCard={profileCard} />
      <Status profileCard={profileCard} />
    </WrapperCard>
  );
};
