import React from "react";
import ImageSlider from "../ImageSlider";
import ProductSLider from "../ProductSLider";
import consrr from '../consrr.jpg'
import Categories from "../Categories";
const HomeHighlight = () => {
  const data=[
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:true,
      img:'https://store-images.s-microsoft.com/image/apps.26839.14039569190849434.fb7c515c-e48c-44d0-83b1-0bf89f1b7278.1012d5bd-c57a-4529-9421-de6d79ee7bf3?q=90&w=177&h=265'
    },
  ]
  const cosoledata=[
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
    {
      title:' Diablo® IV - Digital Deluxe Edition',
      price:'75',
      sale:'85',
      game:false,
      img:consrr,
    },
  ]
  return (
    <>
      <div className="w-full items-center flex justify-around mt-8">
        <div className="md:h-[500px] h-[200px] w-[80%] ">
          <ImageSlider />
        </div>
      </div>
      <div className="" >
        <ProductSLider title=' Featured Games' data={data} />
      </div>
      <div className="" >
        <ProductSLider title=' Consoles ' data={cosoledata}  />
      </div>
      <div>
      <Categories/>
      </div>
    </>
  );
};

export default HomeHighlight;
