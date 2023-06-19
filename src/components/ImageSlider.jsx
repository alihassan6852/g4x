import React from 'react'
import { Carousel } from 'flowbite-react';
import logo from "./G4X-LOGO-1.png";
import GameCard from './GameCard';

export default function DefaultCarousel() {
  return (
    <Carousel>
           <GameCard title={' Diablo® IV - Digital Deluxe Edition'} price={'75'} sale={'85'} img={'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'} />

      <img
        alt="..."
        src={logo}
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
  )
}