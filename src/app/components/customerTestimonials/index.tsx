"use client";
import Slider from "react-slick";
import { useState } from "react";

export default function CustomerTestimonials({ content }: any) {
  const settings = {
    className: "lightbox-slide",
    arrows: true,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    fade: false,
    variableWidth: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [expandedItems, setExpandedItems] = useState<boolean[]>(
    Array(content?.length).fill(false)
  );

  // Toggle the expanded state of a specific review
  const toggleText = (index: number) => {
    setExpandedItems((prevExpandedItems) =>
      prevExpandedItems.map(
        (item, i) => (i === index ? !item : item) // Toggle only the clicked item
      )
    );
  };

  // Function to add ellipsis to text
  const add3Dots = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  return (
    <div className="mt-8 mb-8">
      <p className="text-3xl font-bold text-[#000] text-center mb-4">
        Customer Testimonials
      </p>
      <section className="w-full">
        <div className="mx-auto max-w-screen-2xl p-4 ">
          <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4">
            <Slider {...settings}>
              {content?.map((slide: any, index: any) => {
                return (
                  <div key={index} className="p-2">
                    <blockquote className=" p-6 sm:p-8 bg-[#ffffff] rounded-lg shadow-md">
                      <div className="flex items-center gap-4">
                        <img
                          alt={slide.name}
                          src={slide.reviews_image_url}
                          className="h-14 w-14 rounded-full object-cover"
                        />

                        <div>
                          <p className="text-lg font-medium text-gray-800">
                            {slide.name}
                          </p>
                          {/* <p className="text-sm text-gray-500">4/12/2023</p> */}

                          <div className="flex  gap-0.5 text-green-500">
                            {[1, 2, 3, 4, 5].map((x, i) => (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="#FFC107"
                                key={i}
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="min-h-[50px] mb-2 mt-3 leading-5 font-[nunito] text-left text-[16px] font-normal text-[#424242]-400 max-[640px]:text[14px]">
                        {slide.description.length > 100 ? (
                          <>
                            {" "}
                            {
                              expandedItems[index]
                                ? slide.description // Show full text when expanded
                                : add3Dots(slide.description, 19) // Show truncated text with ellipsis
                            }
                            &nbsp;
                            {/* Read More/Less Button */}
                            <button
                              onClick={() => toggleText(index)}
                              className="text-blue-600 hover:underline  inline-block"
                            >
                              {expandedItems[index] ? "Read less" : "Read more"}
                            </button>
                          </>
                        ) : (
                          <>{slide.description}</>
                        )}
                      </div>
                    </blockquote>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}
