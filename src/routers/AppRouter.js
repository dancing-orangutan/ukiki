import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from 'pages/MainPage/MainPage.js';
import LoginRouter from 'routers/LoginRouter.js';

  const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login/*" element={<LoginRouter />} />
        </Routes>
      </Router>
    );
  }
  export default AppRouter;
