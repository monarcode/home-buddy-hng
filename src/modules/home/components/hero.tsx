import FeaturedSlider from "./featured-slider";

export default function Hero() {
  return (
    <div className="flex flex-col space-y-5 lg:space-y-8 container">
      <h2 className="text-2xl lg:text-[52px] font-bold">Our New Categories</h2>

      <div className="w-full">
        <FeaturedSlider />
      </div>
    </div>
  );
}
