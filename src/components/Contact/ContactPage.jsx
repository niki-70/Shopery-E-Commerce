function ContactPage() {
  return (
    <>
      <div className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
          {/* Left Contact Info */}

          <div className="bg-white col-span-1 shadow-md py-8 rounded-lg space-y-8">
            <div className="flex flex-col items-center justify-center px-12 text-center">
              <img src="src/assets/Images/icons/Map Pin (2).png" alt="" />
              <p className="text-gray-600">
                2715 Ash Dr. San Jose, South Dakota 83475
              </p>
            </div>

            <hr />

            <div className="flex flex-col items-center justify-center px-12 text-center">
              <img src="src/assets/Images/icons/Email.png" alt="" />
              <p className="text-gray-600">
                Proxy@gmail.com <br />
                Help.proxy@gmail.com
              </p>
            </div>

            <hr />

            <div className="flex flex-col items-center justify-center px-12 text-center">
              <img src="src/assets/Images/icons/PhoneCall (1).png" alt="" />
              <p className="text-gray-600">
                (219) 555-0114 <br />
                (164) 333-0487
              </p>
            </div>
          </div>

          {/* Contact Form */}

          <div className="bg-white col-span-2 shadow-md p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Just Say Hello!</h2>

            <p className="text-gray-500 mb-6">
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help? Feel free to contact me.
            </p>

            <form className="Space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Template Cookie"
                  className="border p-3 rounded-md w-full focus:outline-green-700"
                />

                <input
                  type="email"
                  placeholder="zakirsoft@gmail.com"
                  className="border p-3 rounded-md w-full focus:outline-green-700"
                />
              </div>

              <input
                type="text"
                placeholder="Hello!"
                className="border my-5 p-3 rounded-md w-full focus:outline-green-700"
              />

              <textarea
                placeholder="Subjects"
                row="4"
                className="border mb-5 p-3 rounded-md w-full focus:outline-green-700"
              ></textarea>

              <button
                type="Submit"
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
