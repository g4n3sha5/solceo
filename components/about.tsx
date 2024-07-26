'use client';

import art from '@/public/images/sofa.webp';
import Image from 'next/image';
import heroimg from '@/public/images/hero5.webp';

export default function About() {
  return (
    <section className=" bg-theme relative min-h-screen overflow-hidden font-cuprum ">
      {/* Hero content */}
      <div className="pt-24 pb-44 md:pt-32 md:pb-20 flex flex-col items-center  h-full gap-y-3   px-5 lg:px-2 ">
        <div className="flex flex-col z-30 w-full items-center justify-start">
          {/* <Image
            data-aos="flip-left"
            data-aos-duration="1000"
            src={caption}
            width={0}
            height={0}
            className=" caption"
            alt="LFG"
          /> */}
          <div
            className="flex gap-x-20 items-start justify-around flex-col lg:flex-row gap-y-10 bg-[rgba(255,255,255,0.90)] bbg-[#e2e2e2] border-2 border-neutral-300 shadow-xl shadow-neutral-400 rounded-lg
           w-full xl:w-4/5 p-10 "
          >
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="relative   flex basis-full lg:basis-2/5 justify-center rounded-xl mt-10 shadow-xl shadow-cyan-600"
            >
              <Image src={art} width={0} height={0} className="w-full h-auto   bottom-0" alt="LFG" />
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className="basis-full lg:basis-1/2 text-2xl ">
              <h1 className="text-4xl font-semibold font-wendy tracking-wider">Yo! Jesse Pinkman in the house!</h1>
              <span className=" tracking-tight text-3xl font-bold">
                Everyone knows it - Pinkman is a cook! <span className="text-cyan-500">CAP'N COOK.</span>
              </span>
              <p className="leading-8 text-3xl font-normal  text-cyan-800">
                Yo, listen up! Jesse Pinkman, the legendary street-smart chemist, is in the house. With a knack for
                turning simple ingredients into pure gold , Jesse brings the perfect mix of brains and brawn. Known for
                his iconic yellow hazmat suit and a vocabulary that would make any sailor blush, this dude is the
                ultimate hustler with a heart of gold.
                <br />
                <br /> Whether he's mixing chemicals in a high-tech lab or plotting his next big score, Jesse Pinkman is
                all about breaking the rules and making it big. With his rebellious spirit, sarcastic humor, and
                unwavering loyalty to his friends, he's the ultimate anti-hero who somehow always manages to come out on
                top.
              </p>
            </div>
          </div>
        </div>

        <Image
          src={heroimg}
          width={0}
          height={0}
          className="mt-[6.5rem] absolute inset-0  z-20 bottom-0 w-full h-full object-cover object-right-top"
          alt="LFG"
        />
      </div>
    </section>
  );
}
