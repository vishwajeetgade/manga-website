import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularManga = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Manga
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Explore our virtual shelves lined with a carefully curated selection
          of manga titles that span the spectrum of emotions and genres. From
          pulse-pounding action and heartwarming romance to mind-bending
          mysteries and epic fantasies, you&apos;ll find something that
          resonates with your every mood.
        </p>
      </div>

      <div
        className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 
        sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
      >
        {products.map((products) => (
          <PopularProductCard key={products.name} {...products} />
        ))}
      </div>
    </section>
  );
};

export default PopularManga;
