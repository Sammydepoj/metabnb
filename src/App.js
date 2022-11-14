import './App.css';
import Home from './pages/Home'
import PlaceToStay from './pages/PlaceToStay'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Home/> } />
        <Route exact path = '/placetostay' element = {<PlaceToStay/> } />
      </Routes>
    </Router>
    
  );
}

export default App;
