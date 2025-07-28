import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import CampaCola from './pages/CampaCola';
import Legacy from './pages/Legacy';
import Page1 from './pages/Page1'; // 👈 Import Page1

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Page1 />} /> 

        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/campacola" element={<CampaCola />} />
                <Route path="/legacy" element={<Legacy />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
