import styled from 'styled-components';

export const MyProfileContainer = styled.div`
  // margin-top: 10px;
  // min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainContentWrapper = styled.div`
  flex-grow: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 24px;
  height: 100%;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const SidebarWrapper = styled.div`
  border-right: 1px solid #e2e8f0; /* 오른쪽 테두리 추가 */
  padding-right: 16px; /* 테두리와 콘텐츠 사이에 여백 추가 */

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  background-color: white;
  padding: 16px;
`;
