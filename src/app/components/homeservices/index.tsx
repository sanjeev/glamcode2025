"use client";
import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
const DynamicLocationpopup = dynamic(
  () => import("@/app/components/popup/Locationpopup"),
  {
    ssr: false,
  }
);
import { useRouter } from "next/navigation";
import { saveToStorage } from "@/hooks/comman";
export default function ReactServices({ content, locationData, slugurl }: any) {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    saveToStorage("location", JSON.stringify(locationData));
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const myArray = pathname.split("-");

  return (
    <div className="mt-8 mb-8">
      <p className="text-3xl font-bold text-[#000] text-center mb-8">
        Home Salon Services
      </p>
      <div className="flex justify-between flex-wrap gap-2   md:gap-[16px] 2xl:gap-[22px]">
        {content?.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer w-[104px] md:w-[180px] 2xl:w-[220px]  border border-gray-100 rounded-md shadow-md p-0 lg:p-4 hover:bg-gray-200 hover:text-gray-600 ring-2 ring-blue-500 mb-4"
            onClick={() => {
              if (slugurl) {
                router.push(`/category/${item?.slug}${myArray[0]}`);
              } else {
                handleOpen();
              }
            }}
          >
            <div className="w-24 h-24 md:w-40 md:h-40   overflow-hidden mb-2 relative">
              <Image
                src={item?.main_category_image_url}
                alt={item?.name || ""}
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
        <DynamicLocationpopup setOpen={open} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}
