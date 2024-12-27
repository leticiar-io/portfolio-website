"use client";

import Marquee from '@/components/marquee';
import Hero from './hero';
import Description from './description';
import Contato from './contato';
import Project from './proj';

export default function Home() {
  return (
    <div data-scroll-container >
      <Hero />
      <Marquee />
      <div className="flex items-center justify-center mt-40">
        <Description />
      </div>
      <Project />
      <Contato />
    </div>
  );
}
