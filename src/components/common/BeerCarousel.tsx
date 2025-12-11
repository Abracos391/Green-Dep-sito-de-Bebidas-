import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const beerBrands = [
  {
    name: "Brahma",
    color: "from-red-600 to-red-800",
    emoji: "🍺",
    description: "A cerveja que é nossa"
  },
  {
    name: "Skol",
    color: "from-yellow-400 to-yellow-600",
    emoji: "🍻",
    description: "A cerveja que desce redondo"
  },
  {
    name: "Antarctica",
    color: "from-blue-500 to-blue-700",
    emoji: "🍺",
    description: "Boa de verdade"
  },
  {
    name: "Heineken",
    color: "from-green-600 to-green-800",
    emoji: "🍺",
    description: "Premium quality"
  },
  {
    name: "Corona",
    color: "from-amber-400 to-amber-600",
    emoji: "🍺",
    description: "A cerveja mais fina"
  },
  {
    name: "Budweiser",
    color: "from-red-700 to-red-900",
    emoji: "🍺",
    description: "King of beers"
  }
];

export default function BeerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {beerBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 xl:flex-[0_0_33.333%]"
            >
              <div className={`relative h-64 rounded-2xl bg-gradient-to-br ${brand.color} p-8 flex flex-col items-center justify-center text-white shadow-elegant hover:scale-105 transition-smooth`}>
                <div className="text-8xl mb-4 animate-pulse">{brand.emoji}</div>
                <h3 className="text-3xl font-bold mb-2">{brand.name}</h3>
                <p className="text-sm opacity-90">{brand.description}</p>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                  Gelada
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
        onClick={scrollNext}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      <div className="flex justify-center gap-2 mt-6">
        {beerBrands.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 rounded-full transition-smooth ${
              index === selectedIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
