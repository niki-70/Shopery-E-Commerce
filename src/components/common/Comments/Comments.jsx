import React from "react";

const Comments = ({ name, pfp, msg }) => {
  return (
    <>

        <div className="flex gap-3 pt-8">
          <div className="">
            <img src={pfp} className="rounded-full w-13 mr-2" alt="" />
          </div>
          <div>
            <div className="font-black">{name}</div>
            <p className="mt-3 text-gray-400">{msg}</p>
          </div>
        </div>
        <hr className="my-5 text-gray-400" />
   
    </>
  );
};

export default Comments;
