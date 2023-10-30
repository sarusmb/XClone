
import './App.css';
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
