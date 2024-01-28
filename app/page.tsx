import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: ['Farcaster', 'Twitter'],
  image: 'https://first-frame-phi.vercel.app/choice.jpg',
  post_url: 'https:///first-frame-phi.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: '',
  description: 'choose',
  openGraph: {
    title: 'choose',
    description: 'pick a path',
    images: ['https://first-frame-phi.vercel.app/lightpath.jpg', 'https://first-frame-phi.vercel.app/darkpath.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>choice</h1>
    </>
  );
}
