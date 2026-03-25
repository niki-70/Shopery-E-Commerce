// import { useState } from "react";
function Auth() {
  // const [showPassword, setShowPassword] =
  // useState(false)

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 my-10 rounded-2xl shdow-md w-full max-w-md">
          {/* Title */}

          <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

          {/* Email */}

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none focus-ring-green-500"
            />
          </div>

          {/* Password */}

          {/* <div className="mb-4 relative">
                    <input 
                    type={showPassword ? "text" : "Password"}
                    placeholder="Password"
                    /> */}

          {/* // value={email}
                    // onChange={(e) => setEmail(e.target.value)} */}

          {/* <span onClick={() => SetShowPassword(!showPassword)}
                        className="absolute right-3 top-3 cursor-pointer text-gray-500">
                            {showPassword ? <EyeOff size={20}/> : <Eye size={20} />}
                        </span> */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none focus-ring-green-500"
            />
          </div>

          {/* Remember & Forget */}

          <div className="flex justify-between items-center mb-6 text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-green-600" />
              Remember
            </label>

            <button className="text-gray-400 hover-text-green-600">
              Forgot Password
            </button>
          </div>

          {/* Button */}

          <button className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition">
            Login
          </button>

          {/* Register */}

          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have account?
            <span className="text-black cursor-pointer hover:underline">
              Register
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Auth;
