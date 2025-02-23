// import Image from "next/image";
import dynamic from "next/dynamic";
const apiEndpoint = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
import Image from "next/image";
const ReactSliderSlick = dynamic(() => import("@/app/components/slider"), {
  loading: () => (
    <div className="w-[100%] h-[429px] bg-gray-200 animate-pulse" />
  ),
});
const ReactServices = dynamic(() => import("@/app/components/homeservices"), {
  loading: () => (
    <div className="w-[100%] h-[500px] bg-gray-200 animate-pulse" />
  ),
});

const ReactOccasionSpecial = dynamic(
  () => import("@/app/components/occasionspecial"),
  {
    loading: () => (
      <div className="w-[100%] h-[500px] bg-gray-200 animate-pulse" />
    ),
  }
);

const ReactCustomerTestimonials = dynamic(
  () => import("@/app/components/customerTestimonials"),
  {
    loading: () => (
      <div className="w-[100%] h-[500px] bg-gray-200 animate-pulse" />
    ),
  }
);
const ReactFaqquestions = dynamic(
  () => import("@/app/components/faqQuestions"),
  {
    loading: () => (
      <div className="w-[100%] h-[700px] bg-gray-200 animate-pulse" />
    ),
  }
);
const ReactKnowmore = dynamic(() => import("@/app/components/knowMore"), {
  loading: () => (
    <div className="w-[100%] h-[700px] bg-gray-200 animate-pulse" />
  ),
});

export default async function Home() {
  const data = await getProducts();

  if (!data) {
    return <div>error</div>;
  }

  const sliderImages = data[0].slider_images || [];
  const maincategory = data[1].maincategory || [];
  const bannercategory = data[1].banner || [];
  const review = data[1].review || [];
  const faqs = data[1].faqs || [];
  const home = data[1].home || {};

  return (
    <div className="">
      <div className="lg:items-center relative py-5 border-gray-200 bg-[#fff0f1]">
        <div className="mx-auto max-w-screen-2xl px-4">
          <ReactSliderSlick content={sliderImages} />
        </div>
      </div>
      <div className="lg:items-center relative py-5 border-gray-200 bg-[#fff]">
        <div className="mx-auto max-w-screen-2xl px-4">
          <ReactServices content={maincategory} />
        </div>
      </div>
      <div className="lg:items-center relative py-5 border-gray-200 bg-[#fff0f1]">
        <div className="mx-auto max-w-screen-2xl px-4">
          <ReactOccasionSpecial content={bannercategory} />
        </div>
      </div>
      <div className="lg:items-center relative py-5 border-gray-200 bg-[#fff]">
        <div className="mx-auto max-w-screen-2xl px-4">
          <ReactFaqquestions constent={faqs} />
        </div>
      </div>
      <div className="lg:items-center relative py-5 border-gray-200 bg-[#fff0f1]">
        <div className="mx-auto max-w-screen-2xl px-4">
          <ReactCustomerTestimonials content={review} />
        </div>
      </div>
      <div className="w-full py-10 max-[1024px]:py-8  p-4 bg-[#fff]">
        <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-2">
          <ReactKnowmore content={home.content} />
        </div>
      </div>

      <div className="lg:items-center relative py-5 border-gray-200 bg-[#fff0f1]">
        <div className="mx-auto max-w-screen-2xl px-4 flex justify-center gap-6">
          <div className="w-full py-10 max-[1024px]:py-8 shadow-md p-4 bg-[#fff]">
            <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-2">
              <div className="flex justify-center flex-wrap gap-2 gap-y-7  md:gap-[12px] 2xl:gap-[36px]">
                <div className="flex flex-col text-center  w-[171px] md:w-[296px] ">
                  <dt className="order-last text-lg font-bold text-gray-700 ">
                    20+ Years'
                  </dt>
                  <dt className="order-last text-lg font-bold text-gray-500">
                    Credibility
                  </dt>

                  <dd
                    className={` text-4xl font-extrabold text-blue-600 md:text-5xl setCssba  `}
                  >
                    <Image
                      alt="20+ Years"
                      className="m-auto"
                      src="/images/years.png"
                      width={80}
                      height={80}
                      priority
                    />
                  </dd>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-10 max-[1024px]:py-8 shadow-md p-4 bg-[#fff]">
            <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-2">
              <div className="flex justify-center flex-wrap gap-2 gap-y-7  md:gap-[12px] 2xl:gap-[36px]">
                <div className="flex flex-col text-center  w-[171px] md:w-[296px] ">
                  <dt className="order-last text-lg font-bold text-gray-700">
                    No Hidden
                  </dt>
                  <dt className="order-last text-lg font-bold text-gray-500">
                    Charges
                  </dt>

                  <dd
                    className={` text-4xl font-extrabold text-blue-600 md:text-5xl setCssba  `}
                  >
                    <Image
                      alt="20+ Years"
                      className="m-auto"
                      src="/images/no-hidden.png"
                      width={80}
                      height={80}
                      priority
                    />
                  </dd>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-10 max-[1024px]:py-8 shadow-md p-4 bg-[#fff]">
            <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-2">
              <div className="flex justify-center flex-wrap gap-2 gap-y-7  md:gap-[12px] 2xl:gap-[36px]">
                <div className="flex flex-col text-center  w-[171px] md:w-[296px] ">
                  <dt className="order-last text-lg font-bold text-gray-700">
                    Responsive
                  </dt>
                  <dt className="order-last text-lg font-bold text-gray-500">
                    Customer Support
                  </dt>

                  <dd
                    className={` text-4xl font-extrabold text-blue-600 md:text-5xl setCssba  `}
                  >
                    {/* <img
                      alt="Customer Support"
                      className="m-auto"
                      src="/images/responsive.png"
                      style={{ width: "70px", height: "70px" }}
                    /> */}
                    <Image
                      alt="20+ Years"
                      className="m-auto"
                      src="/images/responsive.png"
                      width={80}
                      height={80}
                      priority
                    />
                  </dd>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-10 max-[1024px]:py-8 shadow-md p-4 bg-[#fff]">
            <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-2">
              <div className="flex justify-center flex-wrap gap-2 gap-y-7  md:gap-[12px] 2xl:gap-[36px]">
                <div className="flex flex-col text-center  w-[171px] md:w-[296px] ">
                  <dt className="order-last text-lg font-bold text-gray-700">
                    100% Safe
                  </dt>
                  <dt className="order-last text-lg font-bold text-gray-500">
                    & Secure Payment
                  </dt>

                  <dd
                    className={` text-4xl font-extrabold text-blue-600 md:text-5xl setCssba  `}
                  >
                    {/* <img
                      alt="100% Safe"
                      src="/images/secure_payment.png"
                      className="m-auto"
                      style={{ width: "70px", height: "70px" }}
                    /> */}
                    <Image
                      alt="20+ Years"
                      className="m-auto"
                      src="/images/secure_payment.png"
                      width={80}
                      height={80}
                      priority
                    />
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function getProducts() {
  const urls = [apiEndpoint + `/allslider`, apiEndpoint + `/homedata`];

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
