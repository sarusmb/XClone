
import './App.css';
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import ProfilePage from './ProfilePage';


function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profilePage" element={<ProfilePage />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
