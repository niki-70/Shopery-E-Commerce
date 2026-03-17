function ProductList() {
  return (
    <>
      <div className="relative group flex m-5 w-max p-1 pr-16 bg-white rounded border border-gray-300  hover:border-green-900 hover:shadow-xl/30">
        <div className="w-28 h-28">
          <img
            className="w-full"
            src="src/assets/Images/productImg/2099fb565ffbe623e9b927ae3be066c4f975d1fc.jpg"
            alt=""
          />
        </div>
        <div className="group-hover:opacity-0">
          <div className=" text-gray-600">
            <p className="mt-2.5 text-sm group-hover:text-green-800 ">
              Green Apple
            </p>
          </div>
          <div>
            <h4 className="mb-2.5">$14.99</h4>
          </div>
          <div className="flex">
            <img src="src/assets/Images/icons/Group.png" alt="" />
            <img src="src/assets/Images/icons/Group.png" alt="" />
            <img src="src/assets/Images/icons/Group.png" alt="" />
            <img src="src/assets/Images/icons/Group.png" alt="" />
            <img src="src/assets/Images/icons/Group (1).png" alt="" />
          </div>
        </div>
        <div
          className="absolute top-3 left-28 opacity-0 
                           group-hover:opacity-100 "
        >
          <div className=" text-gray-600">
            <p className="mt-2.5 ml-2 text-sm group-hover:text-green-800 ">
              Green Apple
            </p>
          </div>

          <div className=" flex gap-1">
            <div
              className="w-8 h-8 grid place-items-center rounded-full cursor-pointer 
                hover:bg-green-500 text-black hover:text-white transition"
            >
              <svg
                className="transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.66667 8.33333H4.16667L2.5 17.5H17.5L15.8333 8.33333H13.3333M6.66667 8.33333V5.83333C6.66667 3.99239 8.15905 2.5 10 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333V8.33333M6.66667 8.33333H13.3333M6.66667 8.33333V10.8333M13.3333 8.33333V10.8333"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-8 h-8 grid place-items-center rounded-full cursor-pointer 
                hover:bg-green-500 text-black hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 3.54102C3.75 3.54102 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 16.4577 10 16.4577C16.25 16.4577 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 3.54102 10 3.54102V3.54102Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 13.125C10.8288 13.125 11.6237 12.7958 12.2097 12.2097C12.7958 11.6237 13.125 10.8288 13.125 10C13.125 9.1712 12.7958 8.37634 12.2097 7.79029C11.6237 7.20424 10.8288 6.875 10 6.875C9.1712 6.875 8.37634 7.20424 7.79029 7.79029C7.20424 8.37634 6.875 9.1712 6.875 10C6.875 10.8288 7.20424 11.6237 7.79029 12.2097C8.37634 12.7958 9.1712 13.125 10 13.125V13.125Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-8 h-8 grid place-items-center rounded-full cursor-pointer 
                hover:bg-green-500 text-black hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99967 17.5453C-6.66666 8.33354 4.99999 -1.66646 9.99967 4.65692C15 -1.66646 26.6666 8.33354 9.99967 17.5453Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
