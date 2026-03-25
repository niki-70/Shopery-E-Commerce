function CreateAccount() {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 my-10 rounded-2xl shdow-md w-full max-w-md">
          {/* Title */}

          <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>

          {/* Email */}

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none focus-ring-green-500"
            />
          </div>

          {/* Password */}

          <div className="mb-4">
            <input
              type="text"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none focus-ring-green-500"
            />
          </div>

           {/* Confirm Password */}

          <div className="mb-4">
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none focus-ring-green-500"
            />
          </div>

          {/* Accept all terms & Condition */}

          <div className="flex justify-between items-center mb-6 text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-green-600" />
              Accept all terms & Condition
            </label>
          </div>

          {/* Button */}

          <button className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition">
            Create Account
          </button>

          {/* Login */}

          <p className="text-center text-sm mt-6 text-gray-400">
            Already have account 
            <span className="text-black pl-1 cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
