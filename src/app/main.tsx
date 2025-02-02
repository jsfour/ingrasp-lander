"use client";
import * as React from "react";
import HeroSection from "./HeroSection";
import ProductSection from "./ProductSection";
import DifferentiatorsSection from "./DifferentiatorsSection";
import { NormalPeopleCarousel } from './components/NormalPeopleCarousel';
import LogoStrip from './components/LogoStrip';
import TestamonialSection from './components/TestamonialSection';
import BookDemo from './components/BookDemo';
import MainLayout from './components/MainLayout';
import { demoLink } from './constants/link-urls';

export default function Main() {
  return (
    <MainLayout>
      <HeroSection />
      <LogoStrip />
      <DifferentiatorsSection />
      <TestamonialSection
        quote="We used to pay $800 for just the photographer on a single, short photoshoot. Now I can build my own scenes anytime."
        authorName="Melissa"
        authorTitle="Instructional Designer"
      />
      <ProductSection />
      <NormalPeopleCarousel />
      <BookDemo href={demoLink} />
    </MainLayout>
  );
}
