import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Attention, manga enthusiasts! Dive into a world of captivating
          stories, breathtaking artwork, and unforgettable characters with our
          Exclusive Manga Sale! Whether you&apos;re a seasoned manga collector
          or just starting your journey, we&apos;ve got something incredible for
          you.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Massive Selection: Explore a treasure trove of manga titles spanning
          various genres – action, romance, fantasy, sci-fi, and more! With
          hundreds of series available, there&apos;s a manga for every taste.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
