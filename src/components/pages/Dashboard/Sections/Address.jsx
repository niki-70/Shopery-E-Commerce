function Address() {
  return (
    <>
      <div className="w-full">
        <div className="bg-white shadow rounded-xl p-6 w-full ">
          <p className="text-gray-400 text-lg uppercase mb-2">
            Billing Address
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Dainne Russell
          </h3>

          <p className="text-gray-600 text-sm leading-6">
            4140 Parker Rd. Allentown, New Mexico <br /> 31134
          </p>

          <p className="text-lg mt-2 mb-1">dainne.ressell@gmail.com</p>

          <p className="text-lg mb-3">(671) 555-0110</p>

          <button className="text-green-600 font-bold hover:underline">
            Edit Address
          </button>
        </div>
      </div>
    </>
  );
}

export default Address;
