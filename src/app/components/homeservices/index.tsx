import Image from "next/image";
export default function ReactServices({ content }: any) {
  return (
    <div className="mt-8 mb-8">
      <p className="text-3xl font-bold text-[#000] text-center mb-8">
        Home Salon Services
      </p>
      <div className="flex justify-center flex-wrap gap-6   md:gap-[16px] 2xl:gap-[22px]">
        {content?.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer w-[140px] md:w-[180px] 2xl:w-[220px]  border border-gray-100 rounded-xl shadow-md p-4"
          >
            <div className="w-24 h-24 md:w-40 md:h-40   overflow-hidden mb-2 relative">
              <a href="/product-category/anniversary-cake">
                <Image
                  src={item?.main_category_image_url}
                  alt={item?.name || ""}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  className="rounded-lg"
                  quality={10}
                  loading="eager"
                  priority={true}
                />

                {/* <img
                  alt="Anniversary Cake"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="rounded-lg"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    objectFit: "cover",
                    color: "transparent",
                  }}
                  src={item?.main_category_image_url}
                /> */}
              </a>
            </div>
            <p className="text-center  font-[nunito] text-[16px] font-[600]">
              {item?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
