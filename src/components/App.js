import { Profile } from './Profile/Profile';
import profileCard from '../data/user.json';

export const App = () => {
  return (
    <div>
      <Profile card={profileCard} />
    </div>
  );
};
