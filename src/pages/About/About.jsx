import Breadcrumb from "../../../components/common/Breadcrumb/Breadcrumb"

const About = () => {
  return (
        <main className="min-h-screen bg-neutral-100 text-neutral-900">
      <section className="relative h-28 overflow-hidden sm:h-36">
        <img
          src="https://picsum.photos/1600/220?random=11"
          alt="Fresh produce banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 top-1/2 mx-auto w-full max-w-6xl -translate-y-1/2 px-6">
          <Breadcrumb items={[{ label: "Home", href: "#" }, { label: "About" }]} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="grid gap-8 bg-neutral-100 md:grid-cols-2 md:items-center">
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold leading-tight">
              100% Trusted
              <br />
              Organic Food Store
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              Healthy eating is key to your well-being. We source fresh ingredients and deliver
              quality produce with care, every single day.
            </p>
          </div>
          <div className="md:justify-self-end">
            <img
              src="https://picsum.photos/560/360?random=21"
              alt="Farmer with basket of vegetables"
              className="h-65 w-full max-w-140 rounded object-cover sm:h-75"
            />
          </div>
        </div>
      </section>

      <section className="bg-neutral-200/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:py-14 md:grid-cols-2 md:items-center">
          <div>
            <img
              src="https://picsum.photos/640/420?random=31"
              alt="Organic produce in hands"
              className="h-70 w-full rounded object-cover sm:h-85"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-emerald-900">
              100% Trusted
              <br />
              Organic Food Store
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              We focus on natural produce from trusted growers and maintain high standards across
              selection, packaging, and delivery.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "100% Organic Food",
                "Great Support 24/7",
                "Customer Feedback",
                "100% Secure Payment",
                "Free Shipping",
                "100% Organic Food",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-100 text-lime-700">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-neutral-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:py-14 md:grid-cols-2 md:items-center">
        <div className="max-w-md">
          <h2 className="text-3xl font-semibold leading-tight">
            We Delivered, You
            <br />
            Enjoy Your Order
          </h2>
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            Fast delivery and quality assurance make it easy to get daily essentials right at your
            doorstep.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-neutral-600">
            <li>• Fast delivery and secure packaging.</li>
            <li>• Fresh products sourced daily.</li>
            <li>• Friendly support for every order.</li>
          </ul>
          <button
            type="button"
            className="mt-6 rounded-full bg-lime-500 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-lime-600"
          >
            Shop Now
          </button>
        </div>
        <div className="md:justify-self-end">
          <img
            src="https://picsum.photos/560/380?random=41"
            alt="Delivery person with grocery box"
            className="h-70 w-full max-w-140 rounded object-cover sm:h-80"
          />
        </div>
      </section>
    </main>
  )
}

export default About
