import { createMetadata } from '@pixify/seo/metadata';
import type { Metadata } from 'next';
import { Hero } from './_components/hero';

const meta = {
  title: 'AI-Powered Logo Design Tool',
  description:
    'Create stunning logos in seconds with Pixify, the ultimate AI-powered logo design platform. Turn your ideas into professional designs effortlessly.',
};

export const dynamic = 'force-dynamic';

export const metadata: Metadata = createMetadata(meta);

const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
