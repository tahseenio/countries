import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CountryDetail } from './components/CountryDetail';

import { Landing } from './pages/Landing';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/:id' element={<CountryDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
