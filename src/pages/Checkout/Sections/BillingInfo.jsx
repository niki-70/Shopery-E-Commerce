function BillingInfo() {
  return (
    <>
      <div className=" m-auto w-fit">
        <div className="font-bold text-2xl mb-10">Billing Information</div>

        <div className="grid grid-cols-3 gap-8 mb-4.5">
          <div>
            <p className="">First name</p>
            <input
              className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-96"
              type="text"
              placeholder="Your first name"
            />
          </div>

          <div>
            <p>Last name</p>
            <input
              className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-96"
              type="text"
              placeholder="Your first name"
            />
          </div>

          <div>
            <p>
              Company Name <span>(optional)</span>
            </p>
            <input
              className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-96"
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
            <select className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-96">
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
            <select className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-96">
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
              className=" p-3 border text-lg tracking-w border-gray-400 rounded-md w-96"
              type="text"
              placeholder="Zip Code"
            />
          </div>
        </div>

        <div className="mb-4.5 grid grid-cols-2">
          <div>
            <p>Email</p>
            <input
              className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-lg"
              type="Email"
              placeholder="Email"
            />
          </div>

          <div>
            <p>Phone</p>
            <input
              className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-lg"
              type="Phone"
              placeholder="Phone number"
            />
          </div>
        </div>

        <div>
          <div className="flex mb-8">
            <input type="checkbox" name="" id="" />
            <p className="text-gray-400 ml-0.5"> Ship to a different address</p>
          </div>
        </div>

        <hr className="mb-8" />

        <div className="mb-4.5">
          <div className="text-2xl mb-4">Additional Info</div>
          <div>
            <p className="mb-1">
              Company Name <span>(optional)</span>
            </p>
            <textarea
              className="p-8 pt-3 border text-lg tracking-w border-gray-300 rounded-md w-full"
              name=""
              id=""
              value=""
              placeholder="Notes about your order, e.g. special notes for delivery"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default BillingInfo;
