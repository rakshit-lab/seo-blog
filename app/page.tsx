import LikeButton from "./components/likeButton";

export default function HomePage() {
  const products = [
    { id: 1, name: "Next.js Mastery Course", price: "$49", code : "NEXTJS-MASTERY" },
    { id: 2, name: "React Patterns Book", price: "$29" , code: "REACT-PATTERNS" }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Available Courses</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <div key={product.id} className="p-6 bg-white rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-slate-500 mb-4">{product.price}</p>
            <p className="text-slate-500 mb-4">{product.code}</p>
            <LikeButton />
          </div>
        ))}
      </div>
    </section>
  );
}