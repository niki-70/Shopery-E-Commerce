import React from "react";
import Address from "./Sections/Address";
import Profile from "./Sections/Profile";
import UserPortal from "../../components/UserPortal/UserPortal";
import OrderHistory from "../../components/OrderHistory/OrderHistory";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <div className="">
          <UserPortal />
        </div>
        <div className="w-full ">
          <div className="mt-10">
            <div>
              <div className="grid grid-cols-2 col-span-2 gap-10 mb-8">
                <div className="w-full">
                  <Profile />
                </div>
                <div className="w-full">
                  <Address />
                </div>
              </div>
            </div>
          </div>
          <div className="block mt-10">
            <OrderHistory />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
