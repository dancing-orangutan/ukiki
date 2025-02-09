import React from "react";
import { useNavigate } from "react-router-dom";

const ListCard = ({ imageSrc, trip_name, dataRange, location, min_people, max_people, proposal }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const onhandleDetail = () => {
    navigate(`/agencydetail/${proposal.travelPlanId}`); // travelPlanId를 URL에 추가
  };

  return (
    <div className="card p-10">
      <div className="flex bg-white rounded-lg border-2 overflow-hidden w-full mb-6">
        {/* 이미지 자동 생성 */}
        <img src={imageSrc} alt={location} className="w-1/3 object-cover rounded-lg" />

        {/* 카드 본문 */}
        <div className="flex flex-col p-4 w-2/3">
          <h2 className="font-bold leading-snug text-xl mb-2">title: {trip_name}</h2>
          <p className="text-sm text-gray-500 mb-1">여행날짜: {dataRange}</p>
          <p className="text-sm text-gray-500 mb-1">여행지: {location}</p>
          <p className="text-sm text-gray-500 mb-1">최소인원: {min_people}</p>
          <p className="text-sm text-gray-500 mb-1">최대인원: {max_people}</p>

          <button 
            onClick={onhandleDetail} 
            className="mt-auto ml-auto bg-[#412B2B] text-white px-4 py-2 rounded-md text-sm"
          >
            자세히 보기 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
