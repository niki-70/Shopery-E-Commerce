function ProductList({ name, img, price, rating }) {
  return (
    <div className="relative group flex m-5 w-max p-1 pr-16 bg-white rounded border border-gray-300 hover:border-green-900 hover:shadow-xl/30">

      <div className="w-28 h-28">
        <img className="w-full h-full object-cover" src={img} alt={name} />
      </div>

      <div className="group-hover:opacity-0">
        <p className="mt-2.5 text-sm text-gray-600 group-hover:text-green-800">
          {name}
        </p>

        <h4 className="mb-2.5">${price}</h4>

        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {i < rating ? "⭐" : "☆"}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-3 left-28 opacity-0 group-hover:opacity-100">
        <p className="mt-2.5 ml-2 text-sm text-gray-600 group-hover:text-green-800">
          {name}
        </p>

        <div className="flex gap-1 mt-2">

          <div className="w-8 h-8 grid place-items-center rounded-full cursor-pointer hover:bg-green-500 hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="M6.66667 8.33333H4.16667L2.5 17.5H17.5L15.8333 8.33333H13.3333M6.66667 8.33333V5.83333C6.66667 3.99239 8.15905 2.5 10 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333V8.33333M6.66667 8.33333H13.3333"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="w-8 h-8 grid place-items-center rounded-full cursor-pointer hover:bg-green-500 hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 3.5C3.75 3.5 1.25 10 1.25 10C1.25 10 3.75 16.5 10 16.5C16.25 16.5 18.75 10 18.75 10C18.75 10 16.25 3.5 10 3.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="w-8 h-8 grid place-items-center rounded-full cursor-pointer hover:bg-green-500 hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 17.5C-6.6 8.3 5 -1.6 10 4.6C15 -1.6 26.6 8.3 10 17.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductList;