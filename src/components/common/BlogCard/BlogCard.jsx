function BlogCard({image, date, month, tag, author, comments, title}) {
  return (
    <div className="newsCard p-10">
      {/* <!-- CARD 1 --> */}

      <div className="newsCard gap-8 w-fit">
        <div className="newsImg relative shadow-[0px_20px_50px 0p_rgba(0,0,0,0,0.08)]">
          <img
            className="w-full object-cover"
            src={image}
            alt=""
          />
          <div className="newsDate absolute bottom-7 left-6 text-center w-10 rounded-md bg-white">
            <span className="block font-bold text-base">{date}</span>
            <small className="text-xs">{month}</small>
          </div>
        </div>

        <div className="newsContent flex  flex-col gap-3 justify-between w-md p-5 border border-gray-200 rounded-b-lg">
          <ul className="newsMeta flex  gap-4 text-md mb-2.5 list-none">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.1584 11.1753L11.1834 17.1503C11.0286 17.3053 10.8448 17.4282 10.6425 17.5121C10.4402 17.596 10.2233 17.6391 10.0042 17.6391C9.78522 17.6391 9.56834 17.596 9.36601 17.5121C9.16368 17.4282 8.97987 17.3053 8.82508 17.1503L1.66675 10.0003V1.66699H10.0001L17.1584 8.82533C17.4688 9.1376 17.6431 9.56002 17.6431 10.0003C17.6431 10.4406 17.4688 10.8631 17.1584 11.1753V11.1753Z"
                  stroke="#B3B3B3"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.8335 5.83398H5.84183"
                  stroke="#B3B3B3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {tag}
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99984 9.16667C11.8408 9.16667 13.3332 7.67428 13.3332 5.83333C13.3332 3.99238 11.8408 2.5 9.99984 2.5C8.15889 2.5 6.6665 3.99238 6.6665 5.83333C6.6665 7.67428 8.15889 9.16667 9.99984 9.16667Z"
                  stroke="#B3B3B3"
                  stroke-width="1.2"
                />
                <path
                  d="M12.4999 11.667H7.49995C5.19828 11.667 3.13745 13.792 4.65161 15.5245C5.68161 16.7028 7.38495 17.5003 9.99995 17.5003C12.6149 17.5003 14.3174 16.7028 15.3474 15.5245C16.8624 13.7912 14.8008 11.667 12.4999 11.667Z"
                  stroke="#B3B3B3"
                  stroke-width="1.2"
                />
              </svg>
              {author}
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M10.5238 13.7728L9.48206 15.5087C9.43209 15.592 9.36139 15.6609 9.27687 15.7088C9.19234 15.7566 9.09686 15.7818 8.99972 15.7818C8.90258 15.7818 8.8071 15.7566 8.72257 15.7088C8.63804 15.6609 8.56735 15.592 8.51738 15.5087L7.47675 13.7728C7.42671 13.6895 7.35596 13.6206 7.27138 13.5728C7.1868 13.525 7.09128 13.4999 6.99413 13.5H2.8125C2.66332 13.5 2.52024 13.4407 2.41475 13.3352C2.30926 13.2298 2.25 13.0867 2.25 12.9375V3.9375C2.25 3.78832 2.30926 3.64524 2.41475 3.53975C2.52024 3.43426 2.66332 3.375 2.8125 3.375H15.1875C15.3367 3.375 15.4798 3.43426 15.5852 3.53975C15.6907 3.64524 15.75 3.78832 15.75 3.9375V12.9375C15.75 13.0867 15.6907 13.2298 15.5852 13.3352C15.4798 13.4407 15.3367 13.5 15.1875 13.5H11.0059C10.9088 13.5 10.8134 13.5252 10.7289 13.573C10.6445 13.6208 10.5738 13.6896 10.5238 13.7728V13.7728Z"
                  stroke="#B3B3B3"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {comments}
            </li>
          </ul>

          <h3 className="text-xl font-black mb-2.5 leading-none">
            {title}
          </h3>

          <a href="#" className=" flex items-center gap-1 cursor-pointer text-green-600 font-bold">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
            >
              <path
                d="M15.75 6.77539H0.75"
                stroke="#00B307"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.69995 0.75L15.75 6.774L9.69995 12.799"
                stroke="#00B307"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
