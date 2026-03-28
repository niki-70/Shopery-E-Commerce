function ShoppingCard() {
  return (
    <>
    <div className="">
      <div className=" grid h-screen bg-gray-500 justify-end ">
        <div className="flex flex-col justify-between bg-white p-5 border border-gray-300">
            <div>
          <div className="text-2xl">Shopping Card (2)</div>
          <div className=" pb-5">
            <div className="flex place-items-center justify-between ">
              <div className="flex place-items-center">
                <div>
                  <img src="src/assets/Images/productImg/Orange.png" alt="" />
                </div>

                <div>
                  <p className="text-lg">Fresh Indian Orange</p>
                  <p className="text-gray-400">
                    1 kg <span>x</span>{" "}
                    <span className="text-black">12.00</span>
                  </p>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_4586_5574)">
                    <path
                      d="M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z"
                      stroke="#CCCCCC"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M16 8L8 16"
                      stroke="#666666"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 16L8 8"
                      stroke="#666666"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4586_5574">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <hr className="my-5" />

            <div className="flex place-items-center justify-between ">
              <div className="flex place-items-center">
                <div>
                  <img
                    src="src/assets/Images/productImg/GreenApple.png"
                    alt=""
                  />
                </div>

                <div>
                  <p className="text-lg">Fresh Indian Orange</p>
                  <p className="text-gray-400">
                    1 kg <span>x</span>{" "}
                    <span className="text-black">12.00</span>
                  </p>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_4586_5574)">
                    <path
                      d="M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z"
                      stroke="#CCCCCC"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M16 8L8 16"
                      stroke="#666666"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 16L8 8"
                      stroke="#666666"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4586_5574">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
</div>
          <div className="">
            <div className=" flex justify-between mb-5">
              <p>2 Product</p>
              <p className="font-bold">$26.00</p>
            </div>

            <div className="mb-4">
              <button className="flex items-center gap-2 rounded-4xl cursor-pointer font-medium bg-green-600 text-white px-40 py-3">
                Checkout
              </button>
            </div>

            <div>
              <button className="flex items-center gap-2 rounded-4xl cursor-pointer font-medium bg-green-100 text-green-600 px-40 py-3">
                Go to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ShoppingCard;
