"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";

export default function Locationpopup({ setOpen, onClose, locationData }: any) {
  const router = useRouter();
  const cities = [
    { name: "Lucknow", img: "/images/lucknow.png", bg: "bg-green-200" },
    { name: "Noida", img: "/images/noida.png", bg: "bg-white" },
    { name: "Delhi", img: "/images/delhi.png", bg: "bg-blue-100" },
    { name: "Gurugram", img: "/images/gurugram.png", bg: "bg-green-100" },
    { name: "Ghaziabad", img: "/images/ghaziabad.png", bg: "bg-lime-100" },
    { name: "G.Noida", img: "/images/gnoida.png", bg: "bg-orange-200" },
  ];
  return (
    <Transition.Root show={setOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {locationData.map((city: any, index: number) => (
                  <div
                    key={index}
                    className={`cursor-pointer flex flex-col items-center p-4 rounded-xl shadow-md glow-on-hover  bg-gradient-to-r text-white from-pink-500 via-purple-500 to-indigo-500`}
                    onClick={() => {
                      router.push(`/${city.slug}`);
                    }}
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <img
                        src={city.image_base_url}
                        alt={city.city}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-2 font-semibold text-lg">{city.city}</p>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
