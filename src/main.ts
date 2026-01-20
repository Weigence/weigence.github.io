import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', (): void => {
  // Set current year in footer
  const yearElement: HTMLElement | null = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }

  // Create a timeline for coordinated animations
  const tl: GSAPTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Animate logo
  tl.from('.logo', {
    duration: 1.2,
    y: 30,
    opacity: 0,
    scale: 0.9,
    ease: 'back.out(1.4)',
  })
  // Animate tagline
  .from('.tagline', {
    duration: 1,
    y: 20,
    opacity: 0,
  }, '-=0.4') // Start 0.4s before previous animation ends
  // Animate footer
  .from('footer', {
    duration: 0.8,
    opacity: 0,
  }, '-=0.6');

  // Add subtle hover effect on logo
  const logo: HTMLElement | null = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('mouseenter', (): void => {
      gsap.to('.logo', {
        duration: 0.3,
        scale: 1.05,
        ease: 'power2.out'
      });
    });

    logo.addEventListener('mouseleave', (): void => {
      gsap.to('.logo', {
        duration: 0.3,
        scale: 1,
        ease: 'power2.out'
      });
    });
  }
});
