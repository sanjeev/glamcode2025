"use client";
import React, { useState } from "react";
import Image from "next/image";
import Locationpopup from "@/app/components/popup/Locationpopup";
import { useRouter } from "next/navigation";
export default function ReactServices({ content, locationData, slugurl }: any) {
  console.log(slugurl);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div className="mt-8 mb-8">
      <p className="text-3xl font-bold text-[#000] text-center mb-8">
        Home Salon Services
      </p>
      <div className="flex justify-between flex-wrap gap-2   md:gap-[16px] 2xl:gap-[22px]">
        {content?.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer w-[104px] md:w-[180px] 2xl:w-[220px]  border border-gray-100 rounded-xl shadow-md p-4"
            onClick={() => {
              if (slugurl) {
                router.push(`/category/${item?.slug}/`);
              } else {
                setOpen(true);
              }
            }}
          >
            <div className="w-24 h-24 md:w-40 md:h-40   overflow-hidden mb-2 relative">
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
            </div>
            <p className="text-center  font-[nunito] text-[12px] lg:text-[16px] font-[600]">
              {item?.name}
            </p>
          </div>
        ))}
      </div>
      {open === true && (
        <Locationpopup
          setOpen={open}
          onClose={() => setOpen(false)}
          locationData={locationData}
        />
      )}
    </div>
  );
}
