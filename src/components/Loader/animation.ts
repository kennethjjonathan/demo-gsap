import gsap from "gsap";
import { Ref } from "react";

export const introAnimation = (
  textRollRef: React.RefObject<HTMLDivElement>
) => {
  const tl = gsap.timeline();
  tl.to(textRollRef.current, {
    yPercent: -40,
    duration: 4,
    ease: "expo.inOut",
  });
  return tl;
};

export const progressBarAnimation = (
  progressBar: React.RefObject<HTMLDivElement>,
  textProgress: React.RefObject<HTMLParagraphElement>
) => {
  const tl = gsap.timeline();
  tl.to(progressBar.current, {
    xPercent: 100,
    duration: 4,
    ease: "expo.inOut",
  }).to(textProgress.current, {
    textContent: "100",
    duration: 4,
    roundProps: "textContent"
  }, 0)
  return tl;
};
