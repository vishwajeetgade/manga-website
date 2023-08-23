import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const TrendingManga = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Top </span>
          <span className="text-coral-red">Trending </span>
          Manga
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          We pride ourselves in offering not only the hottest manga titles but
          also a wide variety of genres to suit every taste. From fantasy and
          science fiction to romance, slice of life, and sports, our collection
          spans the entire spectrum of manga storytelling.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default TrendingManga;
