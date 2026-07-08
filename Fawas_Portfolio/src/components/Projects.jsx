import React, { useEffect, useRef, useState } from 'react';

const FEATURED = {
  name: 'auction-pilot/',
  status: 'live',
  tagline: 'Real-time auction platform — live bidding, synced across every connected user.',
  description:
    'Built a three-tier cloud deployment (Vercel, Azure App Service, Azure SQL Database) with SignalR broadcasting bid updates instantly to every connected client. Handled the parts that actually break in production: connection drops, race conditions on simultaneous bids, and keeping the database consistent under load.',
  stack: ['react.js', 'typescript', 'asp.net core', 'signalr', 'azure sql', 'azure app service', 'vercel'],
  links: { repo: '#', live: '#' },
};

const PROJECTS = [
  {
    name: 'fuel-pass/',
    status: 'academic',
    description:
      'Full-stack fuel quota management system with role-based admin dashboards and secure authentication for real-time quota tracking.',
    stack: ['react.js', 'typescript', 'node.js', 'mongodb'],
    links: { repo: '#' },
  },
  {
    name: 'flutter-movie-app/',
    status: 'academic',
    description:
      'Cross-platform movie discovery app pulling live data from the TMDB API, with Firebase-backed personalization and Firestore sync.',
    stack: ['flutter', 'firebase', 'tmdb api', 'firestore'],
    links: { repo: '#' },
  },
  {
    name: 'enterprise-solutions/',
    status: 'internship',
    description:
      'Web and mobile modules built as part of a professional dev team — REST APIs, database-driven features, and React Native functionality shipped alongside senior engineers.',
    stack: ['react.js (vite)', 'laravel', 'mysql', 'react native', 'supabase'],
    links: {},
  },
];

const STATUS_STYLES = {
  live: { dot: 'bg-[#27c93f]', text: 'text-[#27c93f]', label: 'live', pulse: true },
  academic: { dot: 'bg-[#22D3EE]', text: 'text-[#22D3EE]', label: 'academic', pulse: false },
  internship: { dot: 'bg-[#8B5CF6]', text: 'text-[#8B5CF6]', label: 'internship', pulse: false },
};

const StatusBadge = ({ status }) => {
  const s = STATUS_STYLES[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wide"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${s.dot}`}>
        {s.pulse && (
          <span className={`absolute inline-flex h-full w-full rounded-full ${s.dot} project-ping`} />
        )}
      </span>
      <span className={s.text}>{s.label}</span>
    </span>
  );
};

const Tag = ({ children }) => (
  <span
    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-[#B4AFCB]"
    style={{ fontFamily: "'JetBrains Mono', monospace" }}
  >
    {children}
  </span>
);

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-[#0b0a12] px-6 py-28 md:px-12 overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-[#22D3EE]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <p
          className="mb-3 text-xs tracking-[0.3em] text-[#22D3EE] uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          02 / projects
        </p>
        <h2 className="mb-2 text-3xl font-bold text-[#EDEBF7] md:text-4xl">
          $ ls -la <span className="text-[#8B5CF6]">./projects</span>
        </h2>
        <p className="mb-14 max-w-xl text-[#6B7280]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          4 directories, all shipped.
        </p>

        {/* Featured project */}
        <div
          className={`mb-8 grid grid-cols-1 gap-8 rounded-2xl border border-[#8B5CF6]/25 bg-[#14121F] p-8 shadow-[0_20px_60px_rgba(139,92,246,0.12)] transition-all duration-700 md:grid-cols-5 md:p-10 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="md:col-span-3">
            <div className="mb-4 flex items-center gap-3">
              <h3
                className="text-xl font-bold text-[#EDEBF7] md:text-2xl"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {FEATURED.name}
              </h3>
              <StatusBadge status={FEATURED.status} />
            </div>
            <p className="mb-4 text-lg leading-snug text-[#EDEBF7]/90">{FEATURED.tagline}</p>
            <p className="mb-6 leading-relaxed text-[#B4AFCB]">{FEATURED.description}</p>
            <div className="mb-6 flex flex-wrap gap-2">
              {FEATURED.stack.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="flex gap-5 text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <a href={FEATURED.links.live} className="text-[#22D3EE] hover:text-[#8B5CF6] transition-colors">
                view live →
              </a>
              <a href={FEATURED.links.repo} className="text-[#B4AFCB] hover:text-[#EDEBF7] transition-colors">
                source →
              </a>
            </div>
          </div>

          {/* live-sync visual */}
          <div className="flex items-center justify-center md:col-span-2">
            <div className="w-full max-w-[220px] rounded-xl border border-white/10 bg-[#0f0e18] p-6">
              <p
                className="mb-5 text-center text-[10px] uppercase tracking-widest text-[#6B7280]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                synced via signalr
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center gap-2">
                  <span className="h-9 w-9 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/50 project-node" />
                  <span
                    className="text-[10px] text-[#6B7280]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    bidder
                  </span>
                </div>
                <div className="relative mx-2 h-px flex-1 bg-gradient-to-r from-[#8B5CF6]/60 to-[#22D3EE]/60 overflow-hidden">
                  <span className="absolute inset-y-0 left-0 w-4 bg-[#EDEBF7] project-travel" />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span
                    className="h-9 w-9 rounded-full bg-[#22D3EE]/20 border border-[#22D3EE]/50 project-node"
                    style={{ animationDelay: '0.6s' }}
                  />
                  <span
                    className="text-[10px] text-[#6B7280]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    live board
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className={`rounded-xl border border-white/10 bg-[#14121F] p-6 transition-all duration-700 hover:border-[#8B5CF6]/40 ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: visible ? `${150 + i * 120}ms` : '0ms' }}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3
                  className="text-base font-bold text-[#EDEBF7]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {p.name}
                </h3>
                <StatusBadge status={p.status} />
              </div>
              <p className="mb-5 text-sm leading-relaxed text-[#B4AFCB]">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {p.links.repo && (
                <a
                  href={p.links.repo}
                  className="mt-5 inline-block text-xs text-[#22D3EE] hover:text-[#8B5CF6] transition-colors"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  source →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-ping {
          animation: project-ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes project-ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .project-node {
          animation: project-node-pulse 2.4s ease-in-out infinite;
        }
        @keyframes project-node-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(139,92,246,0); }
        }
        .project-travel {
          animation: project-travel 2.4s ease-in-out infinite;
        }
        @keyframes project-travel {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .project-ping, .project-node, .project-travel { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
