import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Shield,
  HeartPulse,
  Car,
  Plane,
  TrendingUp,
  Landmark,
  PiggyBank,
  Briefcase,
  Calculator,
  Sprout,
  Baby,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import logoAsset from "@/assets/buckskart-logo.png.asset.json";
import logoVideo from "@/assets/make_the_video.mp4";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Buckskart — Finance Made Interesting and Simple" },
      {
        name: "description",
        content:
          "Buckskart, a unit of SEK Finserve LLP, helps you grow & protect your wealth with insurance, mutual funds, bonds, PMS and expert financial planning.",
      },
      { property: "og:title", content: "Buckskart — Finance Made Interesting and Simple" },
      {
        property: "og:description",
        content:
          "Insurance, investments and financial planning for individuals and businesses. 20+ years of trusted expertise.",
      },
      { property: "og:image", content: logoAsset.url },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Buckskart",
              alternateName: "A Unit of SEK Finserve LLP",
              url: "/",
              logo: logoAsset.url,
            },
            {
              "@type": "WebSite",
              name: "Buckskart — Financial Planning & Investments",
              url: "/",
            },
          ],
        }),
      },
    ],
  }),
});

/* ─── Floating leaf decoration ──────────────────────────────────── */
function Leaf({
  className = "",
  delay = 0,
  duration = 14,
  size = 40,
  color = "currentColor",
  rotate = 0,
}: {
  className?: string;
  delay?: number;
  duration?: number;
  size?: number;
  color?: string;
  rotate?: number;
}) {
  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      initial={{ y: -20, x: 0, rotate, opacity: 0 }}
      animate={{
        y: [0, 18, -10, 8, 0],
        x: [0, 12, -8, 10, 0],
        rotate: [rotate, rotate + 18, rotate - 12, rotate + 8, rotate],
        opacity: [0, 1, 1, 1, 0.9],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d="M8 56 C 12 28, 28 10, 58 8 C 56 36, 38 54, 8 56 Z"
        fill={color}
        opacity="0.9"
      />
      <path
        d="M14 52 C 22 38, 36 22, 54 14"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </motion.svg>
  );
}

/* ─── Animated Logo (leaves drift gently) ──────────────────────── */
function AnimatedLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-block w-full overflow-hidden rounded-2xl ${className}`}>
      {/* Floating leaves around logo */}
      <motion.div
        className="absolute -top-6 -right-4 text-emerald-500 z-10"
        animate={{ y: [0, -8, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={28} color="#16a34a" rotate={15} duration={6} />
      </motion.div>
      <motion.div
        className="absolute -top-4 right-8 z-10"
        animate={{ y: [0, 6, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Leaf size={22} color="#22c55e" rotate={-20} duration={7} delay={0.5} />
      </motion.div>
      <motion.div
        className="absolute -bottom-3 -left-3 z-10"
        animate={{ y: [0, 5, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Leaf size={18} color="#4ade80" rotate={45} duration={8} delay={1} />
      </motion.div>

      <motion.video
        src={logoVideo}
        poster={logoAsset.url}
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto mix-blend-multiply relative z-0"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    </div>
  );
}

/* ─── Data ──────────────────────────────────────────────────────── */
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Calculators", href: "#calculators" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const protection = [
  { icon: Shield, label: "Life Insurance", desc: "Secure your family's tomorrow." },
  { icon: HeartPulse, label: "Health Insurance", desc: "Cover for medical emergencies." },
  { icon: Car, label: "Asset Insurance", desc: "Protect what you've built." },
  { icon: Plane, label: "Travel Insurance", desc: "Worry-free journeys, worldwide." },
];

const investment = [
  { icon: TrendingUp, label: "Mutual Funds", desc: "Diversified, professionally managed." },
  { icon: Landmark, label: "Corporate Deposits", desc: "Stable, attractive returns." },
  { icon: PiggyBank, label: "Bonds & Debentures", desc: "Fixed income, predictable growth." },
  { icon: Briefcase, label: "PMS", desc: "Tailored portfolios for HNIs." },
];

const calculators = [
  { icon: Calculator, label: "EMI Calculator", desc: "Plan your loan repayments." },
  { icon: Sprout, label: "Wealth Creation", desc: "Reach your goals faster, safer." },
  { icon: LineChart, label: "Retirement", desc: "Retire with confidence." },
  { icon: Baby, label: "Child Future", desc: "Write your child's success story." },
];

const stats = [
  { value: "20+", label: "Years of expertise" },
  { value: "10k+", label: "Happy investors" },
  { value: "₹500Cr+", label: "Assets advised" },
  { value: "25+", label: "Partner institutions" },
];

/* ─── Page ──────────────────────────────────────────────────────── */
function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const agreed = localStorage.getItem("buckskart_disclaimer_agreed");
    if (!agreed) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("buckskart_disclaimer_agreed", "true");
    setShowDisclaimer(false);
  };

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.01_140)] text-foreground overflow-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/70 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="Buckskart" className="h-8 w-auto mix-blend-multiply" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-emerald-900/80 hover:text-emerald-700 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://clients.buckskart.com/login"
              className="px-5 py-2 rounded-full bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-700/20"
            >
              View Portfolio
            </a>
          </nav>
          <button
            className="md:hidden text-emerald-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-emerald-100 bg-white px-6 py-4 space-y-3">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-emerald-900"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://clients.buckskart.com/login"
              className="block px-4 py-2 rounded-full bg-emerald-700 text-white text-sm font-semibold text-center"
            >
              View Portfolio
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative pt-32 pb-24 md:pt-44 md:pb-32 px-6 overflow-hidden"
      >
        {/* Background leaves */}
        <div className="absolute inset-0 pointer-events-none">
          <Leaf className="absolute top-20 left-10 text-emerald-200" size={70} delay={0} duration={16} rotate={20} color="#86efac" />
          <Leaf className="absolute top-40 right-16 text-green-300" size={90} delay={2} duration={18} rotate={-30} color="#4ade80" />
          <Leaf className="absolute bottom-20 left-1/4 text-emerald-300" size={60} delay={1} duration={14} rotate={45} color="#22c55e" />
          <Leaf className="absolute top-1/2 right-1/3 text-green-200" size={50} delay={3} duration={20} rotate={-15} color="#bbf7d0" />
          <Leaf className="absolute bottom-32 right-10 text-emerald-400" size={80} delay={1.5} duration={17} rotate={60} color="#16a34a" />
        </div>

        {/* Soft gradient blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-lime-200/40 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wider uppercase">
              <Sprout className="w-3.5 h-3.5" />
              A Unit of SEK Finserve LLP
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] text-emerald-950 tracking-tight">
              Finance made{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 bg-clip-text text-transparent">
                  interesting
                </span>
              </span>{" "}
              & simple.
            </h1>
            <p className="mt-6 text-lg text-emerald-900/70 max-w-xl leading-relaxed">
              Unlock the true potential of money in your life. From protection
              to investments — 20+ years of trusted expertise guiding individuals
              and businesses toward smarter financial decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-700/25 hover:shadow-emerald-700/40 hover:-translate-y-0.5"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#calculators"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-emerald-800 font-semibold border border-emerald-200 hover:border-emerald-400 transition-all"
              >
                <Calculator className="w-4 h-4" />
                Try Calculators
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              {/* Halo */}
              <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-br from-emerald-300/40 via-green-200/30 to-transparent blur-2xl" />
              <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl shadow-emerald-900/10 border border-emerald-100">
                <AnimatedLogo />
                <div className="mt-6 pt-6 border-t border-emerald-100 grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-bold text-emerald-700">{s.value}</div>
                      <div className="text-xs text-emerald-900/60 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative px-6 -mt-8">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-emerald-700 to-green-800 rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-2xl shadow-emerald-900/20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-emerald-100/80 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-24 px-6">
        <div className="absolute top-20 right-10 pointer-events-none opacity-60">
          <Leaf size={120} color="#bbf7d0" duration={22} rotate={-40} />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-widest">
              Services we offer
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-emerald-950">
              Unlock the true potential of money
            </h2>
            <p className="mt-4 text-emerald-900/70 max-w-2xl mx-auto">
              From protecting what matters most to building lasting wealth — every
              decision, guided by experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Protection */}
            <div className="relative bg-white rounded-3xl p-8 border border-emerald-100 shadow-xl shadow-emerald-900/5 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-emerald-100/60 blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5" /> Protection Solutions
                </div>
                <h3 className="mt-4 text-2xl font-bold text-emerald-950">
                  Secure your loved ones
                </h3>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {protection.map((s) => (
                    <ServiceCard key={s.label} {...s} />
                  ))}
                </div>
              </div>
            </div>

            {/* Investment */}
            <div className="relative bg-gradient-to-br from-emerald-50 to-lime-50 rounded-3xl p-8 border border-emerald-100 shadow-xl shadow-emerald-900/5 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-lime-200/40 blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-100 text-lime-800 text-xs font-bold uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5" /> Investment Solutions
                </div>
                <h3 className="mt-4 text-2xl font-bold text-emerald-950">
                  Invest into happiness
                </h3>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {investment.map((s) => (
                    <ServiceCard key={s.label} {...s} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section id="calculators" className="relative py-24 px-6 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="absolute bottom-20 left-10 pointer-events-none opacity-50">
          <Leaf size={100} color="#86efac" duration={19} rotate={30} delay={1} />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-widest">
              Plan ahead
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-emerald-950">
              Financial Calculators
            </h2>
            <p className="mt-4 text-emerald-900/70 max-w-2xl mx-auto">
              Tools to manage your savings, expenses and dreams.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {calculators.map((c, i) => (
              <motion.a
                key={c.label}
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white p-6 rounded-2xl border border-emerald-100 hover:border-emerald-400 hover:-translate-y-1 transition-all shadow-md shadow-emerald-900/5 hover:shadow-xl hover:shadow-emerald-700/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-bold text-emerald-950">{c.label}</h3>
                <p className="mt-1 text-sm text-emerald-900/60">{c.desc}</p>
                <ArrowRight className="mt-4 w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-widest">
              Why choose us
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-emerald-950 leading-tight">
              20 years of helping people grow with confidence.
            </h2>
            <p className="mt-6 text-emerald-900/70 leading-relaxed">
              We are a team of professionals with over two decades of experience
              delivering quality service to individuals and businesses across
              geographies. We help investors create wealth through the right
              mix of mutual funds, PMS, corporate deposits and structured products.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Independent, unbiased advice",
                "Curated mix across 25+ partner institutions",
                "Goal-based planning for every life stage",
                "Transparent fees, no hidden surprises",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-emerald-900">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Big circular gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 via-green-500 to-lime-500 opacity-90" />
              <div className="absolute inset-6 rounded-full bg-white/95 backdrop-blur flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-emerald-700 to-green-600 bg-clip-text text-transparent">
                    20+
                  </div>
                  <div className="mt-2 text-emerald-900 font-semibold">
                    Years of experience
                  </div>
                  <div className="mt-4 text-sm text-emerald-900/60">
                    Trusted by thousands of families and businesses across India.
                  </div>
                </div>
              </div>

              {/* Orbiting leaves */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                  <Leaf size={40} color="#15803d" rotate={0} duration={8} />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
                  <Leaf size={36} color="#22c55e" rotate={180} duration={9} />
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
                  <Leaf size={32} color="#4ade80" rotate={-90} duration={10} />
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
                  <Leaf size={32} color="#16a34a" rotate={90} duration={11} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto relative bg-gradient-to-br from-emerald-800 via-green-800 to-emerald-900 rounded-3xl p-10 md:p-16 text-center overflow-hidden shadow-2xl shadow-emerald-900/30">
          {/* Decorative leaves */}
          <div className="absolute top-6 left-6 opacity-30">
            <Leaf size={80} color="#86efac" duration={15} rotate={20} />
          </div>
          <div className="absolute bottom-6 right-6 opacity-30">
            <Leaf size={100} color="#bbf7d0" duration={18} rotate={-30} delay={1} />
          </div>

          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to write your financial story?
            </h2>
            <p className="mt-4 text-emerald-100/80 max-w-2xl mx-auto">
              Talk to a Buckskart advisor and discover a financial plan tailored
              to your goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:contact@buckskart.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-emerald-800 font-semibold hover:bg-emerald-50 transition-colors shadow-xl"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </a>
              <a
                href="https://clients.buckskart.com/login"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors border border-emerald-400"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
              <ContactItem icon={Phone} label="Call us" value="+91 — On request" />
              <ContactItem icon={Mail} label="Email" value="contact@buckskart.com" />
              <ContactItem icon={MapPin} label="Office" value="SEK Finserve LLP, India" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-100 bg-emerald-50/40 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <img src={logoAsset.url} alt="Buckskart" className="h-10 w-auto mix-blend-multiply" />
            <div className="flex gap-6 text-sm text-emerald-900/70">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="hover:text-emerald-700">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-emerald-100 text-xs text-emerald-900/60 leading-relaxed space-y-3">
            <p>
              <strong>Disclaimer:</strong> The information published on this website
              is for general purposes only and does not constitute a solicitation
              or recommendation to purchase or sell any financial instruments.
              Mutual funds are subject to market risks; read all scheme documents
              carefully before investing.
            </p>
            <p>
              SEK Finserve is a distributor of financial products and does not
              guarantee returns. Loans and insurance are at the sole discretion of
              the lending / insurance company.
            </p>
            <p className="pt-4 text-emerald-900/50">
              © {new Date().getFullYear()} Buckskart — A Unit of SEK Finserve LLP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Disclaimer Pop-up Modal */}
      <AnimatePresence>
        {showDisclaimer && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop with elegant glassmorphism blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleAgree}
              className="absolute inset-0 bg-emerald-950/40 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white/95 backdrop-blur-xl border border-emerald-100 shadow-2xl rounded-3xl max-w-2xl w-full p-6 md:p-8 max-h-[85vh] flex flex-col z-10"
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-emerald-50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                    <Shield className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-emerald-950">
                      Welcome to Buckskart
                    </h3>
                    <p className="text-xs text-emerald-900/60 font-medium">
                      Please read and accept the disclaimer to continue
                    </p>
                  </div>
                </div>
                {/* Close Button */}
                <button 
                  onClick={handleAgree}
                  className="text-emerald-900/40 hover:text-emerald-900 hover:bg-emerald-50 p-1.5 rounded-full transition-colors cursor-pointer"
                  aria-label="Close disclaimer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Contents */}
              <div className="flex-1 overflow-y-auto my-6 pr-2 text-sm text-emerald-900/80 leading-relaxed space-y-4">
                <p className="font-semibold text-emerald-950">
                  Dear visitor, welcome to Buckskart. Please read the disclaimer before using the website.
                </p>
                <p>
                  The information published on this website is intended for general information purpose only & does not constitute a solicitation, suggestions, inducement, offer or recommendation to purchase or sell any stocks, scripts of debentures, mutual fund units, shares, securities or any financial instruments or to enter into any other transaction.
                </p>
                <p>
                  All the information is subject to change without notice. The information published should not be used as a substitute for any form of advice. The information on this site has not been prepared taking into account specific investment objectives, financial situations and needs of any particular investor, and therefore may not be suitable for you. Investor must consult his/her investment adviser /distributor with his investment objectives and risk taking ability.
                </p>
                <p>
                  <strong>SEK Finserve</strong> is a mere distributor of financial products and facilitate customer to choose the right product as per their requirement. SEK Finserve does not guarantee any returns on investments made in financial products.
                </p>
                <p>
                  Loans are solely at the discretion of lending company. All products including loans, insurance & investment features rates and cost are subject to change without any prior notice. Mutual funds are subject to market risks, read scheme information document carefully before investing. Mutual fund performance data source is <span className="font-medium text-emerald-700">advisorkhoj.com</span>.
                </p>
                <p>
                  Life & Health insurance are solely at discretion of insurance company.
                </p>
                <p className="font-medium text-emerald-950 border-t border-emerald-50 pt-3">
                  We do not accept any cash of cheque in favor of SEK Finserve unless it is agreed.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-emerald-50 pt-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center sm:justify-between">
                <span className="text-xs text-emerald-900/50">
                  By clicking Agree, you accept the terms above.
                </span>
                <button
                  onClick={handleAgree}
                  className="px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold transition-all shadow-xl shadow-emerald-700/25 hover:shadow-emerald-700/40 hover:-translate-y-0.5 text-center cursor-pointer text-sm"
                >
                  I Agree & Proceed
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Sub-components ────────────────────────────────────────────── */
function ServiceCard({
  icon: Icon,
  label,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  desc: string;
}) {
  return (
    <div className="group flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50 transition-colors cursor-pointer">
      <div className="w-10 h-10 rounded-lg bg-white border border-emerald-200 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white group-hover:border-emerald-700 transition-colors shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="font-semibold text-emerald-950 text-sm">{label}</div>
        <div className="text-xs text-emerald-900/60 mt-0.5">{desc}</div>
      </div>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-emerald-100 shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-xs text-emerald-200/70 uppercase tracking-wider">{label}</div>
        <div className="text-white text-sm font-medium mt-0.5">{value}</div>
      </div>
    </div>
  );
}
