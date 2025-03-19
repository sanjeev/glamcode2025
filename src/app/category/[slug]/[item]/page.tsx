import { ReactNode } from "react";

const apiEndpoint = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
interface Service {
  discounted_price: ReactNode;
  price: ReactNode;
  time: ReactNode;
  description: any;
  name: string;
  image: string;
  service_image_url: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  duration: string;
  features?: string[];
}

interface Category {
  service: Service[];
}
export default async function Page({ params }: any) {
  const { slug, item } = await params;
  const data = await getProducts(slug, item);
  const name = data && data[0].mainCategory ? data[0].mainCategory.name : "";
  const categories = data && data[0].categories ? data[0].categories : "";

  // Featured services data
  const services = [
    {
      name: "Fruit Facial",
      originalPrice: 1098,
      discountedPrice: 549,
      discount: "50%",
      duration: "60 minutes",
      features: [
        "VLCC five step Facial",
        "For blemish free & radiant complexion",
        "Suitable for all skin types",
      ],
      image:
        "https://admin.glamcode.in/user-uploads/service/97/de7bed6ebcf8efd84fbb02e0fa30d9ad.jpg.webp",
    },
    {
      name: "Anti Tan Facial",
      originalPrice: 1098,
      discountedPrice: 549,
      discount: "50%",
      duration: "60 minutes",
      features: [
        "VLCC five step facial",
        "Reduces tan & heals sun damaged skin",
        "Suitable for all skin types",
      ],
      image:
        "https://admin.glamcode.in/user-uploads/service/97/de7bed6ebcf8efd84fbb02e0fa30d9ad.jpg.webp",
    },
    {
      name: "Red Wine Facial",
      originalPrice: 1198,
      discountedPrice: 599,
      discount: "50%",
      duration: "60 minutes",
      features: [
        "GlamVeda Red wine 6 step facial",
        "Reduces fine lines, pigmentation,dark circles",
        "For all skin types - No Paraben/SLS",
      ],
      image:
        "https://admin.glamcode.in/user-uploads/service/97/de7bed6ebcf8efd84fbb02e0fa30d9ad.jpg.webp",
    },
    {
      name: "Lotus Hydravital Facial",
      originalPrice: 1398,
      discountedPrice: 699,
      discount: "50%",
      duration: "60 minutes",
      features: [
        "Suitable for Normal to Dry skin",
        "Refreshes and revitalizes skin cells",
        "Maintains firmness and skin elasticity",
      ],
      image:
        "https://admin.glamcode.in/user-uploads/service/97/de7bed6ebcf8efd84fbb02e0fa30d9ad.jpg.webp",
    },
  ];

  const mapItems = (items: string[]) => {
    /* {service.features?.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center mt-1 font-bold"
                            >
                              <span className="text-blue-400 mr-1">❄</span>
                              <span className="text-xs text-gray-600">
                                {feature}
                              </span>
                            </div>
                          ))} */

    return items.map((item, index) => {
      return (
        <div key={index} className="flex items-center mt-1 font-bold">
          <span className="text-blue-400 mr-1">❄</span>
          <span className="text-xs text-gray-600">{` ` + item.toString()}</span>
        </div>
      );
    });
  };
  return (
    <div className="bg-[#fff0f1]">
      <h1 className="text-2xl font-bold text-center p-4">{name}</h1>
      {/* {slug}
      {item} */}
      <div className="">
        {/* Categories Section */}
        <div className="bg-purple-500">
          <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-2`">
            <div className="grid grid-cols-7 gap-2 p-4 ">
              {categories.map((category: any, index: number) => (
                <button
                  key={index}
                  className="bg-white py-2 text-purple-500 rounded font-bold text-sm"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-2`">
          <div className="">
            {categories?.length > 0 ? (
              categories.map((category: Category, i: number) => (
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
                  key={i}
                >
                  {category?.service?.map((service: Service, index: number) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg overflow-hidden shadow flex servicesMD mb-5"
                    >
                      <div className="w-1/2 lg:w-2/5">
                        <img
                          src={service?.service_image_url}
                          alt={service.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-1/2 lg:w-3/5 p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold">
                            {service.name}
                          </h3>
                          <button className="bg-purple-500 font-bold px-4 py-1 rounded-full text-sm shadow-md text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                            Add
                          </button>
                        </div>

                        <div className="flex items-center mt-1">
                          <span className="text-purple-500 line-through text-lg font-bold">
                            ₹{service.price}
                          </span>
                          <span className="text-md font-bold ml-1">
                            ₹ {service.discounted_price}
                          </span>
                          <span className="bg-black text-white font-bold text-xs px-2 py-0.5 ml-2 rounded">
                            {service.discount} %
                          </span>
                        </div>

                        <div className="flex items-center mt-2 font-bold">
                          <svg
                            className="w-4 h-4 text-gray-500 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          <span className="text-sm">
                            {service.time} minutes
                          </span>
                        </div>

                        <div className="border-t mt-4 pt-3">
                          {mapItems(
                            service.description
                              .replace(/(<([^>]+)>)/gi, "")
                              .replace(/(?:\r\n|\r|\n)/g, "")
                              .replace(/(?:&nbsp;)/g, "")
                              .replace(/&amp;/g, "&")
                              .toString()
                              .split(".")
                          )}
                        </div>

                        <div className="mt-4 text-right">
                          <button className="font-bold bg-purple-100 px-4 py-2 rounded-full text-sm shadow-md text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p>No categories available</p>
            )}
            {/* {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow flex servicesMD"
              >
                <div className="w-1/2 lg:w-2/5">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-1/2 lg:w-3/5 p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <button className="bg-purple-500 font-bold  px-4 py-1 rounded-full text-sm  shadow-md glow-on-hover bg-gradient-to-r text-white from-pink-500 via-purple-500 to-indigo-500">
                      Add
                    </button>
                  </div>

                  <div className="flex items-center mt-1">
                    <span className="text-purple-500 line-through text-ld font-bold">
                      ₹{service.originalPrice}
                    </span>
                    <span className="  text-md font-bold ml-1">
                      ₹ {service.discountedPrice}
                    </span>
                    <span className="bg-black text-white  font-bold text-xs px-2 py-0.5 ml-2 rounded">
                      {service.discount}
                    </span>
                  </div>

                  <div className="flex items-center mt-2 font-bold">
                    <svg
                      className="w-4 h-4 text-gray-500 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-sm">{service.duration}</span>
                  </div>

                  <div className="border-t mt-4 pt-3 hidden lg:block">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center mt-1 font-bold "
                      >
                        <span className="text-blue-400 mr-1">❄</span>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-right">
                    <button className="font-bold bg-purple-100 px-4 py-2 rounded-full text-sm  shadow-md glow-on-hover bg-gradient-to-r text-white from-pink-500 via-purple-500 to-indigo-500">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
async function getProducts(slug: any, item: any) {
  const url1 = apiEndpoint + `/serviceslocation/${slug}/${item}`;
  const urls = [url1];
  try {
    const headers = {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    };
    const responses = await Promise.all(
      urls.map(async (url) => {
        const resp = await fetch(url, headers);
        if (!resp.ok) {
          throw new Error(
            `Failed to fetch data from ${url}: ${resp.statusText}`
          );
        }
        return await resp.json();
      })
    );
    return responses;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // or handle the error appropriately
  }
}
