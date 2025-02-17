import styled from 'styled-components';


export const StyledMainLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row; /* 수평 배열, 기본값이므로 생략 가능 */
  height: 100%;
`;

export const StyledDateSidebar = styled.div`
  display: flex;
  width: 10%;
  justify-content: center; /* 가로 방향 가운데 정렬 */
  margin: 10px 0px;
`;

export const StyledMapDisplay = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0px;
`;

export const StyleScheduleByDate = styled.div`
  display: flex;
  width: 25%;

`;

export const StyleMapContainer =  styled.div`
  position: relative; /* 자식 요소의 absolute 위치 기준 */
  width: 100%;
  height: 100%;

`;

export const StylePlaceSelection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10; /* MapDisplay보다 높은 값으로 설정 */
  width: 30%;
  height: 100%;;
  /* 필요에 따라 배경색, 투명도 등 추가 스타일 적용 가능 */
  background-color: white;
  opacity: 1;

  @media (max-width: 1500px) {
    display: none;
  }
`;

export const DetailFormWrapper = styled.div`
  height: 90%;
  width: 90%;  /* 원하는 크기 설정 */
  background-color: rgba(255, 255, 255, 0.95); /* 약간 투명한 배경 */
  padding: 20px;

`;

export const ContentArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top:10px;
  margin: 0;

`;