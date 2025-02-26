const apiEndpoint = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
export default async function Page({ params }: any) {
  const { slug } = await params;
  const data = await getProducts(slug);
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}
async function getProducts(context: any) {
  const url1 = apiEndpoint + `/blogs-details/${context}`;
  const urls = [url1];
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
