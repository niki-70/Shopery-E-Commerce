function Vegetables({ name, price, image }) {
  return (
    <>
      <div className="productCard group/card relative h-2xl mt-7 bg-white w-max rounded border border-gray-200 transition duration-300 ease-in-out hover:border-green-700">
        <div className="productCardImg w-96 object-cover">
          <img
            className="productCardBg rounded w-full h-full self-center"
            src={image}
            alt={name}
          />

          <div className="absolute top-2.5 right-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
            <svg
            className="rounded-6xl p-2 mt-1 block cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99967 17.5453C-6.66666 8.33354 4.99999 -1.66646 9.99967 4.65692C15 -1.66646 26.6666 8.33354 9.99967 17.5453Z"
                stroke="#1A1A1A"
                stroke-width="1.5"
              />
            </svg>
            <svg
            className="rounded-6xl p-2 mt-1 block cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 3.54102C3.75 3.54102 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 16.4577 10 16.4577C16.25 16.4577 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 3.54102 10 3.54102V3.54102Z"
                stroke="#1A1A1A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 13.125C10.8288 13.125 11.6237 12.7958 12.2097 12.2097C12.7958 11.6237 13.125 10.8288 13.125 10C13.125 9.1712 12.7958 8.37634 12.2097 7.79029C11.6237 7.20424 10.8288 6.875 10 6.875C9.1712 6.875 8.37634 7.20424 7.79029 7.79029C7.20424 8.37634 6.875 9.1712 6.875 10C6.875 10.8288 7.20424 11.6237 7.79029 12.2097C8.37634 12.7958 9.1712 13.125 10 13.125V13.125Z"
                stroke="#1A1A1A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="productCardInfo flex justify-between p-2">
          <div>
            <p className="mt-2.5 text-2xl text-gray-600">{name}</p>
            <h4 className="mb-2.5 text-xl">${price}</h4>
          </div>

          <div className="group/cart rounded-full p-2.5 transition duration-300 hover:bg-green-600 h-max">
            <svg
              className="transition-colors duration-300 group-hover/cart:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
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
        </div>
      </div>
    </>
  );
}

export default Vegetables;
