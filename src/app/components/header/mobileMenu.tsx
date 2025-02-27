"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event: any) => {
    if (panelRef.current && !panelRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when the panel is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup listener on unmount or when isOpen changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      <div>
        <button
          className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          onClick={togglePanel}
        >
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
      <div ref={panelRef} className={`slider-panel ${isOpen ? "open" : ""}`}>
        <div className="">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-4 bg-gray-100">
            <div className="flex items-center space-x-2">
              <div className="bg-[#a854fc] text-white rounded-full p-2">
                <FaUserCircle />
              </div>
              <p className="font-medium">Hi Guest</p>
            </div>

            <button className="bg-[#a854fc] text-sm text-white rounded-full px-4 py-1">
              LOGIN
            </button>
          </div>
          <div className="menu_item123">
            <Link
              href="/"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="border-b border-gray-200">
                <div className="flex justify-between items-center py-3 px-4 cursor-pointer">
                  <span className="font-bold text-[16px]">Home</span>
                </div>
              </div>
            </Link>
            <Link
              href="/about-us"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="border-b border-gray-200">
                <div className="flex justify-between items-center py-3 px-4 cursor-pointer">
                  <span className="font-bold text-[16px]">About us</span>
                </div>
              </div>
            </Link>
            <Link
              href="/blogs"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="border-b border-gray-200">
                <div className="flex justify-between items-center py-3 px-4 cursor-pointer">
                  <span className="font-bold text-[16px]">Blogs</span>
                </div>
              </div>
            </Link>

            <Link
              href="/contact-us"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="border-b border-gray-200">
                <div className="flex justify-between items-center py-3 px-4 cursor-pointer">
                  <span className="font-bold text-[16px]">Contact us</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
