const apiEndpoint = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
import Image from "next/image";
import Link from "next/link";
export default async function Page({ params }: any) {
  const { slug } = await params;
  const data: any = await getProducts(slug);
  const singleblog: any = data[0]?.blogs[0] || {};
  const blogslist = data[1].blogs || [];
  return (
    <>
      <div className=" bg-[#fff0f1]">
        {/* <Image
          src="/images/blogs.png"
          alt="Banner"
          width={100}
          height={100}
          className="w-full h-48 object-cover"
        /> */}
        <Image
          className="mb-5 w-full   h-96  bg-no-repeat object-cover object-center"
          src={`${singleblog?.image_url}?w=1400&auto=format`}
          width={2000}
          height={340}
          priority
          alt={singleblog.post_title}
        />
        <div className="mx-auto max-w-screen-2xl px-4">
          <div className="flex justify-center flex-col lg:flex-row gap-8 ">
            <div className="basis-9/12 pl-4 max-[1024px]:pl-0 max-[1024px]:basis-full mb-10">
              {singleblog && singleblog.post_content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                      singleblog.post_content.replaceAll("\r\n", " ")
                    ),
                  }}
                />
              )}
            </div>
            <div className="basis-full lg:basis-3/12">
              <div className="max-w-md mx-auto space-y-4">
                <h3 className="font-semibold mb-2 border-b border-gray-500">
                  Recent Posts
                </h3>
                <div className="overflow-y-auto max-h-[600px]">
                  {blogslist.map((article: any, index: number) => (
                    <Link
                      key={index}
                      className="d-flex recent-post"
                      href={"/blogs/" + article.post_name}
                    >
                      <div
                        key={index}
                        className={`flex bg-[#fff] items-center p-4 mt-2 rounded-lg shadow-md border ${
                          article.active
                            ? "border-indigo-500"
                            : "border-gray-200"
                        }`}
                      >
                        <img
                          src={article.image_url}
                          alt={article.post_title}
                          className="w-16 h-16 rounded-lg object-cover mr-4"
                        />
                        <div>
                          <p className="text-sm font-semibold">
                            {article.post_title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
async function getProducts(context: any) {
  const url1 = apiEndpoint + `/blogs-details/${context}`;
  const url2 = apiEndpoint + `/list-blogs`;
  const urls = [url1, url2];
  try {
    const headers = {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    };
    const responses = await Promise.all(
      urls.map(async (url) => {
        const resp = await fetch(url, headers);
        if (!resp.ok) {
          throw new Error(
            `Failed to fetch data from ${url}: ${resp.statusText}`
          );
        }
        return await resp.json();
      })
    );
    return responses;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // or handle the error appropriately
  }
}
