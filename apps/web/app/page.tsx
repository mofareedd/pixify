import { createMetadata } from '@repo/seo/metadata';
import type { Metadata } from 'next';

const meta = {
  title: 'From zero to production in minutes.',
  description:
    "next-forge is a production-grade boilerplate for modern Next.js apps. It's designed to have everything you need to build your new SaaS app as quick as possible. Authentication, billing, analytics, SEO, and more. It's all here.",
};

export const metadata: Metadata = createMetadata(meta);

const Home = () => {
  return (
    <>
      <div>a</div>
      {/* 
      <Hero />
      <Cases />
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA /> 
      */}
    </>
  );
};

export default Home;
