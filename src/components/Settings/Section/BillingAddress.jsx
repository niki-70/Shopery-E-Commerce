function BillingAddress() {
  return (
    <>
      <div className=" bg-gray-100  p-10">
        <div className="max-w-5xl mx-auto bg-white border border-gray-300 p-6  border-b-0  rounded-2xl">
          <div className="font-bold text-2xl mb-10">Billing Information</div>

          <div className="grid grid-cols-3 gap-8 mb-4.5">
            <div>
              <p className="">First name</p>
              <input
                className=" p-3 border text-lg tracking-w  border-gray-300 rounded-md w-80"
                type="text"
                placeholder="Your first name"
              />
            </div>

            <div>
              <p>Last name</p>
              <input
                className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-80"
                type="text"
                placeholder="Your first name"
              />
            </div>

            <div>
              <p>
                Company Name <span>(optional)</span>
              </p>
              <input
                className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-80"
                type="text"
                placeholder="Your first name"
              />
            </div>
          </div>

          <div className="mb-4.5">
            <p>Street Address</p>
            <input
              className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-full"
              type="text"
              placeholder="Address"
            />
          </div>

          <div className="grid grid-cols-3 gap-8 mb-4.5">
            <div>
              <p>Country / Region</p>
              <select className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-80">
                <option>India</option>
                <option>Irland</option>
                <option>Switzerlan</option>
                <option>Greece</option>
                <option>New Zealand</option>
                <option>Thailand</option>
                <option> France</option>
                <option>Spain</option>
                <option>Noeway</option>
                <option>Denmark</option>
                <option>Belgium</option>
              </select>
            </div>

            <div>
              <p>State</p>
              <select className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-80">
                <option>Rajasthan</option>
                <option>Haryana</option>
                <option>Punjab</option>
                <option>Jummu & Kashmir</option>
                <option>Maharastra</option>
                <option>M.P</option>
                <option>U.P</option>
                <option>A.P</option>
                <option>Goa</option>
                <option>Chennai</option>
                <option>Tamil Nadu</option>
              </select>
            </div>

            <div>
              <p>Zip Code</p>
              <input
                className=" p-3 border text-lg tracking-w border-gray-400 rounded-md w-80"
                type="text"
                placeholder="Zip Code"
              />
            </div>
          </div>

          <div className="mb-4.5 grid grid-cols-2">
            <div>
              <p>Email</p>
              <input
                className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-md"
                type="Email"
                placeholder="Email"
              />
            </div>

            <div>
              <p>Phone</p>
              <input
                className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-md"
                type="Phone"
                placeholder="Phone number"
              />
            </div>
          </div>

          <button className=" mt-3 bg-green-600 text-white px-6 py-2.5 rounded-3xl hover:bg-green-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}

export default BillingAddress;
