import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero8 from "@/assets/hero-8.jpg";

const slides = [
  {
    image: hero5,
    badge: "Restoring Vision Since 2015",
    title: "Welcome to",
    titleHighlight: "TLEC (Re)Hab",
    titleEnd: "Foundation",
    subtitle:
      "Your partner in sight restoration and rehabilitation. We combine world-class eye care with compassionate long-term support for the blind and visually impaired.",
    cta1: { label: "Our Services", to: "/eye-clinic" },
    cta2: { label: "Book a Visit", to: "/contact" },
  },
  {
    image: hero2,
    badge: "Professional Development",
    title: "Training",
    titleHighlight: "Eye Care",
    titleEnd: "Professionals",
    subtitle:
      "Low vision intensive courses and professional development programs equipping eye care workers across Nigeria with world-class skills.",
    cta1: { label: "Our Programs", to: "/eye-clinic" },
    cta2: { label: "Learn More", to: "/about" },
  },
  {
    image: hero8,
    badge: "Comprehensive Eye Care",
    title: "Building",
    titleHighlight: "Brighter",
    titleEnd: "Futures",
    subtitle:
      "From pediatric ophthalmology to low vision rehabilitation — every patient deserves to see the world clearly.",
    cta1: { label: "Visit The Clinic", to: "/eye-clinic" },
    cta2: { label: "Contact Us", to: "/contact" },
  },
  {
    image: hero1,
    badge: "Make a Difference",
    title: "Every Person",
    titleHighlight: "Deserves",
    titleEnd: "to See",
    subtitle:
      "Your support funds rehabilitation programs, eye surgeries, and professional training that transforms lives across Nigeria.",
    cta1: { label: "Donate Now", to: "/donate" },
    cta2: { label: "Get Involved", to: "/contact" },
  },
  {
    image: hero3,
    badge: "Rehabilitation & Independence",
    title: "Independence",
    titleHighlight: "Through",
    titleEnd: "Rehabilitation",
    subtitle:
      "1-2 year orientation, mobility training, and life skills programs empowering blind individuals to live independently.",
    cta1: { label: "About Us", to: "/about" },
    cta2: { label: "Our Impact", to: "/blog" },
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning]
  );

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo]
  );
  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo]
  );

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[85vh] md:h-screen min-h-[550px] max-h-[900px] overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
            i === current
              ? "opacity-100 z-10 scale-100"
              : "opacity-0 z-0 scale-105"
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(213,86%,8%,0.93)] via-[hsl(213,86%,12%,0.85)] to-[hsl(193,100%,30%,0.55)]" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container">
          <div className="max-w-2xl space-y-6">
            {/* Badge */}
            <div
              key={`badge-${current}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-sm animate-fade-in"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">
                {slide.badge}
              </span>
            </div>

            {/* Title */}
            <h1
              key={`title-${current}`}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] animate-slide-in"
            >
              <span className="text-primary-foreground">{slide.title} </span>
              <span className="text-secondary">{slide.titleHighlight}</span>
              <br />
              <span className="text-primary-foreground">{slide.titleEnd}</span>
            </h1>

            {/* Subtitle */}
            <p
              key={`sub-${current}`}
              className="text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl animate-slide-in"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${current}`}
              className="flex flex-wrap gap-4 animate-slide-in"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              <Link
                to={slide.cta1.to}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/25"
              >
                {slide.cta1.label}
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to={slide.cta2.to}
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 backdrop-blur-sm transition-all"
              >
                <Eye size={18} />
                {slide.cta2.label}
              </Link>
            </div>

            {/* Social proof */}
            <div
              key={`proof-${current}`}
              className="flex items-center gap-4 pt-4 animate-slide-in"
              style={{ animationDelay: "0.6s", opacity: 0 }}
            >
              <div className="flex -space-x-3">
                {[
                  "bg-secondary",
                  "bg-accent",
                  "bg-primary",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full ${bg} border-2 border-primary-foreground/20 flex items-center justify-center`}
                  >
                    <Heart size={14} className="text-primary-foreground" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-primary-foreground font-semibold text-sm">
                  1,000+ Lives Touched
                </p>
                <p className="text-primary-foreground/60 text-xs">
                  Since 2015 across Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? "w-10 bg-secondary"
                : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSlider;
