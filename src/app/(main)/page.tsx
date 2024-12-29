"use client";

import Marquee from '@/components/marquee';
import Hero from './hero';
import Description from './description';
import Project from './proj';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div data-scroll-container>
      <Hero />
      <Marquee />
      <div className="lg:w-[75%] lg:mx-auto">
        <div className="flex items-center justify-center mt-40">
          <Description />
        </div>
        <Project />
      </div>
      <Footer />
    </div>
  );
}
