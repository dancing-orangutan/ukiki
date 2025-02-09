import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import UserProposals from "../components/agencyPlanList/UserProposals";
import AgencyProposals from "../components/agencyPlanList/AgencyProposals";
import { TravelPlanProvider } from "../contexts/travelPlanContext";

const AgencyRoomList = () => {
  const [activeTab, setActiveTab] = useState('user');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="main flex flex-1">
        <div className="w-3/4 bg-white flex-1 overflow-auto">
          <div className="flex space-x-4 mb-4 justify-center">
            <button
              onClick={() => {
                setActiveTab('user');
                console.log('User tab selected');
              }}
              className={`p-2 ${activeTab === "user" ? "border-b-4 border-[#412B2B]" : "bg-white"}`}
            >
              제시받은 목록
            </button>
            <button
              onClick={() => {
                setActiveTab('agency');
                console.log('Agency tab selected');
              }}
              className={`p-2 ${activeTab === "agency" ? "border-b-4 border-[#412B2B]" : "bg-white"}`}
            >
              진행중인 목록
            </button>
          </div>
          <div className="mt-4">
            {activeTab === 'user' ? (
              <section className="w-full bg-white flex-1 overflow-auto">
                <TravelPlanProvider>
                  <UserProposals />
                </TravelPlanProvider>
              </section>
            ) : (
              <section className="w-full bg-white flex-1 overflow-auto">
                <AgencyProposals />
              </section>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgencyRoomList;
