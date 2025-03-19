"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
const ReactSlider = dynamic(() => import("react-slick"), {
    loading: () => (
        <div className="w-[100%] h-[429px] bg-gray-200 animate-pulse" />
    ),
});
export default function Occasionspecial({ content }) {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        // nextArrow: <CustomNextArrow />,
        // prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    variableWidth: true,
                },
            },
        ],
    };
    const externaImageLoader = ({ src, width }) => `${src}?w=${width}`;
    return (
        <div className="mt-8 mb-8">
            <div className="mt-8 mb-8">
                <p className="text-3xl font-bold text-[#000] text-center mb-8">
                    Occasion Special
                </p>
            </div>
            <div>
                <ReactSlider {...settings}>
                    {content?.map((banner, i) => (
                        <div
                            className="border-0 rounded-3 px-2 card refer-earn-img position-relative overflow-hidden rounded-3"
                            key={`banner_${banner.image}_${i + 1}`}
                        >
                            <Link href="/">
                                <div className="img-container rounded-3">
                                    <Image
                                        loader={externaImageLoader}
                                        src={`https://admin.glamcode.in/${banner.image}`}
                                        className="rounded-3"
                                        width={700}
                                        alt={`banner-image_${i}`}
                                        height={160}
                                        quality={60}
                                        priority={true}
                                        fetchPriority="high"
                                        loading="eager"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        onLoadingComplete={(img) => {
                                            // Optional: Add animation when image loads
                                            img.classList.add("opacity-100");
                                        }}

                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center",
                                        }}

                                    />




                                </div>


                            </Link>

                        </div>
                    ))}
                </ReactSlider>
            </div>
        </div>
    )
}