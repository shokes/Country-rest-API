import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SingleCountry from './Pages/SingleCountry';

import Error from './Pages/Error';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/Country/:capital' element={<SingleCountry />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
