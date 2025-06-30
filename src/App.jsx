import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css'

import Layout from '@/components/common/Layout';
import TeamPage from './pages/TeamPage';
import Home from './pages/HomePage';
import ClosingPage from './pages/ClosingPage';
import FundamentalsPage from './pages/FundamentalsPage';
import Prototype from './pages/Proposal';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/closing' element={<ClosingPage />} />
          <Route path='/fundamentals' element={<FundamentalsPage />} />
          <Route path='/proposal' element={<Prototype />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
