import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/nevbar';
import Missions from './components/missions';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/missions" element={<Missions />} />
    </Routes>
  </>
);
export default App;
