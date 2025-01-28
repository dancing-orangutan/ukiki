import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import MainPage from '@/pages/MainPage/MainPage';
import LoginRouter from '@/routers/LoginRouter';
import Home from '@/pages/MainPage/MainPage';
import About from '@/pages/AboutPage/AboutPage';
import UserRoom from '@/pages/UserRoomPage/UserRoom';
import SearchRooms from '@/pages/SearchRoomPage/SearchRooms';
import AgencyRoomList from '@/pages/AgencyRoomListPage/AgencyRoomListPage';

  const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/login/*" element={<Layout><LoginRouter /></Layout>} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/userroom" element={<UserRoom />} />
          <Route path="/searchroom" element={<SearchRooms />} />
          <Route path="/agencyroom" element={<AgencyRoomList/>} />
        </Routes>
      </Router>
    );
  }
  export default AppRouter;
