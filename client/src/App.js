import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';

import './Styles/global.css';

import Home from './Pages/Home';
import Logging from './Pages/Logging';
import Pricing from './Pages/Pricing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Loging" element={<Logging/>} />
        <Route path="/pricing" element={<Pricing/>} />
      </Routes>
    </Router>
  );
}

export default App;
