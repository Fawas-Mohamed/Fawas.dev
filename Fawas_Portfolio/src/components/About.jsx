import React, { useEffect, useRef, useState } from 'react';
import profileImage from '../assets/about/image.png';

const TERMINAL_LINES = [
  { cmd: 'whoami', out: 'mohamed_fawas' },
  { cmd: 'role', out: 'full-stack engineer — react · node · .net' },
  { cmd: 'location', out: 'homagama, sri lanka' },
  { cmd: 'status', out: 'open to intern / trainee roles, 2026' },
];

const STACK = [
  'react.js', 'typescript', 'node.js', 'asp.net core',
  'mongodb', 'sql server', 'azure', 'flutter',
];

const STATS = [
  { value: '3.69', label: 'CGPA / 4.0' },
  { value: '04', label: 'shipped projects' },
  { value: '2025', label: 'building in public' },
];

const About = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          TERMINAL_LINES.forEach((_, i) => {
            setTimeout(() => setVisibleLines((v) => Math.max(v, i + 1)), i * 550);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-[#0b0a12] px-6 py-28 md:px-12 overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#8B5CF6]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#22D3EE]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <p
          className="mb-3 text-xs tracking-[0.3em] text-[#22D3EE] uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          01 / about
        </p>

        <div className="flex flex-col gap-14 md:flex-row md:items-start">
          {/* Left: terminal identity card */}
          <div data-aos="fade-right" className="w-full shrink-0 md:w-[380px]">
            <div className="overflow-hidden rounded-xl border border-[#8B5CF6]/25 bg-[#14121F] shadow-[0_20px_60px_rgba(139,92,246,0.15)]">
              {/* title bar */}
              <div className="flex items-center gap-2 border-b border-white/5 bg-[#0f0e18] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                <span
                  className="ml-2 text-xs text-[#6B7280]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  fawas@portfolio ~
                </span>
              </div>

              {/* body */}
              <div
                className="space-y-3 px-5 py-6 text-sm"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {TERMINAL_LINES.map((line, i) => (
                  <div
                    key={line.cmd}
                    className={`transition-opacity duration-300 ${
                      i < visibleLines ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="text-[#22D3EE]">
                      <span className="text-[#8B5CF6]">$</span> {line.cmd}
                    </p>
                    <p className="pl-3 text-[#EDEBF7]/90">{line.out}</p>
                  </div>
                ))}
                <span
                  className={`inline-block h-4 w-2 bg-[#22D3EE] ${
                    visibleLines >= TERMINAL_LINES.length ? 'about-cursor' : 'opacity-0'
                  }`}
                />
              </div>
            </div>

            {/* photo, offset behind the card */}
            <div className="mt-6 flex justify-center">
              <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-[#8B5CF6]/40 shadow-[0_0_30px_rgba(139,92,246,0.25)]">
                <img src={profileImage} alt="Mohamed Fawas" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right: headline, bio, stats, tags */}
          <div data-aos="fade-left" data-aos-delay="150" className="flex-1">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#EDEBF7] md:text-4xl">
              I turn full-stack ideas into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]">
                deployed, working software.
              </span>
            </h2>

            <p className="mb-4 max-w-2xl leading-relaxed text-[#B4AFCB]">
              I'm a Software Engineering undergraduate at NSBM Green University, currently interning
              as a full-stack developer. Most of what I build ends up live — a real-time auction
              platform running on Azure and SignalR, a fuel-quota system with role-based dashboards,
              a Flutter app wired into Firebase and TMDB. I care about the parts of the stack most
              people skip: data modeling, deployment, and the debugging that happens after the demo
              ends.
            </p>

            <p className="mb-10 max-w-2xl leading-relaxed text-[#B4AFCB]">
              Outside of coursework, I write and record what I learn — from CI/CD pipelines to
              AI-assisted development — for other engineering students figuring out the same things.
            </p>

            {/* stats */}
            <div className="mb-10 grid grid-cols-3 gap-6 border-y border-white/10 py-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p
                    className="text-2xl font-bold text-[#EDEBF7] md:text-3xl"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-[#6B7280]">{s.label}</p>
                </div>
              ))}
            </div>

            {/* stack tags */}
            <div className="flex flex-wrap gap-2">
              {STACK.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 px-3 py-1.5 text-xs text-[#B4AFCB] transition-colors hover:border-[#22D3EE]/50 hover:text-[#22D3EE]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  --{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-cursor {
          animation: about-blink 1s step-end infinite;
        }
        @keyframes about-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-cursor { animation: none; opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default About;
