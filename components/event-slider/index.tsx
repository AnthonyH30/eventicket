"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import Autoplay from "embla-carousel-autoplay";

const EventSlider = () => {
  return (
    <section className="flex w-full items-center justify-center gap-4 pt-16">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full px-4"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className="basis-1/3" key={index}>
              <div className="p-1">
                <div>
                  <div className="flex aspect-square items-center justify-center p-6 border-black border-2">
                    <span className="text-4xl font-semibold">
                      Mock {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default EventSlider;
