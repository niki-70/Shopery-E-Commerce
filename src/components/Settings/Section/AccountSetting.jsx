function AccountSetting() {
  return (
    <>
      <div className="bg-gray-100  p-10 ">
        <div className="max-w-5xl mx-auto bg-white border border-gray-300 p-6  border-b-0  rounded-t-2xl ">
          {/* Title */}
          <h2 className=" text-2xl font-semibold ">Account Setting </h2>
        </div>

        <hr className="max-w-5xl mx-auto text-gray-300" />

        <div className="max-w-5xl mx-auto bg-white border border-gray-300 p-6 border-t-0 rounded-b-2xl">
          <div className=" flex flex-col md:flex-row gap-10">
            {/* Left Form */}

            <div className="flex-1 pace-y-5">
              <div>
                <label className="block text-sm font-medium mb-1 mt-3">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  value="Dianne"
                  className="w-full text-gray-300 p-2.5 border rounded-md -px-4 py-4 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div className="mt-3">
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value="Ressell"
                  className="w-full text-gray-300 p-2.5 border rounded-md -px-4 py-4 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div className="mt-3">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="Email"
                  placeholder="Email"
                  value="dianne.russell@gmail.com"
                  className="w-full text-gray-300 p-2.5 border rounded-md -px-4 py-4 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div className="mt-3">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="Phone Number"
                  placeholder="Phone Number "
                  value="(603) 555-0123"
                  className="w-full text-gray-300 p-2.5 border  rounded-md -px-4 py-4 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <button className=" mt-6.5 bg-green-600 text-white px-6 py-2.5 rounded-3xl hover:bg-green-700 transition">
                Save Changes
              </button>
            </div>

            {/* Right Profile */}

            <div className="flex flex-col items-center justify-center gap-4 mr-10">
              <img
                className="w-40 h-40 rounded-full object-cover border"
                src="src/assets/Images/Profile/profileImg1.png"
                alt=""
              />

              <button className="border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-50 ring-2 transition">
                Chose Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountSetting;
