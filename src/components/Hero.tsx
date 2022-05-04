import Cta from './Cta';

export default function Hero() {
  return (
    <section className="relative h-[70vh] bg-[url(/src/assets/img/hero.jpeg)] bg-cover after:content['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-hero">
      <div className="relative h-full z-10 flex justify-center items-center flex-col text-center">
        <h1 className="text-5xl 2xl:text-7xl font-medium w-8/12 2xl:w-5/12">Films, séries TV et bien plus en illimité.</h1>
        <p className="text-3xl mt-6">Où que vous soyez. Annulez à tout moment.</p>
        <Cta />
      </div>
    </section>
  );
}
