import './App.css';
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'

import Information from '../src/components/BusinessListing/Information';
import ClassifiedsInformation from './components/Classifieds/ClassifiedsInformation';
import OAGInformation from './components/OffersAndGifts/OAGInformation';
import JobsInfoInformation from './components/JobsInfo/JobsInfoInformation';


function App() {
  return (
  <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/BusinessListingInformation' Component={Information}/>
    <Route path='/OffersAndGiftsInformation' Component={OAGInformation}/>
    <Route path='/ClassifiedsInformation' Component={ClassifiedsInformation}/>
    <Route path='/JobsInfoInformation' Component={JobsInfoInformation}/>

  </Routes>
    
  );
}

export default App;
