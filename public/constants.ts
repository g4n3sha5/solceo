import deximg from '@/public/images/dex.png';
import pumpimg from '@/public/images/pump.png';
import twitterimg from '@/public/images/twitter.png';
import telegramimg from '@/public/images/telegram.png';
import dextoolsimg from '@/public/images/dextools.svg';

export const ca: string = '';
export const telegram = 'https://t.me/RomiTheWeenie';
export const twitter = 'https://x.com/RomiTheWeenie';
export const dextools = '';

export const dex = true && ca != '' ? `https://www.pump.fun/${ca}` : '';
// export const dex = true && ca != '' ? `https://dexscreener.com/solana/${ca}` : '';

export const pump: string = ca != '' ? `https://www.pump.fun/${ca}` : '';

export const buttons = [
  { text: 'Twitter', url: twitter, img: twitterimg },
  { text: 'Telegram', url: telegram, img: telegramimg },
  { text: 'PumpFun', url: pump, img: pumpimg },
  { text: 'DexScreener', url: dex, img: deximg },
  { text: 'DexTools', url: dextools, img: dextoolsimg },
].filter((button) => button.url != '');

const tokenomics = {
  burnMilestones: [
    { marketCap: 10000, burnPercentage: 0.2 },
    { marketCap: 25000, burnPercentage: 0.5 },
    { marketCap: 50000, burnPercentage: 0.7 },
    { marketCap: 100000, burnPercentage: 1 },
    { marketCap: 250000, burnPercentage: 1.2 },
  ],
  marketingMilestones: [
    { marketCap: 10000, marketingPercentage: 0.1 },
    { marketCap: 25000, marketingPercentage: 0.2 },
    { marketCap: 50000, marketingPercentage: 0.3 },
    { marketCap: 100000, marketingPercentage: 0.5 },
    { marketCap: 250000, marketingPercentage: 0.7 },
  ],
  charityMilestones: [
    { marketCap: 70000, charityPercentage: 0.2 },
    { marketCap: 150000, charityPercentage: 0.5 },
    { marketCap: 300000, charityPercentage: 0.7 },
    { marketCap: 500000, charityPercentage: 1 },
    { marketCap: 1000000, charityPercentage: 1.2 },
  ],
};
