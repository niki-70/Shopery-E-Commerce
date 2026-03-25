import Button from "../common/Button/Button";

function NewsLetterModal() {
  return (
    <>
      <div className="grid place-items-center">
        <div className="flex bg-amber-100 rounded-2xl p-4">
          <div>
            <img src="src/assets/Images/BG1.png" alt="" />
          </div>
          <div className="p-8 text-center">
            <div>
              <h2 className="text-5xl font-bold ">
                Subcribe to our <br></br> Newsletter
              </h2>
            </div>

            <div>
              <p className="text-gray-400 text-center mt-5">
                Subscribe to our newlletter and Save your{" "}
                <span className="text-orange-500">
                  {" "}
                  20% <br></br> money
                </span>{" "}
                with discount code today.
              </p>
            </div>

            <div class="flex relative mt-5">
              <div>
                <input
                  className="  border text-sm tracking-wide pl-3 p-2  border-gray-400 rounded-3xl w-80"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div class="absolute right-0">
                <Button>Subscribe</Button>
              </div>
            </div>

            <div className="flex justify-center  mt-20">
              <input type="checkbox" name="" id="" />
              <p className="text-gray-400 ml-0.5"> Do not show this window</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetterModal;
