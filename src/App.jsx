// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import CampaCola from './pages/CampaCola';
import Legacy from './pages/Legacy';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campacola" element={<CampaCola />} />
          <Route path="/legacy" element={<Legacy />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
