"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const ReactSlider = dynamic(() => import("react-slick"), {
  loading: () => (
    <div className="w-[100%] h-[429px] bg-gray-200 animate-pulse" />
  ),
});

export default function SlideSlick({ content }: any) {
  const settings = {
    className: "home-slide ",
    arrows: true,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: false,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:grid-cols-2">
      <div className="hidden md:block  lg:block">
        <div className="pt-[150px]">
          <Image
            // loader={externaImageLoader}
            src="/images/glam.png"
            width={80}
            height={80}
            alt="Glam code"
            priority
          />
          <p
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Salon at Home for Women
          </p>
          <p className="spanp">⭐ 4.76(978k)</p>
        </div>
      </div>
      <div>
        <ReactSlider {...settings}>
          {content?.map((slide: any, index: number) => {
            return (
              <div key={index} className="md:h-[440px] h-48 w-full  relative">
                {/* <Image
                  src={slide?.slider_image_base_url}
                  alt="Glam code"
                  placeholder="blur"
                  blurDataURL={slide?.slider_image_base_url}
                  fill
                  quality={10}
                  loading="eager"
                  style={{
                    objectFit: "cover",
                  }}
                  className="rounded-lg"
                  priority={true}
                /> */}
                {/* <Image
                  src={slide?.slider_image_base_url}
                  alt="Glam code"
                  fill
                  quality={75} // Balance performance & quality
                  priority={true} // Ensures fast loading (don't need `loading="eager"`)
                  placeholder="empty" // Remove "blur" if you don’t have a base64 blurDataURL
                  className="rounded-lg"
                  style={{ objectFit: "cover" }}
                /> */}
                <Image
                  src={slide?.slider_image_base_url}
                  alt="Glam code"
                  fill
                  quality={75}
                  priority={true}
                  fetchPriority="high"
                  placeholder="empty"
                  className="rounded-lg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            );
          })}
        </ReactSlider>
      </div>
    </div>
  );
}
