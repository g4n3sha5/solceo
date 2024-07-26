'use client';

import { Button } from '@/components/ui/button';
import { buttons, ca, dex, dextools, pump, telegram, twitter } from '@/public/constants';
import heroimg from '@/public/images/hero.webp';
import content from '@/public/images/art.png';
import Image, { StaticImageData } from 'next/image';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

export default function Hero() {
  return (
    <section className=" bg-white relative pb-[30vh] xl:pb-[30px] min-h-screen overflow-hidden xl:h-screen flex pt-32 lg:pt-10">
      {/* Hero content */}
      <div className="flex flex-wrap w-full pb-44 md:pb-20  items-center h-full gap-y-3  xl:justify-between px-5 lg:px-20 justify-center ">
        <div className="basis-full xl:basis-1/2 py-10 z-30 flex flex-col items-center ">
          <div className="bg-theme w-full xl:px-16 py-10 pb-14 text-center lg:text-left my-6  text-cyan-300  self-start">
            <h1 className="text-xl  text-center lg:text-left lg:text-4xl my-6 text-cyan-300  self-start  ">
              Can Solana CEO do sumthing? <br />
              <span className="text-white">Yess, hez there he just set Solana prize to 180 dolarz</span>
            </h1>

            <button className="bg-babyBlue text-black p-3 rounded-lg font-light hover:scale-105 text-xl px-6 mt-4">
              Chart
            </button>
          </div>
          <div className="flex mt-10">
            {buttons.map(({ url, img, text }) => (
              <Button className="w-46" href={url} text={text} img={img} />
            ))}
          </div>
        </div>

        <div className="xl:basis-1/2 z-30 flex justify-center  ">
          <Image src={content} width={0} height={0} className="xl:w-1/2  -mt-5 lg:-mt-14  " alt="" />
        </div>

        <Image
          src={heroimg}
          width={0}
          priority={true}
          height={0}
          className="absolute inset-0  z-20 bottom-0 w-full h-full object-fill"
          alt="Background"
        />
      </div>
      <Toaster />
    </section>
  );
}
