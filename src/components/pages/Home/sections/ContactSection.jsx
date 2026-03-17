import Button from "../../../common/Button/Button";

function ContactSection() {
  return (
    <>
      <div className="contactSection m-10 max-w-6xl max-auto grid    md:grid-cols-[350px_350px_auto] gap-6">
        {/* Location Card */}

        <div className="border border-green-200  rounded mr-10 p-5 pr-0">
          <div className="m-4 ml-0">
            <img src="src/assets/Images/icons/Map Pin (1).png" alt="" />
          </div>
          <div>
            <h4 className="text-xl font-medium mb-3.5 tracking-wide">Our Location</h4>
            <p className="text-sm text-gray-500">
              1901 Thornridge Cir. Shiloh, Washington DC 20020, United States
            </p> 
          </div>
        </div>

        {/* Call Us Card */}

        <div className="border border-green-200 rounded mr-10 p-5">
          <div className=" m-4 ml-0">
            <img src="src/assets/Images/icons/PhoneCall.png " alt="" />
          </div>
          <div>
            <h4 className="text-xl font-medium mb-3.5 tracking-wide">Call Us 24/7</h4>
            <p className="text-green-500 text-2xl">(303) 555-0105</p>
          </div>
        </div>

        {/* Mail Card */}

        <div className="border border-green-200 rounded mr-10 p-5 ">
          <div className="m-4 ml-0">
            <img src="src/assets/Images/icons/maiL 1.png" alt="" />
          </div>
          <div>
            <div>
              <h1 className="font-medium text-xl mb-3.5 tracking-wide">Subscribe Newsletter</h1>
            </div>
            <div className="flex relative">
              <div>
              <input
                className="  border text-sm tracking-wide pl-5 p-2  border-gray-400 rounded-3xl w-xl"
                type="email"
                placeholder="Your email address"
              />
              </div>
              <div className="absolute right-0">
              <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
