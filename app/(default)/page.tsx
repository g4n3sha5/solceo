import Hero from '@/components/hero';
import Features from '@/components/features';
import FeaturesBlocks from '@/components/features-blocks';
import Tokenomics from '@/components/tokenomics';
import Memes from '@/components/memes';
import About from '@/components/about';
import DefaultLayout from '@/app/(default)/layout';

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      {/* <About />
       <Tokenomics />
       <Memes /> */}
      {/* <Memes />  */}
    </DefaultLayout>
  );
}
