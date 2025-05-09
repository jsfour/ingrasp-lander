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
import Faq from "./components/Faq";
import { faqs } from './constants/faqs';

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
      <Faq primaryText="Frequently Asked Questions" secondaryText="Answers to common questions" faqs={faqs} />
      <BookDemo href={demoLink} loc="Book Demo Section" />
    </MainLayout>
  );
}
