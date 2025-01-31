"use client";
import * as React from "react";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import ProductSection from "./ProductSection";
import DifferentiatorsSection from "./DifferentiatorsSection";
import { NormalPeopleCarousel } from './components/NormalPeopleCarousel';
import LogoStrip from './components/LogoStrip';
import TestamonialSection from './components/TestamonialSection';
import ProblemStatement from './components/ProblemStatement';
import BookDemo from './components/BookDemo';
import MainLayout from './components/MainLayout';
import { demoLink } from './constants/link-urls';
import Faq from "./components/Faq";

export default function Main() {
  return (
    <MainLayout>
      <HeroSection />
      <LogoStrip />
      <ProblemStatement />
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
