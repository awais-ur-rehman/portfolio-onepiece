"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { profile, projects } from "@/content/portfolio";
import { Character } from "./character";
import { Islamabad, PaperPlane, Spark } from "./motifs";
import { StarField } from "./star-field";
import { chapterLabels, chapters, useDreamScroll } from "./use-dream-scroll";

function SoundToggle() {
  const [on, setOn] = useState(false);
  const audio = useRef<AudioContext | null>(null);
  useEffect(
    () => () => {
      void audio.current?.close();
    },
    [],
  );
  async function toggle() {
    if (audio.current) {
      await audio.current.close();
      audio.current = null;
      setOn(false);
      return;
    }
    const context = new AudioContext();
    audio.current = context;
    const gain = context.createGain();
    gain.gain.setValueAtTime(0, context.currentTime);
    gain.gain.linearRampToValueAtTime(0.025, context.currentTime + 2);
    gain.connect(context.destination);
    [130.81, 196, 261.63].forEach((frequency) => {
      const oscillator = context.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      oscillator.connect(gain);
      oscillator.start();
    });
    await context.resume();
    setOn(true);
  }
  return (
    <button
      className={`sound-toggle ${on ? "sound-on" : ""}`}
      onClick={() => void toggle()}
      aria-pressed={on}
      aria-label={on ? "Turn ambient sound off" : "Turn ambient sound on"}
    >
      <span className="equalizer" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>{" "}
      SOUND {on ? "ON" : "OFF"}
    </button>
  );
}
function Nameplate() {
  return (
    <div className="nameplate">
      <h1>AWAIS UR REHMAN</h1>
      <i />
      <i />
      <i />
      <i />
      <span className="designer-cursor" aria-hidden="true">
        ↖<b>Awais</b>
      </span>
    </div>
  );
}
function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      timer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }
  return (
    <>
      <div className="hero-heading">
        <p className="eyebrow">THERE’S ALWAYS ANOTHER GOOD IDEA</p>
        <div className="contact-name">LET’S MAKE IT REAL.</div>
      </div>
      <Character contact />
      <div className="dream-sticker">
        You’ve been wandering
        <br />
        inside Awais’s mind.<span>THANKS FOR STOPPING BY ↗</span>
      </div>
      <div className="shirt-copy contact-copy">
        <h2>GET IN TOUCH</h2>
        <div className="email-line">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <button onClick={() => void copy()} aria-label="Copy email address">
            {copied ? "✓" : "▢"}
          </button>
        </div>
        <p className="copy-status" role="status">
          {copied ? "Email copied" : "Have something in mind? Let’s talk."}
        </p>
        <div className="contact-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GITHUB ↗
          </a>
          <Link href="/resume">RÉSUMÉ ↗</Link>
        </div>
      </div>
    </>
  );
}
export function DreamPortfolio() {
  const root = useRef<HTMLDivElement>(null);
  useDreamScroll(root);
  return (
    <div ref={root} className="dream-site">
      <a className="skip-link" href="#work" data-chapter="work">
        Skip to selected work
      </a>
      <div className="dream-frame">
        <StarField />
        <div className="grain" aria-hidden="true" />
        <header className="site-header">
          <a className="wordmark" href="#hello" data-chapter="hello">
            AWAIS UR REHMAN
          </a>
          <span className="availability">
            <i /> OPEN TO GOOD CONVERSATIONS
          </span>
          <nav aria-label="Main navigation">
            <SoundToggle />
            <a href="#work" data-chapter="work">
              WORK
            </a>
            <a href="#about" data-chapter="about">
              ABOUT
            </a>
            <a href="#contact" data-chapter="contact">
              CONTACT
            </a>
          </nav>
        </header>
        <main>
          <section
            id="hello"
            className="scene hero-scene is-active"
            tabIndex={-1}
            aria-label="Welcome to Awais’s portfolio"
          >
            <div className="hero-heading">
              <p className="eyebrow">INSIDE THE MIND OF</p>
              <Nameplate />
              <p className="hero-subtitle">ENGINEERING EXPERIENCES</p>
            </div>
            <Character />
            <div className="shirt-copy">
              <p className="role">FULL-STACK & AI ENGINEER</p>
              <p>
                I turn complicated problems
                <br />
                into things that just work.
              </p>
            </div>
            <span className="little-birds" aria-hidden="true">
              ⌁<br />⌁
            </span>
            <p className="scroll-invitation">
              SCROLL TO STEP INSIDE <span>↓</span>
            </p>
            <p className="hero-coordinate">
              ISLAMABAD, PAKISTAN
              <br />A CURIOUS MIND. ALWAYS BUILDING.
            </p>
          </section>
          <section
            id="intro"
            className="scene intro-scene"
            tabIndex={-1}
            aria-labelledby="intro-title"
          >
            <div className="scene-content">
              <p className="eyebrow">A QUICK INTRODUCTION</p>
              <h2 id="intro-title" className="hello-title">
                <span>HEY,</span> <span>I’M</span>
                <br />
                <em>AWAIS.</em>
                <Spark />
              </h2>
              <div className="intro-bottom">
                <p>
                  {profile.introduction}
                  <br />
                  From the first prototype to the production incident.
                </p>
                <p>
                  FULL-STACK AT HEART.
                  <br />
                  AI ON TOP. CURIOSITY EVERYWHERE.
                </p>
              </div>
            </div>
          </section>
          <section
            id="systems"
            className="scene systems-scene"
            tabIndex={-1}
            aria-labelledby="systems-title"
          >
            <div className="scene-content">
              <p className="eyebrow">WHAT GOES ON IN HERE?</p>
              <h2 id="systems-title" className="serif-title">
                A mind for systems.
                <br />
                <em>A thing for possibilities.</em>
              </h2>
              <div className="system-diagram">
                <span className="orbit-label label-one">WEB & MOBILE</span>
                <span className="orbit-label label-two">APPLIED AI</span>
                <span className="orbit-label label-three">
                  PRODUCTION SYSTEMS
                </span>
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="system-core">
                  &lt; / &gt;<small>CONNECTING THE DOTS</small>
                </div>
                <Spark className="orbit-spark" />
              </div>
              <p className="systems-note">
                React & Next.js. Node & Python. Voice, vision & RAG.
                <br />
                The useful part is how they work together.
              </p>
            </div>
          </section>
          <section
            id="beliefs"
            className="scene beliefs-scene"
            tabIndex={-1}
            aria-labelledby="beliefs-title"
          >
            <div className="scene-content">
              <p className="eyebrow">A FEW THINGS I BELIEVE</p>
              <h2 id="beliefs-title" className="belief-title">
                MAKE IT <em>WORK.</em>
                <br />
                MAKE IT <em>MATTER.</em>
              </h2>
              <div className="belief-notes">
                <p>
                  <span>01 / UNDERSTAND FIRST</span>A good system starts with
                  <br />a better question.
                </p>
                <p>
                  <span>02 / BUILD FOR REAL LIFE</span>The network fails.
                  <br />
                  The product still has to work.
                </p>
                <p>
                  <span>03 / KEEP YOUR CURIOSITY</span>There’s usually a more
                  <br />
                  interesting way through.
                </p>
              </div>
            </div>
          </section>
          <section
            id="islamabad"
            className="scene city-scene"
            tabIndex={-1}
            aria-labelledby="city-title"
          >
            <div className="scene-content">
              <p className="eyebrow">A LITTLE BIT OF HOME</p>
              <h2 id="city-title" className="city-title">
                ISLAMABAD.
              </h2>
              <p className="city-caption">
                ROOTED IN PAKISTAN. BUILDING FOR EVERYWHERE.
              </p>
              <Islamabad />
              <p className="city-note">
                Somewhere between the Margalla Hills, a football match,
                <br />
                an anime rabbit hole, and one more idea I need to try.
              </p>
            </div>
          </section>
          <section
            id="work"
            className="scene work-scene"
            tabIndex={-1}
            aria-labelledby="work-title"
          >
            <div className="work-window">
              <div className="work-track">
                <div className="work-introduction">
                  <div className="peek-eyes" aria-hidden="true">
                    <i />
                    <i />
                  </div>
                  <p className="eyebrow">LESS TALK. SOME THINGS I’VE MADE.</p>
                  <h2 id="work-title">
                    SELECTED
                    <br />
                    WORK<span>↗</span>
                  </h2>
                  <p>
                    Products that live in the real world.
                    <br />A few ambitious experiments, too.
                  </p>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    MORE ON GITHUB ↗
                  </a>
                  <span className="gallery-hint">
                    KEEP SCROLLING TO EXPLORE →
                  </span>
                </div>
                {projects.map((project, i) => (
                  <article className="work-card" key={project.slug}>
                    <div className="card-kicker">
                      <span>
                        {String(i + 1).padStart(2, "0")} / {project.name}
                      </span>
                      <span>{project.category}</span>
                    </div>
                    <Link
                      className="project-cover"
                      href={`/work/${project.slug}`}
                      aria-label={`Explore ${project.name}`}
                    >
                      <Image
                        src={project.cover}
                        alt={`Original concept illustration for ${project.name}`}
                        width={1000}
                        height={700}
                      />
                      <span className="cover-arrow">↗</span>
                    </Link>
                    <h3>
                      <Link href={`/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p>{project.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section
            id="about"
            className="scene about-scene"
            tabIndex={-1}
            aria-labelledby="about-title"
          >
            <div className="about-content">
              <PaperPlane />
              <p className="eyebrow">THE PERSON BEHIND THE PULL REQUESTS</p>
              <h2 id="about-title">
              I care about the details{" "}
                <br />
              that make a product{" "}
                <br />
                <em>hold up in the real world.</em>
              </h2>
              <p className="about-biography">{profile.biography}</p>
              <div className="about-facts">
                <div>
                  <h3>NOW</h3>
                  <p>
                    Specialist NOC (L2) & RMS Lead
                    <br />
                    at Engro Enfrashare.
                  </p>
                </div>
                <div>
                  <h3>ALSO</h3>
                  <p>
                    Co-founder of Payssenger.
                    <br />
                    Kaggle silver medallist. Anime person.
                  </p>
                </div>
                <div>
                  <h3>THE JOURNEY</h3>
                  <p>
                    COMSATS software engineering ’25.
                    <br />
                    Startups, agencies, and a lot of building.
                  </p>
                </div>
              </div>
              <div className="toolkit">
                <span>MY EVERYDAY TOOLKIT</span>
                {[
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "Flutter",
                  "Redis",
                  "Neo4j",
                  "Docker",
                ].map((tool) => (
                  <span className="tool-chip" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
              <div className="about-links">
                <Link className="text-link" href="/resume">
                  THE FULL STORY & RÉSUMÉ ↗
                </Link>
                <a
                  className="text-link"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB ↗
                </a>
              </div>
            </div>
          </section>
          <section
            id="contact"
            className="scene contact-scene"
            tabIndex={-1}
            aria-label="Get in touch"
          >
            <Contact />
          </section>
        </main>
        <footer className="chapter-footer">
          <div className="ruler" aria-hidden="true">
            <span />
          </div>
          <nav aria-label="Portfolio chapters">
            {chapters.map((chapter, i) => (
              <a href={`#${chapter}`} data-chapter={chapter} key={chapter}>
                {chapterLabels[i]}
              </a>
            ))}
          </nav>
          <span className="footer-credit">A MIND IN PROGRESS · 2026</span>
        </footer>
      </div>
      <div className="scroll-journey" aria-hidden="true">
        {chapters.map((chapter, i) => (
          <div
            key={chapter}
            className={`chapter-marker marker-${chapter}`}
            style={{
              height: `${[190, 130, 150, 140, 140, 600, 180, 160][i]}svh`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
