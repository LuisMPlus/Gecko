import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css'

import Layout from '@/components/common/Layout';
import TeamPage from './Pages/TeamPage';
import Home from './components/home/Home';
import ClosingPage from './Pages/ClosingPage';
import FundamentalsPage from './Pages/FundamentalsPage';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/closing' element={<ClosingPage />} />
          z<Route path='/fundamentals' element={<FundamentalsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
