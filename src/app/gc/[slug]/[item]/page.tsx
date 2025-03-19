const apiEndpoint = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
import dynamic from "next/dynamic";
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
export default async function Home({ params }: any) {
  const { slug, item } = await params;
  const data = await getProducts(slug, item);
  if (!data) {
    return <div>error</div>;
  }
  const sliderImages: any[] = data[0]?.slider_images || [];
  const maincategory: any[] = data[0]?.maincategory || [];
  const bannercategory: any[] = data[0]?.banner || [];
  const review: any[] = data[0]?.review || [];
  const faqs: any[] = data[0]?.faqs || [];

  return (
    <div className="">
      {sliderImages.length > 0 && (
        <div className="lg:items-center relative py-5 border-gray-200 bg-[#fff0f1]">
          <div className="mx-auto max-w-screen-2xl px-4">
            <ReactSliderSlick content={sliderImages} />
          </div>
        </div>
      )}

      {maincategory.length > 0 && (
        <div className="lg:items-center relative py-5 border-gray-200 bg-[#fff]">
          <div className="mx-auto max-w-screen-2xl px-4">
            <ReactServices content={maincategory} slugurl={slug} />
          </div>
        </div>
      )}

      {bannercategory.length > 0 && (
        <div className="lg:items-center relative py-5 border-gray-200 bg-[#fff0f1]">
          <div className="mx-auto max-w-screen-2xl px-4">
            <ReactOccasionSpecial content={bannercategory} />
          </div>
        </div>
      )}
      {faqs.length > 0 && (
        <div className="lg:items-center relative py-5 border-gray-200 bg-[#fff]">
          <div className="mx-auto max-w-screen-2xl px-4">
            <ReactFaqquestions constent={faqs} />
          </div>
        </div>
      )}
      {review.length > 0 && (
        <div className="lg:items-center relative py-5 border-gray-200 bg-[#fff0f1]">
          <div className="mx-auto max-w-screen-2xl px-4">
            <ReactCustomerTestimonials content={review} />
          </div>
        </div>
      )}
      {/* {home.content && (
        <div className="w-full py-10 max-[1024px]:py-8  p-4 bg-[#fff]">
          <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-2">
            <ReactKnowmore content={home.content} />
          </div>
        </div>
      )} */}
    </div>
  );
}
async function getProducts(slug: any, item: any) {
  const url1 = apiEndpoint + `/gc/${slug}/${item}`;
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
