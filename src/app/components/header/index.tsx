"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { memo } from "react";

const DynamicHeader = dynamic(
  () => import("@/app/components/header/mobileMenu")
);

const DynamicLocationdata = dynamic(
  () => import("@/app/components/header/Locationdata"),
  {
    ssr: false,
  }
);

function Header() {
  return (
    <>
      <div className="shadow-md font-[sans-serif]">
        <header className="bg-white">
          <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-2">
            <div className="flex h-16 items-center justify-between">
              <div className="block md:hidden">
                <DynamicHeader />
              </div>
              <div className="flex-1 md:flex md:items-center  md:gap-3">
                <Link href="/">
                  <Image
                    src="/images/glamcode.svg"
                    alt="Glam code"
                    width={50}
                    height={50}
                    priority
                  />
                </Link>
                <div className="hidden md:block">
                  <DynamicLocationdata />
                </div>
              </div>
              <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <Link
                        className="text-[16px] font-bold  text-[#000] transition hover:text-[#a854fc]"
                        href="/"
                      >
                        {" "}
                        Home{" "}
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-[16px] font-bold  text-[#000] transition hover:text-[#a854fc]"
                        href="/about-us"
                      >
                        {" "}
                        About us{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" text-[16px] font-bold  text-[#000] transition hover:text-[#a854fc]"
                        href="/blogs"
                      >
                        {" "}
                        Blogs{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-[16px] font-bold  text-[#000] transition hover:text-[#a854fc]"
                        href="/contact-us"
                      >
                        {" "}
                        Contact us{" "}
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className="flex items-center gap-4">
                  <div className="flex gap-4">
                    <a
                      className="rounded-md bg-[#a854fc] px-5 py-2.5 text-[15px] font-bold  text-white shadow-sm  gradient-border-button"
                      href="#"
                    >
                      Login
                    </a>

                    <a
                      className="rounded-md bg-[#a854fc] px-5 py-2.5 text-[15px] font-bold  text-white shadow-sm gradient-border-button"
                      href="#"
                    >
                      Use App
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
export default memo(Header);
