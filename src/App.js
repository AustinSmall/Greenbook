import './App.css';
import About from './pages/About';
import Locations from './pages/Locations'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
   <Router>
    <div>
      <Header/>
      <div>
        <Routes>
    <Route 
    path="/about"
    element= {<About/>}
    />
    <Route 
    path='/locations'
    element={<Locations/>}
    />
        </Routes>
      </div>
    </div>
   </Router>
  );
}

export default App;
