export default function faqQuestions({ constent }: any) {
  return (
    <div className="mt-8 mb-8">
      <p className="text-3xl font-bold text-[#000] text-center mb-1">
        Frequently Asked Questions
      </p>
      <p className="text-center font-bold mb-8">
        Know More About Salon at Home Services
      </p>
      <div>
        {constent?.map((e: any, i: any) => {
          return (
            <div
              className="group flex flex-col gap-1 border-b border-slate-400 p-4 text-white"
              tabIndex={i}
              key={i}
            >
              <div className="flex cursor-pointer items-center justify-between">
                <span className="text-black font-semibold bp-4">{e.topic}</span>
                <svg
                  className="h-6 w-6 text-black transition-all duration-500 group-focus:-rotate-180"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="invisible text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                <div
                  dangerouslySetInnerHTML={{
                    __html: e.content,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
