export default async function Contactus() {
  return (
    <>
      <div className="lg:items-center relative py-5 border-gray-200 mb-5">
        <div className="mx-auto max-w-screen-2xl px-4">
          <img src="/images/contact.svg" alt="" />
        </div>
      </div>
      <div className="lg:items-center relative py-5 border-gray-200 mt-5 mb-5  bg-[#F3F6F8]">
        <div className="mx-auto max-w-screen-2xl p-6 flex flex-col md:flex-row gap-8">
          {/* Contact Information Section */}
          <div className="md:w-1/3 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4">
              <div className="bg-pink-50 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Phone Number</h3>
                <p className="text-gray-600">+91-812-7111-333</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4">
              <div className="bg-pink-50 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Email Address</h3>
                <p className="text-gray-600">glamourminstry@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4">
              <div className="bg-pink-50 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-600">
                  3/34, Vineet Khand Gomti Nagar, Lucknow
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="md:w-2/3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-2">Leave Us a Message</h2>
              <p className="text-gray-600 mb-6">
                We would love to hear from you. Drop us a line or Call with your
                queries, feedback or concerns
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Full Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your Email Address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your Contact Number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Please tell us"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Enter your Message"
                    className="w-full min-h-[160px] px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#a854fc] text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:items-center relative py-5 border-gray-200 mt-5 mb-5 ">
        <h2 className="text-center font-[nunito] text-[36px] mb-7 font-bold">
          Find Us on Google Map
        </h2>
        <div className="mx-auto max-w-screen-2xl px-4">
          <img src="/images/Rectangl16641.svg" alt="" />
        </div>
      </div>
    </>
  );
}
