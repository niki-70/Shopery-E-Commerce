function Profile() {
  return (
    <>
      <div className="w-full">
        <div className="bg-white shadow rounded-xl p-7 w-full text-center ">
          <img
            src="src/assets/Images/Profile/profileImg1.png"
            alt="profile"
            className="w-34 h-34 rounded-full object-cover mx-auto mb-4"
          />

          <h2 className="text-xl font-semibold text-gray-800">
            Dianne Russell
          </h2>

          <p className="text-gray-400 text-lg mb-2">Customer</p>

          <button className="text-green-600 font-bold hover:underline">
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
