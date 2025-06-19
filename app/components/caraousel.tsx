// components/CenteredCarousel.tsx
"use client"

import React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/grower.jpg",
  "/starter.jpg",
  "/zinc.jpg",
  "/carp-grower.jpg",
  "/carp-starter.jpg",
]

export default function CenteredCarousel() {

  return (
    <div className="relative max-w-6xl mx-auto py-16">
      <Carousel
        opts={{ align: "center", containScroll: "trimSnaps" }}
        className="group"
      >
        <CarouselPrevious className="absolute left-2 top-1/2 z-20">
          <Button variant="ghost" size="icon">
            <ChevronLeft />
          </Button>
        </CarouselPrevious>
        <CarouselContent className="overflow-visible px-8">
          <div className="flex items-center space-x-4">
            {images.map((src, idx) => (
              <CarouselItem
                key={idx}
                className={`
                  transition-transform duration-300
                 opacity-60 blur-sm}
                  basis-[250px] sm:basis-[300px] md:basis-[350px]
                `}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    width={350}
                    height={250}
                    className="object-cover w-full h-[250px]"
                  />
                </div>
              </CarouselItem>
            ))}
          </div>
        </CarouselContent>
        <CarouselNext className="absolute right-2 top-1/2 z-20">
          <Button variant="ghost" size="icon">
            <ChevronRight />
          </Button>
        </CarouselNext>
      </Carousel>
    </div>
  )
}
