const apiEndpoint = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
import Image from "next/image";
export default async function Page({ params }: any) {
  const { slug } = await params;
  const data: any = await getProducts(slug);
  const singleblog: any = data[0]?.blogs[0] || {};
  return (
    <>
      <div className="mb-8">
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
      </div>
      <div className="mx-auto max-w-screen-2xl px-4">
        {/* <Image
          src={singleblog?.image_url}
          alt="Banner"
          width={100}
          height={30}
          className="w-full h-80 object-cover"
        /> */}
        {/* <Image
          className="mb-5 w-full   h-80  bg-no-repeat object-cover object-center"
          src={`${singleblog?.image_url}?w=1400&auto=format`}
          width={2000}
          height={340}
          priority
          alt={singleblog.post_title}
        /> */}
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
