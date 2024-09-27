import LocomotiveScroll from "locomotive-scroll";

class ScrollManager {
  constructor() {
    this.scroll = null;
  }

  // Initialize Locomotive Scroll
  initScroll() {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.1, // Adjust for smoother transitions
      multiplier: 1,
      class: 'is-revealed',
    });

    this.scroll.on("scroll", (instance) => {
      this.onScroll(instance);
    });
  }

  // Destroy the instance
  destroyScroll() {
    if (this.scroll) {
      this.scroll.destroy();
      this.scroll = null;
    }
  }

  // Handle scroll events to track active sections
  onScroll(instance) {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        section.classList.add("active-section");
      } else {
        section.classList.remove("active-section");
      }
    });
  }
}

export default ScrollManager;
