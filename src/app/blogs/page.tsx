import Image from "next/image";
import Link from "next/link";

const apiEndpoint = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
export default async function BlogPage() {
  const data: any = await getProducts();
  const blogslist = data[0].blogs || [];
  const blogscat = data[1].blogscat || [];

  return (
    <section className="mt-1 bg-[#fff0f1]">
      <div className="mb-8">
        <Image
          src="/images/blogs.png"
          alt="Banner"
          width={100}
          height={100}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="mx-auto max-w-screen-2xl px-4 ">
        <div className="flex justify-center flex-col lg:flex-row gap-8">
          <div className="basis-9/12 pl-4 max-[1024px]:pl-0 max-[1024px]:basis-full mb-10">
            <div className="flex gap-2 overflow-x-auto w-[calc(100vw_-_32px)] lg:w-auto mb-4">
              <Link href="/blogs">
                <button className="flex font-bold whitespace-pre px-4 py-2 rounded-full text-sm transition-all duration-200 bg-[#a854fc] text-white hover:text-[#000] hover:bg-gray-200 ">
                  All
                </button>
              </Link>
              {blogscat.map((post: any, index: number) => (
                <Link
                  key={index}
                  href={`/blogs?category=${post.category_name}`}
                >
                  <div className="flex font-bold  whitespace-pre px-4 py-2 rounded-full text-sm transition-all duration-200 bg-[#a854fc] text-white hover:text-[#000] hover:bg-gray-200 ">
                    {post?.category_name}
                  </div>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-4">
              {blogslist.map((post: any, index: number) => (
                <Link
                  key={index}
                  className="d-flex recent-post"
                  href={"/blogs/" + post.post_name}
                >
                  <div key={post.ID} className="bg-white shadow-md rounded-xl ">
                    <img
                      src={post.image_url}
                      alt={post.post_title}
                      className="rounded-md w-full h-48 object-cover"
                    />
                    {/* <p className="text-sm text-gray-500 mt-2">
                {post.author} • {post.date}
              </p> */}
                    <div className="p-4">
                      <h2 className="font-semibold mt-2">{post.post_title}</h2>
                      {/* <p className="text-gray-600 text-sm mt-1">{post.description}</p> */}
                      <button className="text-pink-500 mt-2">
                        Read More →
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="basis-full lg:basis-3/12">
            {/* <aside className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Most Loved Products</h3>
                <div className="grid grid-cols-3 gap-2">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="bg-[#a854fc] text-white p-2 text-center text-sm font-bold rounded-md"
                    >
                      {product}
                    </div>
                  ))}
                </div>
              </div>
            </aside> */}
            <div className="max-w-md mx-auto space-y-4">
              <h3 className="font-semibold mb-2 border-b border-gray-500">
                Recent Posts
              </h3>
              <div className="overflow-y-auto max-h-[600px]">
                {blogslist.slice(0, 10).map((article: any, index: number) => (
                  <Link
                    key={index}
                    className="d-flex recent-post"
                    href={"/blogs/" + article.post_name}
                  >
                    <div
                      key={index}
                      className={`flex bg-[#fff] items-center p-4 mt-2 rounded-lg shadow-md border ${
                        article.active ? "border-indigo-500" : "border-gray-200"
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
    </section>
  );
}

async function getProducts() {
  const url1 = apiEndpoint + `/list-blogs`;
  const url2 = apiEndpoint + `/list-blogs-cat`;
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
