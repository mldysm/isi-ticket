'use client'

import { useRef } from "react";
import Camp from "@/components/Info";
import Features from "@/components/Features";
import Form from "@/components/Form";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import { Progressbar } from "@/components/Progressbar";
import Info from "@/components/Info";

export default function Home() {
  const mainRef = useRef<HTMLElement | null>(null);

  return (
    <main ref={mainRef}>
      <Progressbar target={mainRef} />
      <Hero />
      <Info />
      <Guide />
      <Features />
      <Form />
    </main>
  );
}
