import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../_components/carousel";
import Image from "next/image";
import { type Product } from "./page";

interface ProductCarouselProps {
  products: Product[];
}

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <Carousel className="w-fit max-w-xs mx-auto">
      <CarouselContent className="-ml-1">
        {products.map((product) => (
          <CarouselItem key={product.id} className="basis-1/3 pl-1">
            <Image src="/images/flower-placeholder.png" alt={product.name} width={200} height={200} />
            <span>{product.name}</span>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext variant="secondary" />
    </Carousel>
  );
};
