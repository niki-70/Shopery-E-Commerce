import React from "react";
import Address from "./Sections/Address";
import Profile from "./Sections/Profile";
import UserPortal from "../../UserPortal/UserPortal";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="">
        <UserPortal />
      </div>
      <div className="grid grid-cols-2 col-span-2">
        <div className="w-full">
          <Profile />
        </div>
        <div className="w-full">
          <Address />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
