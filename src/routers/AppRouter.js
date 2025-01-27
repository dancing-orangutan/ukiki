import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from 'layout/Layout.js';
import MainPage from 'pages/MainPage/MainPage.js';
import LoginRouter from 'routers/LoginRouter.js';

  const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout><MainPage /></Layout>} />
          <Route path="/login/*" element={<Layout><LoginRouter /></Layout>} />
        </Routes>
      </Router>
    );
  }
  export default AppRouter;
