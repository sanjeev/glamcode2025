import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="shadow-md font-[sans-serif]">
      <header className="bg-white">
        <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link href="/">
                <Image
                  src="/images/glamcode.svg"
                  alt="Glam code"
                  width={50}
                  height={50}
                  priority
                />
              </Link>
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
                      href="/blgo"
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

                <div className="block md:hidden">
                  <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
