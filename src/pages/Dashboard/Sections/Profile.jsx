import profileImg1 from "../../../assets/Images/Profile/profileImg1.png";
function Profile() {
  return (
    <>
        <div className="bg-white shadow rounded-xl p-7 w-full text-center h-full ">
          <img
            src={profileImg1}
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
    </>
  );
}

export default Profile;
