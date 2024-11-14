import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
