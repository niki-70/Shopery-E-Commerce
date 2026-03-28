import Button from "../common/Button/Button";

function SaleCard({saleName, off}) {
  return (
    <>
      <div className="relative m-10 w-max place-items-center">
        <div className="w-full">
          <img src="src/assets/Images/Image (1).png" alt="" />
        </div>
        <div className="absolute top-7">
          <p className="mb-2.5">{saleName}</p>
          <h2 className="font-bold mb-3 text-green-600 text-3xl">{off}</h2>
          <Button wSmall variant="white" icon={
            <svg className='text-green-600 w-3' xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                            <path d="M15.75 6.7749H0.75" stroke="#00B307" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.70001 0.75L15.75 6.774L9.70001 12.799" stroke="#00B307" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
          }>Shop Now</Button>
        </div>
      </div>
    </>
  );
}

export default SaleCard;
