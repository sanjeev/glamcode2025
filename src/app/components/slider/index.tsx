"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import Head from "next/head";
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
    <>
      <Head>
        {content?.map((slide: any, index: number) => {
          <link
            key={index}
            rel="preload"
            as="image"
            href={slide?.slider_image_base_url}
            imageSrcSet={`${slide?.slider_image_base_url} 1x`}
          />;
        })}
      </Head>

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
                  {/* <Image
                    src={slide?.slider_image_base_url}
                    alt={slide?.alt_text || "Glam code"}
                    fill
                    quality={60}
                    priority={true}
                    fetchPriority="high"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoadingComplete={(img) => {
                      // Optional: Add animation when image loads
                      img.classList.add("opacity-100");
                    }}
                    className="rounded-lg transition-opacity opacity-0 duration-300"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  /> */}
                  <Image
                    src={slide?.slider_image_base_url}
                    alt="Glam code"
                    fill
                    quality={60}
                    priority
                    fetchPriority="high"
                    placeholder="blur"
                    blurDataURL={slide?.slider_image_base_url}
                    className="rounded-lg"
                    onLoadingComplete={(img) => {
                      // Optional: Add animation when image loads
                      img.classList.add("opacity-100");
                    }}
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              );
            })}
          </ReactSlider>
        </div>
      </div>
    </>
  );
}
