import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CorpLoginPage from 'pages/CorpLoginPage/CorpLoginPage.js'
import GeneralLoginPage from 'pages/GeneralLoginPage/GeneralLoginPage';

const LoginRouter = () => {
    return (
      <Routes>
        <Route path="/login/general" element={<GeneralLoginPage />} />
        <Route path="/login/corp" element={<CorpLoginPage />} />
      </Routes>
    );
  };
export default LoginRouter;