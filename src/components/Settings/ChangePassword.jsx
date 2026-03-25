function ChangePassword() {

    return(
        <>
      <div className=" bg-gray-100  p-10">
        <div className="max-w-5xl mx-auto bg-white border border-gray-300 p-6  border-b-0  rounded-2xl">
          <div className="font-bold text-2xl mb-10">Change Password</div>

          <div className="mb-4.5">
            <p>Current Password</p>
            <input
              className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-full"
              type="Password"
              placeholder="Password"
            />
          </div>

          <div className="mb-4.5 grid grid-cols-2">
            <div>
              <p>New Password Password</p>
              <input
                className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-md"
                type="Password"
                placeholder="Password"
              />
            </div>

            <div>
              <p>Confirm Password</p>
              <input
                className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-md"
                type="Password"
                placeholder="Password"
              />
            </div>
          </div>

          <button className="mt-3 bg-green-600 text-white px-6 py-2.5 rounded-3xl hover:bg-green-700 transition">
           Change Password
          </button>
        </div>
      </div>
    </>
    )
    
}

export default ChangePassword;