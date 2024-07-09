"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";

import NordicBg from "@/assets/slide-1.jpeg";
import SofasBg from "@/assets/slide-2.jpeg";
import VasesBg from "@/assets/slide-3.jpeg";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";

const FEATURED_SLIDES = [
  {
    id: 1,
    image: NordicBg,
    title: "Nordic Tables",
    type: "nordic",
  },
  {
    id: 2,
    image: SofasBg,
    title: "Sofas",
    type: "sofas",
  },
  {
    id: 3,
    image: VasesBg,
    title: "Vases",
    type: "vases",
  },
];

export default function FeaturedSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        slidesToScroll: 1,
        align: "start",
        loop: true,
      }}
      setApi={setApi}
      plugins={[Autoplay({ delay: 3000 })]}
    >
      <CarouselContent className="-ml-0 -pl-0 gap-4 relative isolate">
        {FEATURED_SLIDES.map((slide) => (
          <CarouselItem
            key={slide.id}
            className="bg-stone-300 first-of-type:ml-4 pl-0 rounded-md overflow-hidden relative isolate"
          >
            <Image
              src={slide.image}
              alt="slide"
              className="object-cover z-0"
              fill
            />

            <div className="z-10 absolute bottom-4 inset-x-0 px-6 flex items-center justify-between">
              <p className="font-extrabold text-2xl text-white">
                {slide.title}
              </p>

              <Link
                href={`/products/category/${slide.id}?type=${slide.type}`}
                className="bg-white py-3 px-4 rounded-lg text-xs"
              >
                View all
              </Link>
            </div>

            <span className="bg-[#FF9A62] text-white px-4 py-2 absolute block top-4 right-4 text-sm rounded-lg">
              New
            </span>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute -bottom-4 lg:-bottom-6 inset-x-0 flex justify-center items-center">
        <div className="flex items-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <div
              className={cn(
                "h-2 lg:h-3 w-2 lg:w-3 rounded-full bg-[#231F20]/20 transition-all",
                {
                  "bg-primary w-5 lg:w-8": i === current - 1,
                }
              )}
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </Carousel>
  );
}
