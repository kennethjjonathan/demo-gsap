"use client";
import React, { useEffect, useRef } from "react";
import { placeholders } from "./placeholders";
import styles from "./Loader.module.css";
import { introAnimation, progressBarAnimation } from "./animation";

interface LoaderProps {
  timeline: gsap.core.Timeline | undefined;
}

const Loader = ({ timeline }: LoaderProps) => {
  const textRollRef = useRef<HTMLDivElement>(null);
  const progressBar = useRef<HTMLDivElement>(null);
  const progressText = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (timeline) {
      timeline
        .add(introAnimation(textRollRef))
        .add(progressBarAnimation(progressBar, progressText), 0);
    }
  }, [timeline]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex items-center justify-center h-40 overflow-hidden relative">
        <div className="flex flex-col items-start space-y-1" ref={textRollRef}>
          {placeholders.map((item, index) => (
            <p key={`${item} ${index}`}>{item}</p>
          ))}
        </div>
        <div className={styles.textLayout} />
      </div>
      <div
        className="fixed bottom-0 w-full bg-black h-12 -left-full"
        ref={progressBar}
      >
        <p className="text-white right-5 absolute" ref={progressText}>
          0
        </p>
      </div>
    </div>
  );
};

export default Loader;
