import { buttons } from '@/public/constants';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex justify-center py-4 bg-theme ">
      <div className="flex md:items-center md:justify-between py-4 border-t border justify-center px-20 gap-x-8 bg-neutral-200 rounded-xl">
        {buttons.map((navItem) => {
          return (
            <a
              className="font-medium hover:underline  bg-white flex gap-x-3 p-3 rounded-xl hover:bg-themeThird transition-all"
              href={navItem.url}
              target="_blank"
              rel="noreferrer"
            >
              <Image src={navItem.img} height="35" width="35" alt={navItem.text} />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
