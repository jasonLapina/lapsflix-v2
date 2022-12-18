import { Routes, Route } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import Navigation from './components/navigation/NavBar';
import ShowsPage from './pages/ShowsPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/shows' element={<ShowsPage />} />
      </Routes>
    </>
  );
}

export default App;
