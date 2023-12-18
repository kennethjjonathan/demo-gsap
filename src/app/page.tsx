"use client";

import Loader from "@/components/Loader/Loader";
import { useLayoutEffect, useState } from "react";
import HomePage from "@/components/HomePage/HomePage";
import gsap from "gsap";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [timeline, setTImeline] = useState<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setIsLoading(false),
      });
      setTImeline(tl);
    });
    return () => context.revert();
  }, []);
  return <main>{isLoading ? <Loader timeline={timeline}/>: <HomePage/>}</main>;
}
