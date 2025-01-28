import React from 'react';
import Header from '@/components/commons/Header/Header'; // 헤더 컴포넌트
import Footer from '@/components/commons/Footer/Footer'; // 푸터 컴포넌트

const Layout = ({ children }) => {
  return (
    <div>
      <Header />  {/* 공통 헤더 */}
       {children} {/* 페이지별 내용 */}
      <Footer />  {/* 공통 푸터 */}
    </div>
  );
};

export default Layout; 