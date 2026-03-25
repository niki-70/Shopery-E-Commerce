import Button from "../common/Button/Button";

function ShoppingCart() {
  return (
    <>
      <div className="border border-gray-400 rounded-2xl  mx-50 my-20">
        <div className="text-gray-400 grid grid-cols-2 mx-20 my-5">
          <div>
            <p>PRODUCT</p>
          </div>
          <div className="grid grid-cols-3">
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>SUBTOTAL</p>
          </div>
        </div>

        <hr />

        <div className="text-gray-400 grid grid-cols-2 mx-20 my-2">
          <div className="flex items-center mr-3">
            <img src="src/assets/Images/productImg/Green Capsicum.png" alt="" />
            <p>Green Capsicum</p>
          </div>
          <div className="grid grid-cols-3 items-center">
            <p>$14.99</p>
            <div className=" flex items-center rounded-4xl border border-gray-100 bg-white p-1">
              <div className="group/counter mr-3 p-2 rounded-full bg-gray-100  hover:bg-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    className="group-hover/counter:stroke-white"
                    d="M2.33301 7H11.6663"
                    stroke="#666666"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className=" mr-3 p-2 ">3</div>

              <div className="group/counter p-2 rounded-full bg-gray-100 hover:bg-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    className="group-hover/counter:stroke-white"
                    d="M2.33301 6.99992H11.6663M6.99967 2.33325V11.6666V2.33325Z"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex">
              <p>$70.00</p>
              <svg
                className="ml-3"
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

        <hr className="mx-20" />

        <div className="text-gray-400 grid grid-cols-2 mx-20 my-2">
          <div className="flex items-center mr-3">
            <img src="src/assets/Images/productImg/RedCapsicum.png" alt="" />
            <p>Red Capsicum</p>
          </div>
          <div className="grid grid-cols-3 items-center">
            <p>$14.99</p>
            <div className=" flex items-center rounded-4xl border border-gray-100 bg-white p-1">
              <div className="group/counter mr-3 p-2 rounded-full bg-gray-100  hover:bg-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    className="group-hover/counter:stroke-white"
                    d="M2.33301 7H11.6663"
                    stroke="#666666"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className=" mr-3 p-2 ">3</div>

              <div className="group/counter p-2 rounded-full bg-gray-100 hover:bg-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    className="group-hover/counter:stroke-white"
                    d="M2.33301 6.99992H11.6663M6.99967 2.33325V11.6666V2.33325Z"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex">
              <p>$70.00</p>
              <svg
                className="ml-3"
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

        <hr />

        <div className="flex justify-between mx-20 my-8">
          <Button variant="textblack">Return to shop</Button>

          <Button variant="textblack">Update Cart</Button>
        </div>
      </div>

      <div className="p-4 mx-50 my-20 flex gap-30 items-center border border-gray-400 rounded-2xl ">
        <div className="text-2xl">
          <p>Coupon Code</p>
        </div>

        <div class="flex relative mx-10 my-5">
          <div>
            <input
              className=" p-5 border text-lg tracking-w border-gray-400 rounded-4xl w-lg"
              type="Number"
              placeholder="Enter Code"
            />
          </div>
          <div class="absolute -right-28">
            <button className="flex items-center gap-2 rounded-4xl cursor-pointer font-medium bg-black text-white px-10 py-5">Apply Coupon</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
