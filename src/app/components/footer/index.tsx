import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <footer className="bg-[#090909]">
        <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-2 space-y-8 py-8 lg:space-y-16  border-gray-500">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-white font-bold text-600">
                <div className="">
                  <Link href="/">
                    <Image
                      src="/images/glamcode.svg"
                      alt="Glam code"
                      width={152}
                      height={152}
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                </div>
              </div>

              <p className="mt-4 text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                non cupiditate quae nam molestias.Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Esse non cupiditate quae nam
                molestias.
              </p>

              <ul className="mt-8 flex gap-6">
                <li>
                  <Link
                    href="https://www.facebook.com/myglamcode"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>

                    <svg
                      className="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.instagram.com/glamcode_luxury?igsh=MXhsNWtlczB0eHM5cg=="
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>

                    <svg
                      className="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://twitter.com/GlamCode3?t=medt6YYBVczVXZ-IWiUObg&s=08"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>

                    <svg
                      className="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtube.com/channel/UC0tPgNGS96oVlkUqBf4ZM2Q"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:opacity-75"
                  >
                    <span className="sr-only">Youtube</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="size-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://pin.it/WB08yGZzd"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:opacity-75"
                  >
                    <span className="sr-only">Youtube</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="size-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
              <div>
                <p className="font-medium text-gray-900   text-white text-[20px] font-black">
                  Main Menu
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="/about-us"
                      className="text-gray-700 transition hover:opacity-75 text-white font-[20px] font-bold"
                    >
                      {" "}
                      About Us{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact-us"
                      className="text-gray-700 transition hover:opacity-75 text-white font-[20px] font-bold"
                    >
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 text-white font-[20px] font-bold"
                    >
                      {" "}
                      Membership{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/refer-earn"
                      className="text-gray-700 transition hover:opacity-75 text-white font-[20px] font-bold"
                    >
                      {" "}
                      Refer and Earn{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/wallet"
                      className="text-gray-700 transition hover:opacity-75 text-white font-[20px] font-bold"
                    >
                      {" "}
                      Wallet / Cashback{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900   text-white text-[20px] font-black">
                  Serving in
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 text-white font-[20px] font-bold"
                    >
                      {" "}
                      Lucknow{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 text-white font-[20px] font-bold"
                    >
                      {" "}
                      Noida{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 text-white font-[20px] font-bold"
                    >
                      {" "}
                      Delhi{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 text-white font-[20px] font-bold"
                    >
                      {" "}
                      Gurugram{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 text-white font-[20px] font-bold"
                    >
                      {" "}
                      Ghaziabad{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 text-white font-[20px] font-bold"
                    >
                      {" "}
                      G.Noida{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900   text-white text-[20px] font-black">
                  Experience the Glamcode Mobile App
                </p>
                <div className="flex align-items-center mt-6">
                  <Link href="https://play.google.com/store/apps/details?id=com.glamcode.app">
                    <Image
                      src="/images/playstore.svg"
                      alt="Glam code"
                      className="me-2"
                      width={135}
                      height={45}
                    />
                  </Link>

                  <Link href="https://apps.apple.com/in/app/glamcode/id6449648391">
                    <Image
                      src="/images/appstore.svg"
                      alt="Glam code"
                      className="me-2"
                      width={135}
                      height={45}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8  text-center leading-relaxed  text-[16px] font-bold text-gray-900 text-center text-white">
            Copyright 2018 - 2025 &copy;Glamcode. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
