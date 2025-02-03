import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import axios from 'axios';
import KoreaAirportSelector from '../../services/airport/KoreaAirportSelector';
import WorldAirportSelector from '../../services/airport/WorldAirportSelector';
import CreateRoomModal from '../mainpage/CreateRoomModal';

const SearchBar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [searchType, setSearchType] = useState('findRoom'); // ✅ 방 찾기 / 방 만들기 선택 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_KEY = import.meta.env.VITE_APP_AIRPORT_API_KEY;
  const API_BASE_URL = "/api/flight/getIflightScheduleList"; // 프록시 사용


  // ✅ 왕복 항공권 조회 함수
  const checkRoundTripFlights = async () => {
    if (!startDate || !endDate || !departureAirport || !arrivalAirport) {
      alert('출발일, 돌아오는 날, 출발 공항, 도착 공항을 모두 선택해주세요.');
      return;
    }

    const depDate = startDate.toISOString().split('T')[0].replace(/-/g, '');
    const arrDate = endDate.toISOString().split('T')[0].replace(/-/g, '');

    try {
      // ✅ 출발편 조회
      const departureResponse = await axios.get(API_BASE_URL, {
        params: {
          serviceKey: API_KEY,
          schDate: depDate,
          schDeptCityCode: departureAirport,
          schArrvCityCode: arrivalAirport,
          pageNo: 1,
        },
      });
      console.log('departureResponse:', departureResponse.data);

      // ✅ 도착편 조회
      const returnResponse = await axios.get(API_BASE_URL, {
        params: {
          serviceKey: API_KEY,
          schDate: arrDate,
          schDeptCityCode: arrivalAirport,
          schArrvCityCode: departureAirport,
          pageNo: 1,
        },
      });

      const departureFlights =
        departureResponse.data.response?.body?.items?.item || [];
      const returnFlights =
        returnResponse.data.response?.body?.items?.item || [];

      // ✅ 왕복 항공권 존재 여부 확인 후 모달 띄우기
      if (departureFlights.length > 0 && returnFlights.length > 0) {
        console.log('✅ 왕복 항공편이 있습니다.');
        setIsModalOpen(true);
      } else {
        alert('❌ 해당 날짜에 왕복 항공편이 없습니다.');
      }
    } catch (error) {
      console.error('🚨 항공권 조회 실패:', error);
      alert('🚨 항공권 조회 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white bg-opacity-30 p-6 rounded-md shadow-lg w-full max-w-3xl backdrop-blur-md">
        <form className="space-y-6">
          {/* ✅ 방 찾기 vs 방 만들기 선택 스위치 정상 동작 */}
          <div className="relative flex justify-between items-center border-gray-300 pb-2">
            <button
              type="button"
              className={`flex-1 text-center py-2 rounded-md ${
                searchType === 'findRoom' ? 'text-white font-bold' : 'text-gray-300'
              }`}
              onClick={() => setSearchType('findRoom')}
            >
              방 찾기
            </button>
            <button
              type="button"
              className={`flex-1 text-center py-2 rounded-md ${
                searchType === 'createGroup' ? 'text-white font-bold' : 'text-gray-300'
              }`}
              onClick={() => setSearchType('createGroup')}
            >
              방 만들기
            </button>
            <div
              className="absolute bottom-0 h-1 w-1/2 bg-dark-green transition-transform duration-300"
              style={{
                transform: searchType === 'findRoom' ? 'translateX(0)' : 'translateX(100%)',
              }}
            />
          </div>

          {/* ✅ 날짜 선택 */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                출발일
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                dateFormat="yyyy/MM/dd"
                locale={ko}
                className="w-full px-4 py-2 border bg-transparent border-white rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholderText="언제 떠나시나요?"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                돌아오는 날
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                minDate={startDate || new Date()}
                dateFormat="yyyy/MM/dd"
                locale={ko}
                className="w-full px-4 py-2 border bg-transparent border-white rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholderText="언제 돌아오시나요?"
              />
            </div>
          </div>

          {/* ✅ 출발/도착 공항 선택 */}
          <div className="flex space-x-4">
            <KoreaAirportSelector
              selectedAirport={departureAirport}
              onChange={(e) => setDepartureAirport(e.target.value)}
            />
            <WorldAirportSelector
              selectedAirport={arrivalAirport}
              onChange={(e) => setArrivalAirport(e.target.value)}
            />
          </div>

          {/* ✅ 검색하기 / 방 만들기 버튼 */}
          <div className="text-center">
            {searchType === 'findRoom' ? (
              <button
                type="button"
                className="w-full bg-dark-green text-white px-8 py-3 rounded-md font-semibold"
              >
                검색하기
              </button>
            ) : (
              <button
                type="button"
                onClick={checkRoundTripFlights} // ✅ 왕복 항공권 조회 후 모달 띄우기
                className="w-full bg-dark-green text-white px-8 py-3 rounded-md font-semibold"
              >
                방 만들기
              </button>
            )}
          </div>
        </form>
      </div>

      {/* ✅ 방 만들기 모달 (왕복 항공권이 있는 경우에만 오픈) */}
      {isModalOpen && (
        <CreateRoomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SearchBar;
