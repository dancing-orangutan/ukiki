import styled from "styled-components";

export const ScheduleByDateContainer = styled.div`
   margin: 10px 0px;

`;
export const Info = styled.div`
  width: 100%; /* 가로 길이 고정 */
  height: 100px; /* 높이 고정 */
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  border-bottom: 1px solid #ddd; /* 아래쪽 경계선 */

  h1 {
    font-size: 40px; /* 제목 크기 */
    font-weight: bold; /* 굵은 글씨 */
    margin-left: 5px; 
  }

  h3 {
    font-size: 18px; /* 날짜 크기 */
    color: #555; /* 글자 색상 */
    margin-left: 5px;
  }
`;

export const ScheduleContainer = styled.div`
  width: 100%;
  height: 460px;
  padding-top: 10px;
  button {
    border: 3px dotted #C9C9C9;
    border-radius: 8px;
    padding: 8px 80px;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: #FFD21C;
    }

  }
`;