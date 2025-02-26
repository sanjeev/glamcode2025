export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit consectetur.",
      author: "Ankush Sahi",
      date: "07 April, 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur. Mi facilisi orci sit enim.",
      image: "https://via.placeholder.com/150",
    },
    // Add more posts as needed
  ];

  const categories = [
    "ANNIVERSARY CAKE",
    "BACHELORETTE PARTY IDEAS",
    "BEST CAKE",
    "CELEBRATION",
    "DESIGNER CAKE",
    "FATHER'S DAY CAKE",
    "GIFTS IDEA",
    "ONLINE CAKE",
  ];

  const products = [
    "Cup Cake",
    "Cho Cakes",
    "Cakes Slice",
    "Vanilla Cup Cake",
    "Rose Cakes",
    "Fruit Cakes",
    "Cheese Cake",
    "Strawberry Cake",
    "Red velvet Cakes",
  ];

  return (
    <section className="mt-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center">Blog</h1>
        <p className="text-center text-sm">
          Lorem ipsum dolor sit amet consectetur. In euismod curabitur eget
          feugiat consequat in in. Velit luctus ornare ornare vel morbi arcu
          euismod at.
        </p>
      </div>

      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-md p-4">
              <img
                src={post.image}
                alt={post.title}
                className="rounded-md w-full h-48 object-cover"
              />
              <p className="text-sm text-gray-500 mt-2">
                {post.author} • {post.date}
              </p>
              <h2 className="font-semibold mt-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{post.description}</p>
              <button className="text-pink-500 mt-2">Read More →</button>
            </div>
          ))}
        </div>

        <aside className="space-y-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded-md"
          />

          <div className="space-y-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-3 py-1 text-sm bg-gray-100 rounded-md"
              >
                {category}
              </button>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Most Loved Products</h3>
            <div className="grid grid-cols-3 gap-2">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-2 text-center text-sm rounded-md"
                >
                  {product}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
