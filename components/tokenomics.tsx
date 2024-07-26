'use client';

import { Toaster } from '@/components/ui/toaster';
import heroimg from '@/public/images/hero4.webp';
import long from '@/public/images/long.png';
import Image from 'next/image';

export default function Tokenomics() {
  return (
    <section className=" bg-theme relative h-screen  min-h-[120vh] overflow-hidden ">
      <div className="  pt-24 pb-44 md:pt-32 md:pb-20 flex flex-col items-center h-screen gap-y-3   px-5 lg:px-2  ">
        <div></div>
        <Image
          src={heroimg}
          width={0}
          height={0}
          className=" absolute inset-0  z-20 bottom-0 w-full h-full object-cover object-left"
          alt="LFG"
        />

        {/* </div> */}
      </div>
      <Toaster />
    </section>
  );
}
