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
      <div className="flex justify-center items-center mt-40 mb-52">
        <Description />
      </div>
      <Project />
      <Contato />
    </div>
  );
}
