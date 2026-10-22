"use client";
import { useEffect, type RefObject } from "react";
import Lenis from "lenis";
import gsap from "gsap";

export const chapters = [
  "hello",
  "intro",
  "systems",
  "beliefs",
  "islamabad",
  "work",
  "about",
  "contact",
] as const;
export const chapterLabels = [
  "START",
  "HELLO",
  "SYSTEMS",
  "BELIEFS",
  "ISLAMABAD",
  "WORK",
  "ABOUT",
  "CONTACT",
];
const colors = [
  "#5c5681",
  "#a34d73",
  "#695a79",
  "#a6844d",
  "#69796d",
  "#727b48",
  "#92566b",
  "#5c5681",
];

/** One Lenis clock drives all scenes. No per-frame React rendering. */
export function useDreamScroll(root: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const media = gsap.matchMedia();
    media.add(
      "(min-width: 701px) and (prefers-reduced-motion: no-preference)",
      () => {
        const frame = node.querySelector<HTMLElement>(".dream-frame")!;
        const panels = Array.from(node.querySelectorAll<HTMLElement>(".scene"));
        const markers = Array.from(
          node.querySelectorAll<HTMLElement>(".chapter-marker"),
        );
        const navigation = Array.from(
          node.querySelectorAll<HTMLAnchorElement>("[data-chapter]"),
        );
        const track = node.querySelector<HTMLElement>(".work-track")!;
        const workWindow = node.querySelector<HTMLElement>(".work-window")!;
        const lenis = new Lenis({
          lerp: 0.085,
          smoothWheel: true,
          syncTouch: false,
        });
        let offsets: number[] = [];
        let ends: number[] = [];
        let current = -1;
        let workTravel = 0;
        node.classList.add("is-enhanced");
        const measure = () => {
          offsets = markers.map((marker) => marker.offsetTop);
          ends = markers.map(
            (marker) => marker.offsetTop + marker.offsetHeight,
          );
          workTravel = Math.max(0, track.scrollWidth - workWindow.clientWidth);
        };
        measure();
        const tick = (time: number) => {
          lenis.raf(time * 1000);
          const y = window.scrollY;
          let index = offsets.findIndex(
            (offset, i) => y >= offset && y < ends[i]!,
          );
          if (index < 0) index = y >= offsets[7]! ? 7 : 0;
          const progress = Math.min(
            1,
            Math.max(0, (y - offsets[index]!) / (ends[index]! - offsets[index]!)),
          );
          if (current !== index) {
            current = index;
            frame.style.setProperty("--scene-color", colors[index]!);
            panels.forEach((panel, i) => {
              panel.inert = i !== index;
              panel.setAttribute("aria-hidden", String(i !== index));
              panel.classList.toggle("is-active", i === index);
            });
            navigation.forEach((link) => {
              const selected = link.dataset.chapter === chapters[index];
              if (selected) link.setAttribute("aria-current", "location");
              else link.removeAttribute("aria-current");
            });
          }
          panels[index]!.style.setProperty("--progress", String(progress));
          panels[index]!.style.setProperty(
            "--enter",
            String(index === 0 ? 1 : Math.min(1, progress / 0.1)),
          );
          frame.style.setProperty(
            "--journey",
            `${Math.min(100, (y / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`,
          );
          if (index === 5)
            track.style.transform = `translate3d(${-Math.min(1, Math.max(0, (progress - 0.05) / 0.8)) * workTravel}px,0,0)`;
        };
        gsap.ticker.add(tick);
        const navigate = (event: MouseEvent) => {
          if (
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.altKey ||
            event.shiftKey
          )
            return;
          const anchor =
            event.target instanceof Element
              ? event.target.closest<HTMLAnchorElement>("[data-chapter]")
              : null;
          const index = chapters.indexOf(
            anchor?.dataset.chapter as (typeof chapters)[number],
          );
          if (index < 0) return;
          event.preventDefault();
          lenis.scrollTo(
            offsets[index]! +
              (index === 0 || index === 5
                ? 0
                : Math.min(160, (ends[index]! - offsets[index]!) * 0.13)),
            {
              duration: 1.5,
              onComplete: () => {
                panels[index]!.focus({ preventScroll: true });
                history.replaceState(null, "", `#${chapters[index]}`);
              },
            },
          );
        };
        node.addEventListener("click", navigate);
        const revealCard = (event: FocusEvent) => {
          if (!(event.target instanceof Element)) return;
          const card = event.target.closest<HTMLElement>(".work-card");
          if (!card || !workTravel || current !== 5) return;
          const x = Math.min(workTravel, Math.max(0, card.offsetLeft - 25));
          const progress = 0.05 + x / workTravel * 0.8;
          lenis.scrollTo(offsets[5]! + progress * (ends[5]! - offsets[5]!), { immediate: true });
          workWindow.scrollLeft = 0;
          panels[5]!.scrollLeft = 0;
        };
        node.addEventListener("focusin", revealCard);
        const observer = new ResizeObserver(measure);
        observer.observe(node);
        window.addEventListener("resize", measure);
        document.fonts.ready.then(measure);
        const hashIndex = chapters.indexOf(
          location.hash.slice(1) as (typeof chapters)[number],
        );
        if (hashIndex > 0)
          lenis.scrollTo(offsets[hashIndex]! + 160, { immediate: true });
        tick(0);
        return () => {
          gsap.ticker.remove(tick);
          lenis.destroy();
          observer.disconnect();
          window.removeEventListener("resize", measure);
          node.removeEventListener("click", navigate);
          node.removeEventListener("focusin", revealCard);
          node.classList.remove("is-enhanced");
          frame.style.removeProperty("--scene-color");
          frame.style.removeProperty("--journey");
          panels.forEach((panel) => {
            panel.inert = false;
            panel.removeAttribute("aria-hidden");
            panel.style.removeProperty("--enter");
            panel.style.removeProperty("--progress");
          });
          track.style.removeProperty("transform");
        };
      },
    );
    return () => media.revert();
  }, [root]);
}
