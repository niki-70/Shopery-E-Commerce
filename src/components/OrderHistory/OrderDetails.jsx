function OrderDetail() {
  return (
    <>
      <div className="bg-gray-100 p-10">
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow">
          <div className="flex justify-between items-center mb-6">
            <div>
              Order Details{" "}
              <span className="text-gray-400"> • April 24, 2021</span>{" "}
              <span className="text-gray-400"> • 3 Products</span>
            </div>
            <div className="text-green-600">Back to List</div>
          </div>

          <hr className="text-gray-300 mb-5" />
          <div className="flex justify-between">
          <div className="flex">
            <div className="grid" dir="ltr">
              <div className=" border border-gray-300  rounded-s-lg">
                <h2 className="text-gray-400 p-4"> Billing Address</h2>

                <hr className="text-gray-300" />

                <div className="p-4">
                  <p>Dainne Russell</p>
                  <p className="text-gray-400">
                    4140 Parker Rd. Allentown, New Mexico <br /> 31134
                  </p>
                </div>

                <div className="p-4">
                  <p className="text-gray-400">Email</p>
                  <p>dainne.ressell@gmail.com</p>
                </div>

                <div className="p-4">
                  <p className="text-gray-400">Phone</p>
                  <p>(671) 555-0110</p>
                </div>
              </div>
            </div>

            <div className="grid">
              <div className=" border border-gray-300  rounded-r-lg">
                <h2 className="text-gray-400 p-4">Shipping Address</h2>

                <hr className="text-gray-300" />

                <div className="p-4">
                  <p>Dainne Russell</p>
                  <p className="text-gray-400">
                    4140 Parker Rd. Allentown, New Mexico <br /> 31134
                  </p>
                </div>

                <div className="p-4">
                  <p className="text-gray-400">Email</p>
                  <p>dainne.ressell@gmail.com</p>
                </div>

                <div className="p-4">
                  <p className="text-gray-400">Phone</p>
                  <p>(671) 555-0110</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="border border-gray-300  rounded-lg">
              <div className="flex p-4">
                <div>
                  <h2 className="text-gray-400">Order ID:</h2>
                  <p>#4152</p>
                </div>

                <hr className="h-12 w-0.5 mx-3 my-1 text-white bg-gray-300" />

                <div>
                  <h2 className="text-gray-400">Payment Method:</h2>
                  <p>Paypal</p>
                </div>
              </div>

              <hr className="text-gray-300 pb-5" />

              <div className="px-5">

              <div className="flex justify-between">
                <p className="text-gray-400">Subtotal:</p>
                <p>$365.00</p>
              </div>

              <hr className="text-gray-300 my-3" />

               <div className="flex justify-between">
                <p className="text-gray-400">Discount</p>
                <p>20%</p>
              </div>
              
              <hr className="text-gray-300 my-3" />

               <div className="flex justify-between">
               <p className="text-gray-400">Shipping</p>
                <p>Free</p>
              </div>

              <hr className="text-gray-300 my-3" />

                <div className="flex justify-between">
                <p>Total</p>
                <p className="text-green-800">$84.00</p>
              </div>

              </div>

            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;
