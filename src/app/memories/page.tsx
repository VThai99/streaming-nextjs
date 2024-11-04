"use client";
import img1 from "@/assets/images/img1.jpg";
import img2 from "@/assets/images/img2.jpg";
import img3 from "@/assets/images/img3.jpg";
import img4 from "@/assets/images/img4.jpg";
import img5 from "@/assets/images/img5.jpg";
import img6 from "@/assets/images/img6.jpg";
import img7 from "@/assets/images/img7.jpg";
import img8 from "@/assets/images/img8.jpg";
import img9 from "@/assets/images/img9.jpg";
import img10 from "@/assets/images/img10.jpg";
import img11 from "@/assets/images/img11.jpg";
import img12 from "@/assets/images/img12.jpg";
import img13 from "@/assets/images/img13.jpg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Memories(): JSX.Element {
  useGSAP(() => {
    const intoTl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    intoTl.from(".tesst", {
      scale: 9,
      opacity: 0,
    });

    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".hiiiii",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        markers: true,
      },
    });
    scrollTL.fromTo(
      ".showWrapper",
      {
        y: 100,
        opacity: 0,
        scale: 1,
      },
      {
        y: 0,
        opacity: 1,
        scale: 5,
        stagger: 1,
      }
    );
    scrollTL.fromTo(
      ".tesst",
      {
        y: 100,
        opacity: 1,
        scale: 1,
      },
      {
        y: 0,
        opacity: 0,
        scale: 9,
        ease: "power4.in",
        stagger: 0.1,
      }
    );
  });
  return (
    <div className="h-[300vh] bg-white hiiiii text-black flex justify-center relative">
      <div className="fixed h-[100dvh] w-[100dvw]">
        <div className="showWrapper absolute top-0 right-[50%] h-[100px] w-[100px]">
          <div className="relative h-full w-full">
            <Image
              className="tesst absolute top-0 right-[50%]"
              src={img1}
              alt="img1"
              objectFit="cover"
            />
            <Image
              className="tesst absolute top-[50%] right-[0]"
              src={img2}
              alt="img2"
              objectFit="cover"
            />
            <Image
              className="tesst absolute bottom-0 left-[0]"
              src={img3}
              alt="img3"
              objectFit="cover"
            />
          </div>
        </div>

        <Image
          className="tesst absolute"
          src={img4}
          alt="img4"
          width={200}
          height={100}
          objectFit="cover"
        />
        <Image
          className="tesst absolute"
          src={img5}
          alt="img5"
          width={200}
          height={100}
          objectFit="cover"
        />
        <Image
          className="tesst absolute"
          src={img6}
          alt="img6"
          width={200}
          height={100}
          objectFit="cover"
        />
        <Image
          className="tesst absolute"
          src={img7}
          alt="img7"
          width={200}
          height={100}
          objectFit="cover"
        />
        <Image
          className="tesst absolute"
          src={img8}
          alt="img8"
          width={200}
          height={100}
          objectFit="cover"
        />
        <Image
          className="tesst absolute"
          src={img9}
          alt="img9"
          width={200}
          height={100}
          objectFit="cover"
        />
        <Image
          className="tesst absolute"
          src={img10}
          alt="img10"
          width={200}
          height={100}
          objectFit="cover"
        />
        <Image
          className="tesst absolute"
          src={img11}
          alt="img11"
          width={200}
          height={100}
          objectFit="cover"
        />
        <Image
          className="tesst absolute"
          src={img12}
          alt="img12"
          width={200}
          height={100}
          objectFit="cover"
        />
        <Image
          className="tesst absolute"
          src={img13}
          alt="img13"
          width={200}
          height={100}
          objectFit="cover"
        />
      </div>
    </div>
  );
}
