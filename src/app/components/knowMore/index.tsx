"use client";

import { useEffect, useState } from "react";
export default function Knowmore({ content }: any) {
  return (
    <>
      <div className="mt-8 mb-8">
        <p className="text-3xl font-bold text-[#000] text-center mb-1">
          Know More
        </p>

        <div className="h-[500px] overflow-scroll overflow-auto shadow p-6">
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
      </div>
    </>
  );
}
