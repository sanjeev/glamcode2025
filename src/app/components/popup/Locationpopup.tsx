"use client";
import { Fragment, memo, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { selectCity } from "@/app/store/slices/citySlice";

function Locationpopup({ onClose }: any) {
  let dispatch = useDispatch();
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://admin.glamcode.in/api/alllocation");
      response = await response.json();
      setData(response);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data?.locations) {
      setLoading(false);
    }
  }, [data]);
  return (
    <Transition.Root show={true} as={Fragment}>
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
              {/* Close Button */}
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

              {/* Locations Grid */}
              <div className="grid grid-cols-3 gap-4">
                {loading ? (
                  <div className="w-full h-[350px] animate-pulse">
                    <p className="text-center text-gray-500 text-lg">
                      Loading...
                    </p>
                  </div>
                ) : (
                  Array.isArray(data.locations) &&
                  data.locations.map((city: any, index: number) => (
                    <Link
                      key={index}
                      className="cursor-pointer flex flex-col items-center p-4 rounded-xl shadow-md glow-on-hover bg-gradient-to-r text-white from-pink-500 via-purple-500 to-indigo-500"
                      href={`/${city.slug}`}
                      onClick={() => {
                        onClose();
                        dispatch(selectCity(city));
                      }}
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden">
                        <Image
                          src={city.image_base_url}
                          alt={city.city}
                          className="w-full h-full object-cover"
                          width={100}
                          height={100}
                        />
                      </div>
                      <p className="mt-2 font-semibold text-lg">{city.city}</p>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export default memo(Locationpopup);
