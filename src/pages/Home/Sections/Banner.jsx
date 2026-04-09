
import Button from "../../../common/Button/Button";

const Banner = () => {
  return (
    <div className="container mx-auto flex justify-center">
      <div className="bg-[url(assets/Images/sections/milk.png)] bg-cover grid grid-cols-2 p-5 bg-no-repeat m-2 rounded-b-lg">
        <div className="text-white">
          <h2 className="text-2xl font-bold">
            100% Fresh <br /> Cow Milk
          </h2>
          <p className="text-xs font-extralight my-2.5">
            Strating at <span className="font-bold text-sm">$14.99</span>
          </p>
          <Button
            wSmall
            variant="white"
            icon={
              <svg
                className="text-green-600 w-3"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
              >
                <path
                  d="M15.75 6.7749H0.75"
                  stroke="#00B307"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.70001 0.75L15.75 6.774L9.70001 12.799"
                  stroke="#00B307"
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
        <div></div>
      </div>
      <div className="bg-[url(assets/Images/sections/drink.png)] bg-cover grid grid-cols-2 p-5 bg-no-repeat m-2 rounded-b-lg">
        <div></div>
        <div className="text-black">
          <p className="text-xs font-extralight ">DRINK SALE</p>
          <h2 className="text-2xl font-bold my-2.5">
            Water & <br /> Soft Drink
          </h2>
          <Button
            wSmall
            variant="white"
            icon={
              <svg
                className="text-green-600 w-3"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
              >
                <path
                  d="M15.75 6.7749H0.75"
                  stroke="#00B307"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.70001 0.75L15.75 6.774L9.70001 12.799"
                  stroke="#00B307"
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
      </div>
      <div className="bg-[url(assets/Images/sections/dryfruits.png)] bg-cover grid grid-cols-2 p-5 bg-no-repeat m-2 rounded-b-lg">
        <div className="text-black">
          <p className="text-xs font-extralight ">100% ORGANIC</p>
          <h2 className="text-2xl font-bold my-2.5">
            Quick
            <br /> Breakfast
          </h2>
          <Button
            wSmall
            variant="white"
            icon={
              <svg
                className="text-green-600 w-3"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
              >
                <path
                  d="M15.75 6.7749H0.75"
                  stroke="#00B307"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.70001 0.75L15.75 6.774L9.70001 12.799"
                  stroke="#00B307"
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
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
