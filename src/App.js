import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import DataHospital from './pages/DataHospital';
import Document from './pages/Document';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/data-hospital' element={<DataHospital />}></Route>
        <Route path='/document' element={<Document />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
