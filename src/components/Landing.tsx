"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { MoveDownRight } from "lucide-react";
import { dateDifference } from "@/lib/dates";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Landing = () => {
  const handRef = useRef(null);
  const reactRef = useRef(null);
  const mongoRef= useRef(null);
  const nodeRef = useRef(null);
  const tailwindRef = useRef(null);
  useGSAP(() => {                                    
    gsap.fromTo(
      handRef.current,
      { rotate: 0 },
      {
        rotate: 45,
        transformOrigin:'bottom bottom',
        repeat: -1,
        ease: "sine.inOut",
        duration: 1,
        yoyo: true
      }
    )
  })
  return (
    <div className=" relative banner">
       
      <div className="w-full min-h-screen px-5 md:px-20 flex  flex-col gap-2 justify-center items-center ">
        <div className="flex  gap-5">
          <div className="relative w-20 ">

            {/* TODO: Remove div wrapper for images and put all styles in image */}
            <div ref={mongoRef} className="absolute w-10 h-10">
              <Image
                src={"/images/mongo.svg"}
                alt="mongodb"
                fill
                className="drop-shadow-lg"
              />
            </div>
            <div ref={reactRef} className="absolute w-10 h-10 bottom-0 right-0">
              <Image
                src={"/images/react.svg"}
                alt="react"
                fill
                className="drop-shadow-lg"
              />
            </div>
          </div>

          <div className="relative w-40 h-40">
            <Image
              src={"/images/me.jpg"}
              fill={true}
              alt=""
              priority
              className="rounded-full shadow-xl"
            />
          </div>

          <div className="relative w-20  ">
            <div ref={nodeRef} className="absolute right-0 w-10 h-10 ">
              <Image
                src={"/images/node.svg"}
                alt="node"
                fill
                className="drop-shadow-lg"
              />
            </div>
            <div ref={tailwindRef} className="absolute bottom-0 w-10 h-10">
              <Image
                src={"/images/tailwind.svg"}
                alt="tailwind"
                fill
                className="drop-shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className=" text-center flex flex-col gap-3 pt-4 z-10">
          <div className="flex justify-center text-blue-600 font-semibold text-3xl tracking-tighter ">
            Hey, I am Joyadeep
            <span ref={handRef}>👋</span>
          </div>
          <p className="text-2xl font-semibold">
            A Frontend Developer with {dateDifference()}+ years of experience
          </p>
          <p className="text-black/70 dark:text-slate-300">
            I am a skilled frontend developer with expertise in crafting
            intuitive and visually appealing user interfaces. I thrive on
            creating seamless user experiences through clean code, innovative
            designs, and a strong attention to detail.
          </p>
        </div>
        <a
          href="#works"
          className="rounded-full z-10 shadow-xl text-white bg-gradient-to-r text-md from-blue-500 to-purple-500 bg px-4 py-2 flex items-center gap-2 hover:scale-105 duration-200 group "
        >
          See my works <MoveDownRight size={20} className="group-hover:animate-bounce" />
        </a>
      </div>
    </div>
  );
};

export default Landing;
