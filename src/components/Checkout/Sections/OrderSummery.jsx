

function OrderSummery() {
  return (
    <>
      <div className="m-auto w-fit py-8 px-4 border border-gray-300 rounded-2xl">
        <div className="text-2xl">Order Summery</div>

        <div className="flex justify-between place-items-center">
          <div className="flex place-items-center mr-25">
            <img src="src/assets/Images/productImg/GreenCapsicum1.png" alt="" />
            <p>
              Green capsicum <span>x5</span>
            </p>
          </div>

          <div className="">$70.00</div>
        </div>

        <div className=" flex justify-between place-items-center mb-5">
          <div className="flex place-items-center">
            <img src="src/assets/Images/productImg/RedCapsicum1.png" alt="" />
            <p>
              Red capsicum <span>xl</span>
            </p>
          </div>

          <div>$14.00</div>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-500">Subtotal:</p>
          <p>$84.00</p>
        </div>

        <hr className="my-3 text-gray-300" />

        <div className="flex justify-between">
          <p className="text-gray-500">Shipping:</p>
          <p>Free</p>
        </div>

        <hr className="my-3 text-gray-300" />

        <div className="flex justify-between mb-5">
          <p className="text-gray-500">Total:</p>
          <p className="font-bold">$84.00</p>
        </div>

        <div className="text-2xl mb-3">Payment Method</div>

        <div className="mb-3">
          <input className="accent-green-600" type="Radio" name="a" id="" />{" "}
          Cash on Delivery <br />
          <input
            className="accent-green-600"
            type="Radio"
            name="a"
            id=""
          />
          Paypal <br />
          <input
            className="accent-green-600"
            type="Radio"
            name="a"
            id=""
          />
          Amazon Pay
        </div>

        <div>
          <button className="flex items-center gap-2 rounded-4xl cursor-pointer font-medium bg-green-600 text-white px-40 py-3">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderSummery;
