"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

import { getFromStorage } from "@/hooks/comman";
import { Menu, MenuButton } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Locationpopup from "@/app/components/popup/Locationpopup";
const DynamicHeader = dynamic(
  () => import("@/app/components/header/mobileMenu")
);
export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const locationData = getFromStorage("location") || "";

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
                  <Menu as="div" className="relative inline-block text-left">
                    <MenuButton
                      onClick={() => {
                        setOpen(true);
                      }}
                      className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                    >
                      Select your Location
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 size-5 text-gray-400"
                      />
                    </MenuButton>
                  </Menu>
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
      {open === true && (
        <Locationpopup
          setOpen={open}
          onClose={() => setOpen(false)}
          locationData={JSON.parse(locationData)}
        />
      )}
    </>
  );
}
