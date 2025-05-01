# 고객 제안기반 맞춤형 여행패키지 제안 플랫폼

![ukiki_overview](https://github.com/user-attachments/assets/d7ba2d35-eb39-434f-b2ae-85750be5c248)

## 🧭 프로젝트 소개

**우끼끼(우리끼리 만드는 패키지여행)** 는  
2030 세대를 위한 **여행 계획 + 방 찾기 서비스**입니다.

최근 MZ세대는 **자기주도적 소비**와 **여행·경험 중심의 투자**에 집중하는 경향이 있으며,  
**우끼끼는 이러한 흐름을 반영**하여 사용자 주도형 여행 패키지를 제안합니다.

<img src="https://github.com/user-attachments/assets/515148e7-b2a6-4045-9151-9f02ec4d11d0" width="100%" />

---

## 🔄 유저(여행자) 플로우

![여행자 플로우](https://github.com/user-attachments/assets/e56336db-b5c5-4d0e-bb56-5336a7be3ccc)

### 👣 사용자 시나리오

1. **여행방 찾기**  
   - 유저는 여행 목적, 테마, 기간에 맞는 방에 참여합니다.  
   - 예: "5월 도쿄 소도시 감성 여행방"

2. **여행 취향 조사**  
   - 유저들은 가고 싶은 장소, 하고 싶은 활동 등을 등록하거나 의견 공유  
   - 예: 유니버설 스튜디오 / 핫스팟 위주로 이동 / 가성비 숙소 선호 등

3. **여행사에 패키지 요청**  
   - 사용자들의 취향 데이터를 바탕으로 여행사에 패키지 제작 요청이 전달됨

4. **패키지 투표**  
   - 여행사에서 제안한 패키지 중 가장 마음에 드는 항목에 투표

5. **패키지 확정 및 결제**  
   - 최종 패키지 확정 → 예약 및 결제 → 여행 확정 🎉

---

## 🧑‍💼 여행사 플로우

![여행사 플로우](https://github.com/user-attachments/assets/5475b11b-c0af-4bd0-88ee-d31b453334d1)

### 🧩 여행사 시나리오

1. **여행자 제안 수신**  
   - 여행자들이 등록한 취향, 일정, 목적 등을 기반으로 제안 요청을 받음

2. **제안 수락 및 일정 설계**  
   - 여행사는 수락한 제안만 골라 맞춤형 일정과 패키지를 구성함

3. **패키지 제안 전달**  
   - 구성된 패키지를 해당 유저 그룹에게 리스트로 전달함

4. **유저 투표 및 확정**  
   - 유저는 여러 제안 중 하나를 선택하여 투표로 패키지를 확정함

5. **결제 처리**  
   - 유저가 선택한 패키지에 대해 결제 진행 → 예약 확정

6. **OpenVidu 화상통화**  
   - 여행사와 유저들이 화상통화를 통해 세부 일정, 안내사항, 문의사항을 실시간으로 소통함

---

## 🎯 주요 기능 요약

- 🗓️ **여행 일정 설정**: 출발일과 돌아오는 날짜를 손쉽게 선택  
- 🏨 **맞춤형 방 검색**: 출발지와 도착지 기반 여행방 탐색  
- 🎒 **패키지 여행 제공**: 다양한 추천 패키지 탐색 가능  
- 🤝 **공동 여행 설계**: WebRTC 기반 실시간 협업  
- 💳 **간편 결제 시스템**: 확정된 패키지에 예약 및 결제

---

## 🎯 주요 타겟층

- 여행과 투자에 관심이 많은 **2030 세대**
- **합리적이고 자유로운 여행**을 원하는 사용자
- 친구, 연인, 가족 등과 **함께 기획하고 싶은 유저**

---

## 📘 ERD
![ERD](https://github.com/user-attachments/assets/1be28673-8967-4cb3-b23d-a39f2e289811)

---

## 🖼️ 와이어프레임 (클릭 시 전체보기)

[![우끼끼 와이어프레임 미리보기](https://github.com/user-attachments/assets/dc3fb195-5816-4d92-88f4-5914b8ce4455)](https://www.figma.com/design/Y6gwYWBepPRNpY430a2Z3N/%EC%9A%B0%EB%81%BC%EB%81%BC-?node-id=84-2)

---

## 🛠 사용된 기술 스택

### 🖥️ Frontend
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Zustand](https://img.shields.io/badge/Zustand-8DD6F9?style=flat&logo=zustand&logoColor=black)](https://github.com/pmndrs/zustand)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

### 🛠 Backend
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![OpenVidu](https://img.shields.io/badge/OpenVidu-0E76A8?style=flat&logo=webrtc&logoColor=white)](https://openvidu.io/)

### 💾 Database
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white)](https://redis.io/)

### ⚙ DevOps & Infra
[![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=yarn&logoColor=white)](https://yarnpkg.com/)
[![GitLab](https://img.shields.io/badge/GitLab-FC6D26?style=flat&logo=gitlab&logoColor=white)](https://gitlab.com/)
[![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat&logo=jenkins&logoColor=white)](https://www.jenkins.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![Mattermost](https://img.shields.io/badge/Mattermost-0058CC?style=flat&logo=mattermost&logoColor=white)](https://mattermost.com/)

---

> ✨ 우끼끼는 **고객의 아이디어로 시작해, 모두가 함께 만들어가는 여행 플랫폼**입니다.
