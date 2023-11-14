import './css/HomePage.css';
import MenuColumn from './MenuColumn';
import Feed from './Feed';
import Widgets from './Widgets';


function HomePage() {
  return (
    <div className="homePage">
      <MenuColumn/>
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default HomePage;
