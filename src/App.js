import { Routes, Route } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import Navigation from './components/navigation/NavBar';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/pricing' element={<PricingPage />} />
      </Routes>
    </>
  );
}

export default App;
