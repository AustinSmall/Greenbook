import './App.css';
import About from './pages/About';
import Locations from './pages/Locations';
import BHotel from './pages/Biltmore-Hotel';
import BStation from './pages/Biltmore-Station';
import Boykins from './pages/Boykins-Tailors';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import BullD from './pages/Bull-City-Drug-Store';
import BullR from './pages/Bull-City-Resturant';
import Catlett from './pages/Catlett';
import Chautauqua from './pages/Chautauqua';
import Clay from './pages/Clay';
import College from './pages/College-Inn';
import Community from './pages/Community-Tailors';
import Congro from './pages/Congro';
import CuCu from './pages/Cu-Cu';
import DOrsay from './pages/D-Orsay';
import DeLux from './pages/De-Lux';
import Shazors from './pages/De-Shazors ';

function App() {
  return (
   <Router>
    <div>
      <Header/>
      <div>
        <Routes>
          <Route
          path='/'
          element={<Home/>}
          />
    <Route 
    path="/about"
    element= {<About/>}
    />
    <Route 
    path='/locations'
    element={<Locations/>}
    />
    <Route 
    path= '/biltmore-hotel'
    element={<BHotel/>}
    />
    <Route
    path='/biltmore-station'
    element={<BStation/>} 
    />
    <Route
    path='/boykins-tailors'
    element={<Boykins/>}
    />
    <Route
    path='/bull-city-drug-store'
    element={<BullD/>}
    />
    <Route
    path='/bull-city-resturant'
    element={<BullR/>}
    />
    <Route
    path='/catlett'
    element= {<Catlett/>}
    />
    <Route
    path='/chautauqua'
    element={<Chautauqua/>}
    />
    <Route
    path='/clay'
    element={<Clay/>}
    />
    <Route
    path='/college'
    element={<College/>}
    />
    <Route
    path='/community'
    element={<Community/>}
    />
    <Route
    path='/congro'
    element={<Congro/>}
    />
    <Route
    path='/cu-cu'
    element={<CuCu/>}
    />
    <Route
    path='/d-orsay'
    element={<DOrsay/>}
    />
    <Route
    path='de-lux'
    element={<DeLux/>}
    />
    <Route 
    path='/timeline'
    element={<Timeline/>}
    />
    <Route
    path='/de-shazors'
    element={<Shazors/>}
    />
        </Routes>
      </div>
    </div>
   </Router>
  );
}

export default App;
