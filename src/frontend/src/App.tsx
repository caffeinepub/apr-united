export default function AprUnitedImpactWebsite() {
  const founders = [
    {
      name: "Prashant Thakur",
      role: "Chief Executive Officer",
      bio: "Leads APR United with a bold startup vision focused on building premium digital ventures with strong market potential.",
      focus: ["Vision & strategy", "Brand direction", "Venture growth"],
    },
    {
      name: "Ankit Singh",
      role: "Managing Director",
      bio: "Drives execution, operations, and business structure to turn concepts into scalable and well-managed ventures.",
      focus: ["Operations", "Execution", "Business development"],
    },
    {
      name: "Raj Patwa",
      role: "Vice President",
      bio: "Supports expansion, coordination, and strategic momentum across APR United's growing portfolio of products.",
      focus: ["Expansion", "Partnerships", "Growth support"],
    },
  ];
  const ventures = [
    {
      name: "SootheAI",
      tag: "Emotional wellness with AI",
      description:
        "A calm, supportive AI experience designed to help people feel heard, guided, and emotionally stronger.",
      stats: ["24/7 support", "Personal AI guidance", "Built for trust"],
    },
    {
      name: "Venuewala",
      tag: "Smart venue discovery",
      description:
        "A fast, modern marketplace that helps people discover and compare venues with clarity, speed, and confidence.",
      stats: ["Location-first search", "Budget filtering", "High-intent leads"],
    },
    {
      name: "APR Labs",
      tag: "Ideas into products",
      description:
        "A venture studio engine to launch bold digital products that solve real problems in India and beyond.",
      stats: ["Rapid validation", "Design-led MVPs", "Scalable systems"],
    },
  ];

  const pillars = [
    {
      title: "Build",
      text: "We transform strong ideas into premium digital products with clear positioning and fast execution.",
    },
    {
      title: "Launch",
      text: "We move from concept to market with sharper messaging, clean UX, and startup-grade speed.",
    },
    {
      title: "Scale",
      text: "We focus on traction, monetization, and brand power so each venture can become investment-ready.",
    },
  ];

  const metrics = [
    { value: "03", label: "Ventures in motion" },
    { value: "10x", label: "Bigger brand ambition" },
    { value: "24/7", label: "Digital-first mindset" },
    { value: "01", label: "Unified vision" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute top-[28rem] left-[8%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-[14rem] right-[8%] h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-neutral-950 font-bold shadow-2xl">
              APR
            </div>
            <div>
              <p className="text-sm text-white/60">Venture Studio</p>
              <h1 className="text-lg font-semibold tracking-wide">
                APR United
              </h1>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#ventures" className="transition hover:text-white">
              Ventures
            </a>
            <a href="#model" className="transition hover:text-white">
              Model
            </a>
            <a href="#vision" className="transition hover:text-white">
              Vision
            </a>
            <a href="#founders" className="transition hover:text-white">
              Founders
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <button
            type="button"
            className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-neutral-950"
          >
            Build With Us
          </button>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-28 lg:pt-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Building the next generation of digital ventures
            </div>

            <h2 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              We create{" "}
              <span className="text-cyan-300">impactful startups</span> that
              look premium, move fast, and scale with purpose.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              APR United is a modern venture studio focused on turning sharp
              ideas into serious brands. From AI wellness to smart marketplaces,
              we design products that feel trusted, ambitious, and ready for
              growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                className="rounded-2xl bg-white px-6 py-4 text-base font-semibold text-neutral-950 shadow-2xl transition hover:scale-[1.02]"
              >
                Explore Ventures
              </button>
              <button
                type="button"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                View Studio Vision
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur"
                >
                  <p className="text-3xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-white/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-white/50">Studio Snapshot</p>
                    <h3 className="text-2xl font-semibold">APR United</h3>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                    Active Build Mode
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {ventures.map((venture, index) => (
                    <div
                      key={venture.name}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.06]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">
                            0{index + 1}
                          </p>
                          <h4 className="mt-1 text-xl font-semibold">
                            {venture.name}
                          </h4>
                          <p className="mt-1 text-sm text-cyan-200">
                            {venture.tag}
                          </p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/60">
                          Venture
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-white/65">
                        {venture.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {venture.stats.map((stat) => (
                          <span
                            key={stat}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="model" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Studio Model
            </p>
            <h3 className="mt-3 text-3xl font-semibold md:text-5xl">
              A sharper way to build brands that matter.
            </h3>
            <p className="mt-4 text-lg leading-8 text-white/65">
              APR United combines startup thinking, premium design, and product
              execution into one unified system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-lg font-bold text-neutral-950">
                  {pillar.title.charAt(0)}
                </div>
                <h4 className="text-2xl font-semibold">{pillar.title}</h4>
                <p className="mt-4 text-base leading-8 text-white/65">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="ventures" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Featured Ventures
                </p>
                <h3 className="mt-3 text-3xl font-semibold md:text-5xl">
                  Products built for real-world adoption.
                </h3>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  Every venture under APR United is positioned to solve a
                  specific market problem with strong branding, practical
                  utility, and digital scalability.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-neutral-900 p-6">
                  <p className="text-sm text-white/50">AI Wellness</p>
                  <h4 className="mt-2 text-2xl font-semibold">SootheAI</h4>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    Calm, emotionally intelligent support through a beautiful
                    AI-first product experience.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-neutral-900 p-6">
                  <p className="text-sm text-white/50">Marketplace</p>
                  <h4 className="mt-2 text-2xl font-semibold">Venuewala</h4>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    A smart venue discovery platform designed to reduce friction
                    between search, comparison, and decision.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-neutral-900 p-6 md:col-span-2">
                  <p className="text-sm text-white/50">Studio Opportunity</p>
                  <h4 className="mt-2 text-2xl font-semibold">
                    What makes APR United valuable?
                  </h4>
                  <p className="mt-4 text-sm leading-8 text-white/65">
                    Not just one product. A repeatable startup-building engine.
                    That means stronger brand equity, diversified opportunity,
                    and a bigger long-term story for investors, partners, and
                    buyers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Vision
              </p>
              <h3 className="mt-3 text-3xl font-semibold md:text-5xl">
                Building one of the most ambitious new-age startup brands from
                India.
              </h3>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                APR United is designed to become a recognizable launchpad for
                digital ventures that solve modern consumer problems with
                clarity, trust, and bold execution.
              </p>
            </div>

            <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">
                Why this matters
              </p>
              <ul className="mt-5 space-y-4 text-base leading-8 text-white/80">
                <li>• Strong umbrella brand for multiple startup launches</li>
                <li>
                  • Better investor storytelling than a single-product website
                </li>
                <li>• Premium design language creates instant credibility</li>
                <li>• Clear foundation for future traction and fundraising</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="founders" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Leadership
            </p>
            <h3 className="mt-3 text-3xl font-semibold md:text-5xl">
              The founders behind APR United.
            </h3>
            <p className="mt-4 text-lg leading-8 text-white/65">
              A focused leadership team shaping APR United into a modern venture
              brand with strong ambition, execution, and long-term vision.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-xl font-bold text-neutral-950">
                  {founder.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h4 className="mt-6 text-2xl font-semibold">{founder.name}</h4>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
                  {founder.role}
                </p>
                <p className="mt-5 text-sm leading-7 text-white/65">
                  {founder.bio}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {founder.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8"
        >
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 px-8 py-12 text-center shadow-2xl backdrop-blur-xl md:px-16">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              APR United
            </p>
            <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">
              Ready to turn bold ideas into premium ventures?
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Let's build brands that feel credible from day one and grow into
              companies that truly matter.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:arpunited348@gmail.com"
                className="rounded-2xl bg-white px-6 py-4 text-base font-semibold text-neutral-950 transition hover:scale-[1.02]"
              >
                Start a Conversation
              </a>
              <button
                type="button"
                className="rounded-2xl border border-white/15 bg-transparent px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Download Company Profile
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
