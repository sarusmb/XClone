import './css/ProfilePage.css';
import MenuColumn from './MenuColumn';
import PersonalFeed from './PersonalFeed';
import Widgets from './Widgets';


function ProfilePage() {
  return (
    <div className="profilePage">
      <MenuColumn/>
      <PersonalFeed/>
      <Widgets/>
    </div>
  );
}

export default ProfilePage;
