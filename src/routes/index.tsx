import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import col1 from "@/assets/collection-1.jpg";
import col2 from "@/assets/collection-2.jpg";
import col3 from "@/assets/collection-3.jpg";
import boutiqueImg from "@/assets/boutique.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Fashion Arabia — Women's Couture, Muscat" },
      {
        name: "description",
        content:
          "Prime Fashion Arabia — a quiet luxury women's boutique on Al Mazoon Street, Muscat. Abayas, kaftans and evening wear, crafted with intent.",
      },
      { property: "og:title", content: "Prime Fashion Arabia" },
      {
        property: "og:description",
        content: "Women's couture in the heart of Muscat. Crafted with intent.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-img");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Marquee />
      <Nav />
      <Hero />
      <Philosophy />
      <Collection />
      <Atelier />
      <Visit />
      <Footer />
    </div>
  );
}

/* ---------- Components ---------- */

function Marquee() {
  const items = [
    "New Season — Resort 26",
    "Bespoke Fittings by Appointment",
    "Open Daily · 5 PM – 10 PM",
    "Al Mazoon Street · Muscat",
  ];
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="border-b border-border bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="mx-8 text-xs tracking-[0.3em] uppercase font-light">
            {t} <span className="ml-16 opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-xl tracking-wide">Prime Fashion</span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mt-0.5">
            Arabia · Muscat
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.25em] uppercase">
          {["Collection", "Atelier", "Visit"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="relative group text-foreground/80 hover:text-foreground transition-colors"
            >
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="tel:+96891419642"
          className="text-xs tracking-[0.25em] uppercase border-b border-foreground/30 hover:border-accent hover:text-accent transition-colors pb-1"
        >
          Appointment
        </a>
      </div>
    </header>
  );
}

function SplitTitle({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em]">
          {word.split("").map((c, i) => (
            <span
              key={i}
              className="letter-mask"
              style={{ animationDelay: `${(wi * 6 + i) * 40}ms` }}
            >
              <span style={{ animationDelay: `${(wi * 6 + i) * 40}ms` }}>{c}</span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Prime Fashion Arabia signature piece"
          width={1280}
          height={1600}
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </div>

      {/* Floating arabesque ornament */}
      <svg
        className="absolute top-24 right-6 md:right-16 w-40 md:w-64 text-accent/40 animate-float-slow"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="60" />
        <path d="M100 10 C 140 60, 140 140, 100 190 C 60 140, 60 60, 100 10 Z" />
        <path d="M10 100 C 60 60, 140 60, 190 100 C 140 140, 60 140, 10 100 Z" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 md:pb-28 w-full">
        <p className="text-xs tracking-[0.5em] uppercase text-bronze mb-6 animate-rise">
          ✦ Est. Muscat · Resort 26
        </p>
        <h1 className="font-display text-[14vw] md:text-[7.5vw] leading-[0.95] tracking-tight max-w-5xl">
          <SplitTitle text="Quiet" />
          <br />
          <span className="italic text-shimmer">
            <SplitTitle text="luxury," />
          </span>
          <br />
          <SplitTitle text="worn slowly." />
        </h1>
        <div
          className="mt-10 max-w-md text-muted-foreground animate-rise"
          style={{ animationDelay: "900ms" }}
        >
          <p className="text-base leading-relaxed">
            A women's atelier on Al Mazoon Street. Abayas, kaftans and evening
            silhouettes — cut, draped and finished by hand.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <a
              href="#collection"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-xs tracking-[0.3em] uppercase hover:bg-accent transition-colors duration-500"
            >
              View Collection
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#visit"
              className="text-xs tracking-[0.3em] uppercase border-b border-foreground/40 pb-1 hover:border-accent hover:text-accent transition-colors"
            >
              Book a fitting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="py-32 md:py-48 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-10 items-start">
        <p className="md:col-span-3 text-xs tracking-[0.4em] uppercase text-muted-foreground reveal">
          — Philosophy
        </p>
        <div className="md:col-span-9">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] reveal">
            We dress women who understand that elegance is{" "}
            <span className="italic text-shimmer">a private language</span> — spoken in
            weight of cloth, line of shoulder, way of walking.
          </h2>
          <div className="mt-12 grid sm:grid-cols-3 gap-10 text-sm text-muted-foreground">
            {[
              ["01 ·  Cloth", "Italian crepe, Japanese silk, hand-loomed cottons."],
              ["02 ·  Cut", "Single-pattern fittings, adjusted to your line."],
              ["03 ·  Time", "Two to four weeks. Slow on purpose."],
            ].map(([h, b], i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                <p className="font-display text-xl text-foreground tracking-wide">{h}</p>
                <div className="hairline w-12 my-4" />
                <p className="leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Collection() {
  const pieces = [
    {
      img: col1,
      tag: "N° 01",
      name: "Madinat Kaftan",
      note: "Cream silk, hand-embroidered gold placket.",
    },
    {
      img: col2,
      tag: "N° 02",
      name: "Mazoon Abaya",
      note: "Ink crepe, freshwater pearl yoke.",
    },
    {
      img: col3,
      tag: "N° 03",
      name: "Khareef Gown",
      note: "Blush chiffon, six-panel skirt.",
    },
  ];
  return (
    <section id="collection" className="bg-secondary/40 py-32 md:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16 reveal">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
              — Resort 26
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-none">
              The <span className="italic">Collection</span>
            </h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs">
            Twelve pieces. Each made in series of nine. Numbered, signed, and fitted in
            atelier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {pieces.map((p, i) => (
            <article
              key={i}
              className="group reveal"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative overflow-hidden bg-muted aspect-[4/5]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="reveal-img w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700" />
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.4em] uppercase text-cream bg-primary/70 backdrop-blur px-3 py-1.5">
                  {p.tag}
                </span>
              </div>
              <div className="pt-6 flex items-baseline justify-between">
                <h3 className="font-display text-2xl">{p.name}</h3>
                <span className="text-xs tracking-[0.3em] uppercase text-bronze opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  Enquire →
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{p.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Atelier() {
  return (
    <section id="atelier" className="relative py-32 md:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[5/4] overflow-hidden">
          <img
            src={boutiqueImg}
            alt="Prime Fashion Arabia boutique interior"
            loading="lazy"
            width={1600}
            height={900}
            className="reveal-img w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6 reveal">
            — The Atelier
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] reveal">
            A room that <span className="italic text-shimmer">listens</span>.
          </h2>
          <p
            className="mt-8 text-muted-foreground leading-relaxed reveal max-w-md"
            style={{ transitionDelay: "120ms" }}
          >
            Off Al Mazoon Street, behind a slow brass door, the atelier holds three
            fittings an evening. Tea is brought. Lengths are measured twice. Nothing
            leaves until it sits exactly the way it should.
          </p>
          <div
            className="mt-10 grid grid-cols-2 gap-8 reveal"
            style={{ transitionDelay: "240ms" }}
          >
            <div>
              <p className="font-display text-3xl text-shimmer">12yr</p>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-2">
                In Muscat
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-shimmer">9 / piece</p>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-2">
                Per edition
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section
      id="visit"
      className="bg-primary text-primary-foreground py-32 md:py-44 relative overflow-hidden"
    >
      {/* faint ornamental grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase opacity-60 mb-6 reveal">
            — Visit
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-[1] reveal">
            Al Mazoon Street, <br />
            <span className="italic text-shimmer">Muscat.</span>
          </h2>
          <p
            className="mt-8 opacity-80 leading-relaxed max-w-md reveal"
            style={{ transitionDelay: "120ms" }}
          >
            By appointment, or simply step in during opening hours. We will pour
            something cold and show you the new cloths.
          </p>
          <div className="mt-12 space-y-4 reveal" style={{ transitionDelay: "200ms" }}>
            <a
              href="https://maps.app.goo.gl/tYNXbuWUPzrZBnzs9"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-t border-primary-foreground/20 pt-4 hover:border-accent transition-colors"
            >
              <span className="text-xs tracking-[0.3em] uppercase opacity-70">Address</span>
              <span className="font-display text-lg group-hover:text-accent transition-colors">
                J58M+P9C, Al Mazoon St →
              </span>
            </a>
            <a
              href="tel:+96891419642"
              className="group flex items-center justify-between border-t border-primary-foreground/20 pt-4 hover:border-accent transition-colors"
            >
              <span className="text-xs tracking-[0.3em] uppercase opacity-70">Phone</span>
              <span className="font-display text-lg group-hover:text-accent transition-colors">
                +968 9141 9642
              </span>
            </a>
            <a
              href="https://www.instagram.com/primefashionarabia"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-t border-b border-primary-foreground/20 py-4 hover:border-accent transition-colors"
            >
              <span className="text-xs tracking-[0.3em] uppercase opacity-70">Instagram</span>
              <span className="font-display text-lg group-hover:text-accent transition-colors">
                @primefashionarabia
              </span>
            </a>
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: "180ms" }}>
          <div className="border border-primary-foreground/20 p-8 md:p-10">
            <p className="text-xs tracking-[0.4em] uppercase opacity-60 mb-6">
              — Opening Hours
            </p>
            <ul className="space-y-3 font-display text-xl">
              {[
                ["Saturday", "5 — 10 PM"],
                ["Sunday", "5 — 10 PM"],
                ["Monday", "5 — 10 PM"],
                ["Tuesday", "5 — 10 PM"],
                ["Wednesday", "5 — 10 PM"],
                ["Thursday", "5 — 10 PM"],
                ["Friday", "Closed"],
              ].map(([d, h]) => (
                <li
                  key={d}
                  className="flex items-baseline justify-between border-b border-primary-foreground/10 pb-3"
                >
                  <span>{d}</span>
                  <span className="text-sm tracking-wider opacity-80">{h}</span>
                </li>
              ))}
            </ul>
            <a
              href="tel:+96891419642"
              className="mt-8 block text-center bg-primary-foreground text-primary py-4 text-xs tracking-[0.3em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors duration-500"
            >
              Book an appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 lg:px-10 text-xs tracking-[0.25em] uppercase text-muted-foreground">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Prime Fashion Arabia</p>
        <p className="font-arabic text-base normal-case tracking-normal text-foreground/70">
          برايم فاشن أرابيا
        </p>
        <p>Muscat · Oman</p>
      </div>
    </footer>
  );
}
