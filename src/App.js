import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<LoginPage/>}></Route>
        <Route path='dashboard/*' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
