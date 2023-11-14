
import './App.css';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProfilePage from './components/ProfilePage';
import EditProfilePage from './components/EditProfilePage';


function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profilePage" element={<ProfilePage />} />
          <Route path="/editProfilePage" element={<EditProfilePage />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
