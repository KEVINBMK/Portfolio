// Sélectionne les éléments img
const images = document.querySelectorAll('img');

// Ajout des effets de scrolling avec GSAP
images.forEach((image, index) => {
  gsap.to(image, {
    scrollTrigger: {
      trigger: image,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      markers: false,
    },
    x: () => -100 * index,
    ease: "none",
  });
});