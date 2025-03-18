"use client";
import dynamic from "next/dynamic";
import { useEffect, useState, use } from "react";

const apiEndpoint = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;

// ✅ Dynamically imported components with loading placeholders
const ReactSliderSlick = dynamic(() => import("@/app/components/slider"), {
  loading: () => <div className="w-full h-[429px] bg-gray-200 animate-pulse" />,
});
const ReactServices = dynamic(() => import("@/app/components/homeservices"), {
  loading: () => <div className="w-full h-[500px] bg-gray-200 animate-pulse" />,
});
const ReactOccasionSpecial = dynamic(
  () => import("@/app/components/occasionspecial"),
  {
    loading: () => (
      <div className="w-full h-[500px] bg-gray-200 animate-pulse" />
    ),
  }
);
const ReactCustomerTestimonials = dynamic(
  () => import("@/app/components/customerTestimonials"),
  {
    loading: () => (
      <div className="w-full h-[500px] bg-gray-200 animate-pulse" />
    ),
  }
);
const ReactFaqquestions = dynamic(
  () => import("@/app/components/faqQuestions"),
  {
    loading: () => (
      <div className="w-full h-[700px] bg-gray-200 animate-pulse" />
    ),
  }
);
const ReactKnowmore = dynamic(() => import("@/app/components/knowMore"), {
  loading: () => <div className="w-full h-[700px] bg-gray-200 animate-pulse" />,
});

export default function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Unwrap `params` using `use()`
  const { slug } = use(params);

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      if (!slug) return;
      const response = await getProducts(slug);
      setData(response);
    }
    fetchData();
  }, [slug]);

  if (!data)
    return (
      <div>
        <div className="w-full h-[400vh] bg-gray-200 animate-pulse" />
      </div>
    );

  // Extracting data safely
  const sliderImages = data?.slider_images || [];
  const maincategory = data?.maincategory || [];
  const bannercategory = data?.banner || [];
  const review = data?.review || [];
  const faqs = data?.faqs || [];
  const home = data?.home?.[0] || {};
  return (
    <div>
      {sliderImages.length > 0 && (
        <section className="py-5 bg-[#fff0f1]">
          <div className="mx-auto max-w-screen-2xl px-4">
            <ReactSliderSlick content={sliderImages} />
          </div>
        </section>
      )}

      {maincategory.length > 0 && (
        <section className="py-5 bg-[#fff]">
          <div className="mx-auto max-w-screen-2xl px-4">
            <ReactServices content={maincategory} slugurl={slug} />
          </div>
        </section>
      )}

      {bannercategory.length > 0 && (
        <section className="py-5 bg-[#fff0f1]">
          <div className="mx-auto max-w-screen-2xl px-4">
            <ReactOccasionSpecial content={bannercategory} />
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="py-5 bg-[#fff]">
          <div className="mx-auto max-w-screen-2xl px-4">
            <ReactFaqquestions content={faqs} />
          </div>
        </section>
      )}

      {review.length > 0 && (
        <section className="py-5 bg-[#fff0f1]">
          <div className="mx-auto max-w-screen-2xl px-4">
            <ReactCustomerTestimonials content={review} />
          </div>
        </section>
      )}

      {home.content && (
        <section className="py-10 p-4 bg-[#fff]">
          <div className="mx-auto max-w-screen-2xl px-2">
            <ReactKnowmore content={home.content} />
          </div>
        </section>
      )}
    </div>
  );
}

// ✅ Fetching data inside a function
async function getProducts(slug: string) {
  if (!slug) return null;
  const url = `${apiEndpoint}/loctionSlug/${slug}`;
  console.log(url);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok)
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
