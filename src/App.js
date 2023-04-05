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
import Elite from './pages/Elite';
import Friendly from './pages/Friendly';
import Garrett from './pages/Garrett';
import Granite from './pages/Granite';
import Hollywood from './pages/Hollywood';
import Jacks from './pages/Jacks';
import Jones from './pages/Jones-Hotel';
import Mary from './pages/Mary';
import Midway from './pages/Midway';
import Morris from './pages/Morris';
import ODaniel from './pages/O-Daniel';
import Parkers from './pages/Parkers';
import Pettigrew from './pages/Pettigrew';
import Pine from './pages/Pine-Street';
import Royal from './pages/Royals';
import Scott from './pages/Scott-Roberts';
import Service from './pages/Service-Tailors';
import Speight from './pages/Speights';
import Sulton from './pages/Sulton';
import Taverns from './pages/Tavrens-Shaws';
import Thompsons from './pages/Thompsons';
import Union from './pages/Union';
import Vanity from './pages/Vanity';
import Williams from './pages/Williams';

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
    path='/timeline'
    element={<Timeline/>}
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
    path= '/elite'
    element={<Elite/>}
    />

    <Route 
    path='/friendly'
    element={<Friendly/>}
    />
    <Route
    path='/garrett'
    element={<Garrett/>}
    />
     <Route
    path='/granite'
    element={<Granite/>}
    />
     <Route
    path='/hollywood'
    element={<Hollywood/>}
    />
     <Route
    path='/jacks'
    element={<Jacks/>}
    />
     <Route
    path='/jones-hotel'
    element={<Jones/>}
    />
     <Route
    path='/mary'
    element={<Mary/>}
    />
     <Route
    path='/midway'
    element={<Midway/>}
    />
     <Route
    path='/morris'
    element={<Morris/>}
    />
     <Route
    path='/o-daniel'
    element={<ODaniel/>}
    />
     <Route
    path='/parkers'
    element={<Parkers/>}
    />
     <Route
    path='/pettigrew'
    element={<Pettigrew/>}
    />
     <Route
    path='/pine-street'
    element={<Pine/>}
    />
     <Route
    path='/royals'
    element={<Royal/>}
    />
     <Route
    path='/scott-roberts'
    element={<Scott/>}
    />
     <Route
    path='/service-tailors'
    element={<Service/>}
    />
     <Route
    path='/speights'
    element={<Speight/>}
    />
     <Route
    path='/sulton'
    element={<Sulton/>}
    />
     <Route
    path='/taverns-shaw'
    element={<Taverns/>}
    />
     <Route
    path='/thompsons'
    element={<Thompsons/>}
    />
     <Route
    path='/union'
    element={<Union/>}
    />
     <Route
    path='/vanity'
    element={<Vanity/>}
    />
     <Route
    path='/williams'
    element={<Williams/>}
    />
  </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
