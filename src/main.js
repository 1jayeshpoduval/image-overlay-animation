import "./style.css";
import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const gridImageContainers = document.querySelectorAll(
    '[data-content="image-container"]',
  );

  gridImageContainers.forEach((gridImageContainer) => {
    const imageOverlay1 = gridImageContainer.querySelector("#overlay1");
    const imageOverlay2 = gridImageContainer.querySelector("#overlay2");

    gridImageContainer.addEventListener("mouseenter", () => {
      gsap.defaults({ overwrite: "auto" });
      gsap.to(imageOverlay1, {
        bottom: "-30%",
        left: "0%",
        rotate: 10,
        ease: "power3.out",
        duration: 0.79,
      });
      gsap.to(imageOverlay2, {
        bottom: "-20%",
        right: "-10%",
        rotate: -8,
        ease: "power3.out",
        duration: 0.79,
      });
    });
    gridImageContainer.addEventListener("mouseleave", () => {
      gsap.to(imageOverlay1, {
        bottom: "-100%",
        left: "-100%",
        rotate: 65,
        ease: "power1.in",
        duration: 0.16,
      });
      gsap.to(imageOverlay2, {
        bottom: "-100%",
        right: "-100%",
        rotate: -75,
        ease: "power1.in",
        duration: 0.16,
      });
    });
  });
});
