import countriesData from './countries.json'
import './App.css';

import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import {Routes, Route} from 'react-router-dom'

function App() {


  
  return (
    <div className="App">
     
      <NavBar />
      {/* <CountriesList />
      <CountriesList countries={countriesData} /> */}
      <Routes>
        <Route path='/countries' element={<CountriesList countries={countriesData}/>} />
      </Routes>
    </div>
  );
}

export default App;
