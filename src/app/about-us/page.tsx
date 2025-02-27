export default async function Aboutus() {
  const deliveryLocations = [
    "Delhi",
    "Lucknow",
    "Noida",
    "Gurgaon",
    "Ghaziabad",
  ];

  return (
    <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-2">
      {/* Header Section */}
      <div className="mb-12">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 mt-16">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/aboutus.png"
              alt="Chocolate cake with sparkler"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Text */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold mb-8">Welcome To GlamCode</h1>
            <p className="text-gray-700">
              Let the Skin Blush Glam Code is an Upscale Fully-Equipped Home
              Salon Services start-up, initiated by mother and daughter in law
              duo. They travelled many places, visited named parlours, took home
              services and subsequently, decided to incorporate the basic
              intricacies of Luxury Salon in Home Salon for comfortable,
              pampering and delightful experience.
            </p>
            <p className="text-gray-700">
              Day by Day people want to Experiment with their Look. Exquisite
              Skin Care, Makeup and bridal Services at door steps is the need of
              the hour.
            </p>
            <p className="text-gray-700">
              The venture understands customers requirement and at the same time
              see a bigger picture of community transformation by creating jobs
              for women. Research shows that women will spend most of their
              income on health, nutrition, and education for their families.
              Turning women into breadwinners not only builds self-esteem, but
              improves their standing in the community and enables them to pool
              resources and improve infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Delivery Options */}
      {/* <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          At Yummy Cake, you can choose different delivery options:
        </h2>
        <ul className="space-y-2">
          {deliveryOptions.map((option, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="text-pink-500 mr-2">▶</span>
              {option.time}
            </li>
          ))}
        </ul>
      </div> */}

      {/* Quality Statement */}
      {/* <div className="mb-12">
        <p className="text-gray-700 mb-4">
          To make the cake fresh and lip-smacking, we use ingredients from
          different brands like Amul, and Vizyon, Pillsbury, D'lecta cream
          cheese, and many more.
        </p>
        <p className="text-gray-700">
          Our delivery team comprises trained professionals who know the
          cake-handling technique. From sourcing ingredients to delivering the
          cake to your doorstep, our team takes utmost care of hygiene.
        </p>
      </div> */}

      {/* Values Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/images/Group1116601881.svg"
            alt="Various cupcakes display"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          {values.map((value, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-2">
                {index + 1}. {value.title}
              </h3>
              <p className="text-gray-700 pl-6">{value.description}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Delivery Locations */}
      <div className="mt-4 mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Our Home Salon Services locations are:
        </h2>
        <div className="flex flex-wrap gap-2">
          {deliveryLocations.map((location, index) => (
            <span
              key={index}
              className="text-blue-500 hover:text-blue-700 cursor-pointer"
            >
              {location}
              {index < deliveryLocations.length - 1 && (
                <span className="text-gray-400 ml-2">|</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Buttons */}
      {/* <div className="fixed bottom-6 right-6 space-y-4">
        <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
          <span className="text-2xl">📞</span>
        </button>
        <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
          <span className="text-2xl">💬</span>
        </button>
      </div> */}
    </div>
  );
}
