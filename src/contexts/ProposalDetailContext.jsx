//제안서 디테일
import React, { createContext, useEffect, useState } from "react";
import { AgencyProposalDetail } from "../apis/agency";

const ProposalDetailContext = createContext();

export const ProposalDetailProvider = ({children, travelPlanId}) => {
  const [proposal, setProposals ] = useState(null);
  const [selectedDayId, setSelectedDayId] = useState(null);
  

  useEffect(() => {
    const fetchProposalData = async() => {
      try {
        const data = await AgencyProposalDetail(travelPlanId);
        console.log('제안서 상세 정보 호출 성공:',data)
        setProposals(data);

      } catch(error) {
        console.log('error:', error);
      }
    };
    if (travelPlanId) {
      fetchProposalData();
    }
  },[travelPlanId]);

  const setSelectedDay = (dayId) => {
    setSelectedDayId(dayId);
  }
  return (
    <ProposalDetailContext.Provider value={{proposal, selectedDayId, setSelectedDay}}>
      {children}
    </ProposalDetailContext.Provider>
  );
};

export default ProposalDetailContext;