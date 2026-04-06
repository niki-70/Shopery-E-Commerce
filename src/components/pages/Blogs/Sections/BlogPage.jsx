import Button from "../../../common/Button/Button";
import comments from "../../../../assets/Data/comments";
import Comments from "../../../common/Comments/Comments";
import Filters from "../../../Filters/Filters";

function BlogPage() {
  return (
    <div className="container mx-auto flex">
      <div className="newsCard p-10">
        {/* <!-- CARD 1 --> */}

        <div className="newsCard gap-8">
          <div className="newsImg shadow-[0px_20px_50px 0p_rgba(0,0,0,0,0.08)]">
            <img
              className="w-full object-cover"
              src="src/assets/Images/blogs/FrameImage.png"
              alt=""
            />
          </div>

          <div className="newsContent flex  flex-col gap-3 justify-between p-5 border border-gray-200 rounded-b-lg">
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
                    stroke="#00B307"
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
                food
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
                    stroke="#00B307"
                    stroke-width="1.2"
                  />
                  <path
                    d="M12.4999 11.667H7.49995C5.19828 11.667 3.13745 13.792 4.65161 15.5245C5.68161 16.7028 7.38495 17.5003 9.99995 17.5003C12.6149 17.5003 14.3174 16.7028 15.3474 15.5245C16.8624 13.7912 14.8008 11.667 12.4999 11.667Z"
                    stroke="#B3B3B3"
                    stroke-width="1.2"
                  />
                </svg>
                By Admin
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
                    stroke="#00B307"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                65 Comments
              </li>
            </ul>

            <h3 className="text-3xl font-black mb-2.5 leading-none">
              Maecenas tempor urna sed quam mollis, a placerat <br /> dui
              fringill Suspendisse.
            </h3>
          </div>

          <div className="pt-10">
            <div className="flex justify-between">
              <div className="flex">
                <img
                  src="src/assets/Images/blogs/profile.png"
                  className="rounded-full w-15 mr-2"
                  alt=""
                />
                <div>
                  <div className="font-black text-xl">Cameron Williamson</div>
                  <div className="flex gap-1 mt-2">
                    <p className="text-gray-400">4 April, 2021</p>
                    <p className="text-gray-400">•</p>
                    <p className="text-gray-400">6 min read</p>
                  </div>
                </div>
              </div>

              <div className="flex place-items-center">
                <div className="group/fb mr-3 p-2 hover:bg-green-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      className="group-hover/fb:fill-white"
                      d="M11.9978 2.98875H13.641V0.12675C13.3575 0.08775 12.3825 0 11.247 0C8.87776 0 7.25476 1.49025 7.25476 4.22925V6.75H4.64026V9.9495H7.25476V18H10.4603V9.95025H12.969L13.3673 6.75075H10.4595V4.5465C10.4603 3.62175 10.7093 2.98875 11.9978 2.98875Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </div>
                <div className="group/fb mr-3 p-2 hover:bg-green-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      className="group-hover/fb:fill-white"
                      d="M18 3.41888C17.3306 3.7125 16.6174 3.90713 15.8737 4.00163C16.6388 3.54488 17.2226 2.82713 17.4971 1.962C16.7839 2.38725 15.9964 2.68763 15.1571 2.85525C14.4799 2.13413 13.5146 1.6875 12.4616 1.6875C10.4186 1.6875 8.77387 3.34575 8.77387 5.37863C8.77387 5.67113 8.79862 5.95238 8.85938 6.22013C5.7915 6.0705 3.07687 4.60013 1.25325 2.36025C0.934875 2.91263 0.748125 3.54488 0.748125 4.2255C0.748125 5.5035 1.40625 6.63638 2.38725 7.29225C1.79437 7.281 1.21275 7.10888 0.72 6.83775C0.72 6.849 0.72 6.86363 0.72 6.87825C0.72 8.6715 1.99912 10.161 3.6765 10.5041C3.37612 10.5863 3.04875 10.6256 2.709 10.6256C2.47275 10.6256 2.23425 10.6121 2.01038 10.5626C2.4885 12.024 3.84525 13.0984 5.4585 13.1333C4.203 14.1154 2.60888 14.7071 0.883125 14.7071C0.5805 14.7071 0.29025 14.6936 0 14.6565C1.63462 15.7106 3.57188 16.3125 5.661 16.3125C12.4515 16.3125 16.164 10.6875 16.164 5.81175C16.164 5.64863 16.1584 5.49113 16.1505 5.33475C16.8829 4.815 17.4982 4.16588 18 3.41888Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </div>
                <div className="group/fb mr-3 p-2 hover:bg-green-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      className="group-hover/fb:fill-white"
                      d="M9.24465 0C4.3113 0 1.68768 3.16139 1.68768 6.60855C1.68768 8.20724 2.58097 10.2008 4.01091 10.8331C4.22805 10.931 4.34618 10.8894 4.39455 10.688C4.43731 10.535 4.62519 9.79807 4.71632 9.45042C4.74445 9.33904 4.72982 9.24229 4.63982 9.13766C4.16504 8.58864 3.78815 7.58847 3.78815 6.65017C3.78815 4.24594 5.69961 1.91146 8.95213 1.91146C11.7648 1.91146 13.7325 3.73854 13.7325 6.35204C13.7325 9.30529 12.1698 11.3484 10.1391 11.3484C9.01514 11.3484 8.1781 10.4663 8.44361 9.37505C8.76425 8.07561 9.39315 6.6783 9.39315 5.74113C9.39315 4.90072 8.91838 4.20544 7.94859 4.20544C6.80441 4.20544 5.87625 5.33837 5.87625 6.85943C5.87625 7.82585 6.21826 8.47838 6.21826 8.47838C6.21826 8.47838 5.08646 13.0506 4.87608 13.9045C4.52056 15.3502 4.92445 17.6914 4.95933 17.8928C4.98071 18.0042 5.10559 18.0391 5.17534 17.9479C5.28672 17.8017 6.65478 15.8497 7.03842 14.4389C7.17793 13.9248 7.75058 11.84 7.75058 11.84C8.12747 12.5207 9.2154 13.0911 10.3742 13.0911C13.8214 13.0911 16.3122 10.0613 16.3122 6.30141C16.2998 2.69675 13.2149 0 9.24465 0Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </div>
                <div className="group/fb mr-3 p-2 hover:bg-green-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_4496_6931)">
                      <path
                        className="group-hover/fb:fill-white"
                        d="M17.9824 5.29205C17.9402 4.33564 17.7855 3.67812 17.564 3.10836C17.3354 2.50359 16.9838 1.96213 16.5231 1.51201C16.073 1.05489 15.528 0.699691 14.9302 0.474702C14.3571 0.253147 13.703 0.0984842 12.7466 0.0563159C11.7831 0.0105764 11.4772 0 9.03336 0C6.58953 0 6.28364 0.0105764 5.32366 0.0527447C4.36725 0.0949129 3.70973 0.249713 3.14011 0.471131C2.5352 0.699691 1.99374 1.05132 1.54363 1.51201C1.08651 1.96213 0.731444 2.50716 0.506318 3.10493C0.284763 3.67812 0.1301 4.33207 0.087932 5.28848C0.0421926 6.25203 0.0316162 6.55792 0.0316162 9.00176C0.0316162 11.4456 0.0421926 11.7515 0.0843608 12.7115C0.126529 13.6679 0.281329 14.3254 0.502884 14.8952C0.731444 15.4999 1.08651 16.0414 1.54363 16.4915C1.99374 16.9486 2.53877 17.3038 3.13654 17.5288C3.70973 17.7504 4.36368 17.905 5.32022 17.9472C6.28007 17.9895 6.58609 17.9999 9.02993 17.9999C11.4738 17.9999 11.7797 17.9895 12.7396 17.9472C13.696 17.905 14.3536 17.7504 14.9232 17.5288C16.1329 17.0611 17.0893 16.1047 17.557 14.8952C17.7784 14.322 17.9332 13.6679 17.9754 12.7115C18.0175 11.7515 18.0281 11.4456 18.0281 9.00176C18.0281 6.55792 18.0245 6.25203 17.9824 5.29205ZM16.3614 12.6411C16.3227 13.5202 16.175 13.9949 16.052 14.3114C15.7495 15.0956 15.1271 15.7179 14.343 16.0204C14.0265 16.1434 13.5484 16.2911 12.6727 16.3297C11.7233 16.372 11.4386 16.3824 9.03693 16.3824C6.63527 16.3824 6.34696 16.372 5.40099 16.3297C4.52191 16.2911 4.04721 16.1434 3.73074 16.0204C3.34052 15.8761 2.98531 15.6476 2.697 15.3487C2.39812 15.0568 2.16956 14.7052 2.02533 14.315C1.90226 13.9985 1.75461 13.5202 1.71601 12.6447C1.6737 11.6953 1.66326 11.4104 1.66326 9.00876C1.66326 6.60709 1.6737 6.31878 1.71601 5.37295C1.75461 4.49387 1.90226 4.01917 2.02533 3.7027C2.16956 3.31234 2.39812 2.95727 2.70058 2.66883C2.99232 2.36994 3.34395 2.14138 3.73431 1.99729C4.05078 1.87422 4.52905 1.72656 5.40456 1.68783C6.35396 1.64566 6.63884 1.63508 9.04037 1.63508C11.4456 1.63508 11.7303 1.64566 12.6763 1.68783C13.5554 1.72656 14.0301 1.87422 14.3466 1.99729C14.7368 2.14138 15.092 2.36994 15.3803 2.66883C15.6792 2.96071 15.9077 3.31234 16.052 3.7027C16.175 4.01917 16.3227 4.49731 16.3614 5.37295C16.4036 6.32236 16.4142 6.60709 16.4142 9.00876C16.4142 11.4104 16.4036 11.6917 16.3614 12.6411Z"
                        fill="#4D4D4D"
                      />
                      <path
                        className="group-hover/fb:fill-white"
                        d="M9.03334 4.37793C6.48058 4.37793 4.40939 6.44898 4.40939 9.00188C4.40939 11.5548 6.48058 13.6258 9.03334 13.6258C11.5862 13.6258 13.6573 11.5548 13.6573 9.00188C13.6573 6.44898 11.5862 4.37793 9.03334 4.37793ZM9.03334 12.0013C7.37724 12.0013 6.0339 10.6581 6.0339 9.00188C6.0339 7.34564 7.37724 6.00244 9.03334 6.00244C10.6896 6.00244 12.0328 7.34564 12.0328 9.00188C12.0328 10.6581 10.6896 12.0013 9.03334 12.0013Z"
                        fill="#4D4D4D"
                      />
                      <path
                        className="group-hover/fb:fill-white"
                        d="M14.9198 4.19521C14.9198 4.79133 14.4364 5.27469 13.8401 5.27469C13.244 5.27469 12.7607 4.79133 12.7607 4.19521C12.7607 3.59894 13.244 3.11572 13.8401 3.11572C14.4364 3.11572 14.9198 3.59894 14.9198 4.19521Z"
                        fill="#4D4D4D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4496_6931">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="group/fb mr-3 p-2 hover:bg-green-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="#4D4D4D"
                  >
                    <path
                      d="M5.83331 6.66667C4.94926 6.66667 4.10141 7.01786 3.47629 7.64298C2.85117 8.2681 2.49998 9.11594 2.49998 10C2.49998 10.8841 2.85117 11.7319 3.47629 12.357C4.10141 12.9821 4.94926 13.3333 5.83331 13.3333H7.49998C7.72099 13.3333 7.93295 13.4211 8.08923 13.5774C8.24551 13.7337 8.33331 13.9457 8.33331 14.1667C8.33331 14.3877 8.24551 14.5996 8.08923 14.7559C7.93295 14.9122 7.72099 15 7.49998 15H5.83331C4.50723 15 3.23546 14.4732 2.29778 13.5355C1.3601 12.5979 0.833313 11.3261 0.833313 10C0.833313 8.67392 1.3601 7.40215 2.29778 6.46447C3.23546 5.52678 4.50723 5 5.83331 5H7.49998C7.72099 5 7.93295 5.0878 8.08923 5.24408C8.24551 5.40036 8.33331 5.61232 8.33331 5.83333C8.33331 6.05435 8.24551 6.26631 8.08923 6.42259C7.93295 6.57887 7.72099 6.66667 7.49998 6.66667H5.83331ZM11.6666 5.83333C11.6666 5.61232 11.7544 5.40036 11.9107 5.24408C12.067 5.0878 12.279 5 12.5 5H14.1666C15.4927 5 16.7645 5.52678 17.7022 6.46447C18.6399 7.40215 19.1666 8.67392 19.1666 10C19.1666 11.3261 18.6399 12.5979 17.7022 13.5355C16.7645 14.4732 15.4927 15 14.1666 15H12.5C12.279 15 12.067 14.9122 11.9107 14.7559C11.7544 14.5996 11.6666 14.3877 11.6666 14.1667C11.6666 13.9457 11.7544 13.7337 11.9107 13.5774C12.067 13.4211 12.279 13.3333 12.5 13.3333H14.1666C15.0507 13.3333 15.8985 12.9821 16.5237 12.357C17.1488 11.7319 17.5 10.8841 17.5 10C17.5 9.11594 17.1488 8.2681 16.5237 7.64298C15.8985 7.01786 15.0507 6.66667 14.1666 6.66667H12.5C12.279 6.66667 12.067 6.57887 11.9107 6.42259C11.7544 6.26631 11.6666 6.05435 11.6666 5.83333ZM5.83331 10C5.83331 9.77899 5.92111 9.56702 6.07739 9.41074C6.23367 9.25446 6.44563 9.16667 6.66665 9.16667H13.3333C13.5543 9.16667 13.7663 9.25446 13.9226 9.41074C14.0788 9.56702 14.1666 9.77899 14.1666 10C14.1666 10.221 14.0788 10.433 13.9226 10.5893C13.7663 10.7455 13.5543 10.8333 13.3333 10.8333H6.66665C6.44563 10.8333 6.23367 10.7455 6.07739 10.5893C5.92111 10.433 5.83331 10.221 5.83331 10Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <hr className="my-7 text-gray-400" />
          </div>

          <div>
            <div className="font-black text-xl ">
              Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat
              dolor at scelerisque <br /> imperdiet. Phasellus tristique felis
              dolor.
            </div>
            <p className="text-gray-400 text-xl py-5">
              Maecenas elementum in risus sed condimentum. Duis convallis ante
              ac tempus maximus. Fusce <br /> malesuada sed velit ut dictum.
              Morbi faucibus vitae orci at euismod. Integer auctor augue in{" "}
              <br /> erat vehicula, quis fermentum ex finibus.
            </p>

            <p className="text-gray-400 text-xl ">
              Mauris pretium elit a dui pulvinar, in ornare sapien euismod.
              Nullam interdum nisl ante, id feugiat <br /> quam euismod commodo.
              Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim
              justo, at <br /> fermentum turpis. Sed molestie, ligula ut
              molestie ultrices, tellus ligula viverra neque, malesuada <br />{" "}
              consectetur diam sapien volutpat risus. Quisque eget tortor
              lobortis, facilisis metus eu, <br /> elementum est. Nunc sit amet
              erat quis ex convallis suscipit. ur ridiculus mus.
            </p>
          </div>

          <div className="flex py-5 gap-3">
            <img src="src/assets/Images/blogs/image.png" alt="" />
            <img src="src/assets/Images/blogs/image1.png" alt="" />
          </div>

          <p className="text-gray-400 text-xl">
            Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis
            vehicula ut, vestibulum ut <br /> mauris. Nullam non felis varius
            dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem{" "}
            <br /> sed luctus. Proin iaculis euismod metus non sollicitudin.
            Duis vel luctus lacus. Nullam faucibus <br /> iaculis convallis. In
            ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer
            accumsan arcu <br /> nec faucibus ultricies.
          </p>
        </div>

        <div className="relative  w-fit">
          <div className="w-full">
            <img src="src/assets/Images/blogs/Bannar.png" alt="" />
          </div>
          <div>
            <div className="absolute top-15 left-20">
              <p className="mb-1 text-gray-400">SUMMER SALES</p>
              <h2 className="font-bold mb-5 text-white text-3xl">
                Fresh Fruit
              </h2>
              <Button
                icon={
                  <svg
                    className="text-white w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                  >
                    <path
                      d="M15.75 6.7749H0.75"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.70001 0.75L15.75 6.774L9.70001 12.799"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              >
                Shop Now
              </Button>
            </div>

            <div className="absolute top-20 left-70 bg-gray-900 rounded-full w-20 h-20 place-items-center pt-2">
              <p className="text-gray-400 text-sm">UP TO</p>
              <h4 className="font-bold text-xl text-orange-400 ">56%</h4>
              <p className="text-gray-400">off</p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl py-10 ">
          <div className="font-black text-3xl pb-3">Leave a Comment</div>

          <div className=" mb-4.5 grid grid-cols-2">
            <div>
              <p className="text-xl pb-1">First Name</p>
              <input
                className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-md"
                type="text"
                placeholder="Full Name"
              />
            </div>

            <div>
              <p className="text-xl pb-1">Last Name</p>
              <input
                className=" p-3 border text-lg tracking-w border-gray-300 rounded-md w-md"
                type="Password"
                placeholder="Password"
              />
            </div>

            <div>
              <p className="text-xl pt-5 pb-1">Message</p>
              <textarea
                className="p-8 pt-3 border text-lg tracking-w border-gray-300 rounded-md w-full"
                name=""
                id=""
                value=""
                placeholder="Write your comment here…"
              ></textarea>
            </div>
          </div>
          <div className="flex gap-2">
            <input className="w-5" type="checkbox" name="" id="" />
            <div className="text-gray-400 text-xl">
              Save my name and email in this browser for the next time I
              comment.
            </div>
          </div>
        </div>

        <Button>Post Comments</Button>
        <div className="mt-15">
          <div className="font-bold text-4xl">Comments</div>
          {comments.map((item) => [
            <Comments
              key={item.id}
              name={item.name}
              msg={item.msg}
              pfp={item.pfp}
            />,
          ])}
          <button class="text-green-700 px-4 py-2 my-5 bg-green-100  rounded-3xl cursor-pointer font-medium">
            Load More
          </button>
        </div>
      </div>

      <Filters />
    </div>
  );
}

export default BlogPage;
