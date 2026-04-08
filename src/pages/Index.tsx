import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  Heart,
  Users,
  BookOpen,
  HandHeart,
  Stethoscope,
  ArrowRight,
  Phone,
  Calendar,
  Smile,
  Shield,
  Star,
  Quote,
  MapPin,
  Clock,
  Award,
  GraduationCap,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Activity,
  Baby,
  Glasses,
  Brain,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import { Reveal } from "@/hooks/use-scroll-reveal";
import { useCountUp } from "@/hooks/use-count-up";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero6 from "@/assets/hero-6.jpg";
import hero7 from "@/assets/hero-7.jpg";
import hero9 from "@/assets/hero-9.jpg";

/* ───────────────────────── DATA ───────────────────────── */

const stats = [
  { value: 2015, label: "Year Founded", icon: Calendar, suffix: "", isYear: true },
  { value: 1000, label: "Lives Touched", icon: Heart, suffix: "+" },
  { value: 100, label: "Professionals Trained", icon: GraduationCap, suffix: "+" },
  { value: 8, label: "Years of Service", icon: Award, suffix: "+" },
];

const services = [
  { icon: Eye, title: "Low Vision Care", desc: "Advanced assessment and assistive technology to maximize remaining vision.", color: "secondary" as const },
  { icon: Baby, title: "Pediatric Eye Care", desc: "Specialized treatment for children — including ROP screening for premature infants.", color: "primary" as const },
  { icon: Users, title: "Rehabilitation Programs", desc: "1-2 year orientation, mobility training, and daily living skills.", color: "accent" as const },
  { icon: BookOpen, title: "Professional Training", desc: "Intensive courses equipping eye care professionals with world-class skills.", color: "secondary" as const },
  { icon: Brain, title: "Neuro-Ophthalmology", desc: "Expert diagnosis and management of visual problems related to the nervous system.", color: "primary" as const },
  { icon: HandHeart, title: "Counselling & Support", desc: "Emotional and psychological support for patients and families.", color: "accent" as const },
];

const journey = [
  { step: "01", icon: Phone, title: "Reach Out", desc: "Contact us by phone or visit our Port Harcourt center." },
  { step: "02", icon: Eye, title: "Full Assessment", desc: "Thorough eye examinations using state-of-the-art equipment." },
  { step: "03", icon: Shield, title: "Personalized Plan", desc: "A tailored treatment or rehabilitation program for you." },
  { step: "04", icon: Smile, title: "New Independence", desc: "Gain independence and a brighter future through care." },
];

const testimonials = [
  { text: "TLEC gave my child a second chance at life. The team's dedication and expertise in pediatric eye care is truly remarkable.", name: "Mrs. Adaeze Nwosu", role: "Parent", initials: "AN" },
  { text: "The rehabilitation program transformed my life. I went from complete dependence to being able to navigate the world on my own.", name: "Emmanuel Okafor", role: "Graduate", initials: "EO" },
  { text: "The low vision intensive course was eye-opening. It equipped me with skills I now use daily in my practice across Nigeria.", name: "Dr. Funke Balogun", role: "Optometrist", initials: "FB" },
  { text: "From the counselling sessions to the mobility training, every aspect of the program showed genuine care for the whole person.", name: "Grace Ibe", role: "Patient", initials: "GI" },
];

const programs = [
  { title: "Low Vision Intensive Course", desc: "A professional development program for eye care workers — optometrists, ophthalmologists, and clinical staff.", duration: "5 Days", image: hero2 },
  { title: "Orientation & Mobility Training", desc: "Teaching blind individuals to navigate their environment safely and independently.", duration: "1-2 Years", image: hero6 },
  { title: "Seeing Is Believing Concert", desc: "Our annual fundraising musical event featuring top Nigerian artists to raise awareness and funds.", duration: "Annual Event", image: hero9 },
];

/* ───────────── COUNTER COMPONENT ───────────── */
const StatCounter = ({ value, suffix, label, icon: Icon, isYear }: { value: number; suffix: string; label: string; icon: React.ElementType; isYear?: boolean }) => {
  const { count, ref } = useCountUp(value, isYear ? 1500 : 2000);
  return (
    <div ref={ref} className="p-4 md:p-8 text-center">
      <Icon size={22} className="mx-auto mb-3 opacity-60" />
      <p className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
        {isYear ? (count || value) : count.toLocaleString()}<span className="text-lg">{suffix}</span>
      </p>
      <p className="text-xs md:text-sm opacity-70 mt-1 font-medium uppercase tracking-wider">{label}</p>
    </div>
  );
};

/* ───────────────────────── COMPONENT ───────────────────────── */

const Index = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const t = testimonials[testimonialIdx];

  return (
    <div className="overflow-hidden">
      <HeroSlider />

      {/* ═══════════ FLOATING STATS RIBBON ═══════════ */}
      <section className="relative -mt-10 md:-mt-20 z-20 px-4 md:px-8 lg:px-16 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-0 md:rounded-2xl md:overflow-hidden md:shadow-2xl">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`${
                  i % 2 === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                } rounded-2xl md:rounded-none relative`}
              >
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} icon={s.icon} isYear={s.isYear} />
                {i < 3 && <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-primary-foreground/15" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT / MISSION — IMMERSIVE FULL-BLEED ═══════════ */}
      <section className="relative py-14 md:py-24 overflow-hidden">
        {/* Full-width background image */}
        <div className="absolute inset-0">
          <img src={hero4} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70 md:via-background/85 md:to-background/40" />
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-xl">
              <Reveal direction="left" delay={0.1}>
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4 block">Who We Are</span>
              </Reveal>

              <Reveal direction="left" delay={0.2}>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.1]">
                  More Than Eye Care —{" "}
                  <span className="text-gradient">A Lifeline</span>
                </h2>
              </Reveal>

              <Reveal direction="left" delay={0.3}>
                <div className="p-6 md:p-8 rounded-2xl bg-background/80 backdrop-blur-md border border-border/50 shadow-2xl">
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    The Lens (re)Habilitation Foundation for the Blind is a Nigerian
                    non-profit that combines <strong className="text-foreground">professional eye care</strong> with long-term
                    rehabilitation and skills training.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Based in Port Harcourt, Rivers State, we operate both a full-service eye
                    clinic and a rehabilitation center — providing medical
                    treatment and life-skills training so the visually impaired
                    can live <strong className="text-foreground">independently and productively</strong>.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { icon: Stethoscope, text: "Expert-Led Care" },
                      { icon: Glasses, text: "Advanced Equipment" },
                      { icon: Heart, text: "Compassionate Team" },
                      { icon: Shield, text: "Holistic Approach" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <item.icon size={16} className="text-secondary shrink-0" />
                        {item.text}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/about"
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-sm"
                    >
                      Our Story
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-all text-sm"
                    >
                      <Calendar size={16} />
                      Book a Visit
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WAVE DIVIDER ═══════ */}
      <div className="h-16 bg-gradient-to-b from-background to-[hsl(var(--section-warm))]" />

      {/* ═══════════ SERVICES — HORIZONTAL SCROLL MOBILE / GRID DESKTOP ═══════════ */}
      <section className="relative py-14 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--section-warm))] to-background" />

        <div className="relative z-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="mb-10 md:mb-16 md:text-center">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  What We <span className="text-gradient">Do</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl md:mx-auto">
                  From clinical treatment to long-term rehabilitation — a full spectrum of services.
                </p>
              </div>
            </Reveal>

            {/* Mobile: horizontal scroll */}
            <div className="md:hidden flex flex-col gap-4 pb-4">
              {services.map((s, i) => {
                const colors = {
                  primary: "border-primary/30 bg-primary/5",
                  secondary: "border-secondary/30 bg-secondary/5",
                  accent: "border-accent/30 bg-accent/5",
                };
                const iconColors = { primary: "text-primary", secondary: "text-secondary", accent: "text-accent" };
                return (
                  <div key={i} className={`p-6 rounded-2xl border ${colors[s.color]} backdrop-blur-sm`}>
                    <s.icon size={28} className={`${iconColors[s.color]} mb-4`} />
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Desktop: staggered grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((s, i) => {
                const colorClasses: Record<string, { bg: string; text: string; hoverBg: string; border: string }> = {
                  primary: { bg: "bg-primary/10", text: "text-primary", hoverBg: "group-hover:bg-primary", border: "hover:border-primary/30" },
                  secondary: { bg: "bg-secondary/10", text: "text-secondary", hoverBg: "group-hover:bg-secondary", border: "hover:border-secondary/30" },
                  accent: { bg: "bg-accent/10", text: "text-accent", hoverBg: "group-hover:bg-accent", border: "hover:border-accent/30" },
                };
                const c = colorClasses[s.color];
                return (
                  <Reveal key={i} delay={i * 0.1} direction="up">
                    <div className={`group relative p-8 md:p-10 rounded-3xl bg-background border border-border ${c.border} shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${i === 1 || i === 4 ? "lg:-mt-4" : ""}`}>
                      <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.text} ${c.hoverBg} group-hover:text-primary-foreground flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110`}>
                        <s.icon size={26} />
                      </div>
                      <span className="absolute top-6 right-8 font-heading text-5xl font-bold text-foreground/[0.03]">0{i + 1}</span>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">{s.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                      <div className={`absolute bottom-0 left-6 right-6 h-1 rounded-full bg-gradient-to-r ${
                        s.color === "primary" ? "from-primary to-primary/40" :
                        s.color === "secondary" ? "from-secondary to-secondary/40" :
                        "from-accent to-accent/40"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.3}>
              <div className="text-center mt-10">
                <Link to="/eye-clinic" className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  View All Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════ JOURNEY — REAL TIMELINE ═══════════ */}
      <section className="relative py-14 md:py-24 bg-primary overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-secondary/10 blur-[100px] animate-float" />
        <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-accent/8 blur-[80px] animate-float" style={{ animationDelay: "3s" }} />

        <div className="relative z-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="md:text-center mb-10 md:mb-16">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                  From First Visit to{" "}
                  <span className="text-secondary">New Sight</span>
                </h2>
                <p className="text-primary-foreground/60 text-base md:text-lg max-w-xl md:mx-auto">
                  We walk alongside you at every step.
                </p>
              </div>
            </Reveal>

            {/* Mobile: vertical timeline with left line */}
            <div className="md:hidden relative pl-10">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-secondary/50 to-transparent" />

              {journey.map((j, i) => (
                <Reveal key={i} delay={i * 0.12} direction="left">
                  <div className="relative mb-10 last:mb-0">
                    {/* Node */}
                    <div className="absolute -left-10 top-1 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center shadow-lg shadow-secondary/30 z-10">
                      {j.step}
                    </div>
                    <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-5">
                      <j.icon size={22} className="text-secondary mb-2" />
                      <h3 className="font-heading text-lg font-bold text-primary-foreground mb-1">{j.title}</h3>
                      <p className="text-primary-foreground/50 text-sm leading-relaxed">{j.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Desktop: horizontal steps */}
            <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
              <div className="absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
              {journey.map((j, i) => (
                <Reveal key={i} delay={i * 0.15} direction="up">
                  <div className="text-center group relative">
                    <div className="relative mx-auto w-24 h-24 mb-6">
                      <div className="absolute inset-0 rounded-full bg-secondary/20 group-hover:bg-secondary/30 transition-all duration-500 group-hover:scale-110" />
                      <div className="absolute inset-2 rounded-full bg-primary border-2 border-secondary/40 flex items-center justify-center group-hover:border-secondary transition-colors duration-300">
                        <j.icon size={30} className="text-primary-foreground" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center shadow-lg shadow-secondary/30">
                        {j.step}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">{j.title}</h3>
                    <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-[200px] mx-auto">{j.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ IMPACT — PARALLAX + COUNTERS ═══════════ */}
      <section className="relative min-h-[450px] md:h-[550px] overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{ backgroundImage: `url(${hero1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay)/0.92)] via-[hsl(var(--primary)/0.85)] to-[hsl(var(--secondary)/0.7)]" />

        <div className="relative z-10 h-full flex items-center px-4 md:px-8 lg:px-16 py-14 md:py-0">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Reveal direction="left">
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
                    Real Impact,{" "}
                    <span className="text-secondary">Real Lives</span>
                  </h2>
                  <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-6">
                    Every number represents a person — a child who can now see,
                    a mother who regained independence.
                  </p>
                  <Link
                    to="/donate"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-bold rounded-xl hover:bg-accent/90 transition-all shadow-lg shadow-accent/30"
                  >
                    <Heart size={18} />
                    Support Our Mission
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>

              <Reveal direction="right" delay={0.2}>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { end: 500, label: "Patients Treated", icon: Stethoscope, suffix: "+" },
                    { end: 200, label: "Surgeries Performed", icon: Eye, suffix: "+" },
                    { end: 50, label: "Students Graduated", icon: GraduationCap, suffix: "+" },
                    { end: 15, label: "Partner Organizations", icon: Users, suffix: "+" },
                  ].map((item, i) => (
                    <ImpactCounter key={i} {...item} />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ DIAGONAL DIVIDER ═══════ */}
      <div className="h-12 bg-gradient-to-b from-[hsl(var(--primary)/0.1)] to-background" />

      {/* ═══════════ PROGRAMS & EVENTS ═══════════ */}
      <section className="py-14 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(var(--section-blue))] to-background" />

        <div className="relative z-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="mb-10 md:mb-16">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 block">Programs & Events</span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Training, Events &amp;{" "}
                  <span className="text-gradient">Community</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
                  Beyond treatment — we train professionals, host awareness events,
                  and build a community of care.
                </p>
              </div>
            </Reveal>

            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
              {programs.map((p, i) => (
                <Reveal key={i} delay={i * 0.15} direction="up">
                  <div className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-background border border-border">
                    <div className="relative h-52 md:h-56 overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold">
                        <Clock size={12} />
                        {p.duration}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                      <Link to="/about" className="inline-flex items-center gap-1.5 text-secondary font-semibold text-sm group-hover:gap-2.5 transition-all">
                        Learn More <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY — PROPER BENTO GRID ═══════════ */}
      <section className="py-14 md:py-24 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(hsl(var(--secondary)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative z-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="mb-10 md:mb-16 md:text-center">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                  See Our <span className="text-secondary">Work</span> in Action
                </h2>
                <p className="text-primary-foreground/50 text-base md:text-lg max-w-2xl md:mx-auto">
                  A glimpse into our facilities, rehabilitation programs, and the lives we're changing.
                </p>
              </div>
            </Reveal>

            {/* Mobile: 2 large images + view more */}
            <div className="md:hidden grid grid-cols-1 gap-4">
              {[hero4, hero6].map((img, i) => (
                <Reveal key={i} delay={i * 0.1} direction="scale">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                    <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                </Reveal>
              ))}
              <Link to="/about" className="inline-flex items-center justify-center gap-2 text-secondary font-semibold py-3">
                View Full Gallery <ArrowRight size={16} />
              </Link>
            </div>

            {/* Desktop: bento grid with proper spans */}
            <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 gap-4">
              {[
                { img: hero4, className: "col-span-2 row-span-2" },
                { img: hero6, className: "" },
                { img: hero7, className: "" },
                { img: hero9, className: "col-span-2" },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08} direction="scale" className={item.className}>
                  <div className="w-full h-full min-h-[200px] rounded-2xl overflow-hidden group relative">
                    <img src={item.img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500 flex items-center justify-center">
                      <Eye size={32} className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS — SINGLE FEATURED ═══════════ */}
      <section className="py-14 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-[120px]" />

        <div className="relative z-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 md:mb-14">
                Voices of{" "}
                <span className="text-gradient">Hope</span>
              </h2>
            </Reveal>

            <div className="relative">
              <div className="p-8 md:p-14 rounded-3xl bg-card border border-border shadow-xl">
                <Quote size={48} className="mx-auto text-secondary/20 mb-6" />

                <p className="text-foreground text-lg md:text-2xl leading-relaxed italic mb-8 max-w-2xl mx-auto">
                  "{t.text}"
                </p>

                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground text-lg">{t.name}</p>
                    <p className="text-muted-foreground text-sm">{t.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} className="fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIdx(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${i === testimonialIdx ? "bg-secondary w-8" : "bg-border hover:bg-muted-foreground"}`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                  <button
                    onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MEET THE DIRECTOR ═══════════ */}
      <section className="relative py-14 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--section-warm))] to-background" />

        <div className="relative z-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <Reveal direction="left" className="md:col-span-2">
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                    <img src={hero9} alt="Prof. Adedayo Adio" className="w-full h-[350px] md:h-[400px] object-cover" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center shadow-xl">
                    <Award size={32} className="text-secondary-foreground" />
                  </div>
                </div>
              </Reveal>

              <Reveal direction="right" delay={0.2} className="md:col-span-3">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 block">Leadership</span>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Prof. Adedayo Omobolanle Adio
                </h2>
                <p className="text-secondary font-semibold text-base md:text-lg mb-5">Medical Director & Founder</p>
                <p className="text-muted-foreground leading-relaxed mb-3 text-sm md:text-base">
                  A world-class pediatric ophthalmologist, Professor of Ophthalmology at the University
                  of Port Harcourt, and current Chairperson of Nigerian Pediatric Ophthalmologists (NIPOSS).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                  With specialized training from the LV Prasad Eye Institute in India and decades of clinical
                  experience, Prof. Adio brings unmatched expertise in pediatric eye care and low vision rehabilitation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Pediatric Ophthalmology", "Neuro-Ophthalmology", "Low Vision", "ROP Screening"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CLINIC INFO ═══════════ */}
      <section className="relative py-14 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-[hsl(var(--section-blue))]" />

        <div className="relative z-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="text-center mb-10 md:mb-14">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Visit Us Today</h2>
                <p className="text-muted-foreground text-base">We're here for you — reach out anytime.</p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: MapPin,
                  title: "Our Location",
                  lines: ["1 & 2 Amba Drive, Off Christ Chapel Ave", "Eleme Junction, Port Harcourt", "Rivers State, Nigeria"],
                  color: "primary" as const,
                },
                {
                  icon: Clock,
                  title: "Clinic Hours",
                  lines: ["Mon – Fri: 8:00 AM – 5:00 PM", "Saturday: 8:00 AM – 2:00 PM", "Low Vision Clinic: Fridays 9 AM"],
                  color: "secondary" as const,
                },
                {
                  icon: Phone,
                  title: "Get In Touch",
                  lines: ["+234 803 310 8139", "+234 805 502 7740", "tlecrehab@gmail.com"],
                  color: "accent" as const,
                },
              ].map((card, i) => (
                <Reveal key={i} delay={i * 0.12} direction="up">
                  <div className="group relative p-7 md:p-8 rounded-2xl bg-background border border-border hover:shadow-xl transition-all duration-500 text-center overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-${card.color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-${card.color}/10 text-${card.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon size={26} />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3">{card.title}</h3>
                    <div className="space-y-1.5">
                      {card.lines.map((line, j) => (
                        <p key={j} className="text-muted-foreground text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(213,86%,25%)] to-secondary" />
        <div className="absolute top-10 right-[10%] w-80 h-80 rounded-full bg-secondary/20 blur-[100px] animate-float" />
        <div className="absolute bottom-10 left-[5%] w-60 h-60 rounded-full bg-accent/15 blur-[80px] animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 px-4 md:px-8 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-[1.1]">
                Help Us Restore{" "}
                <span className="text-secondary">Sight</span>{" "}
                and{" "}
                <span className="text-accent">Hope</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Your donation funds rehabilitation programs, eye surgeries, and professional
                training that transforms lives across Nigeria.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  to="/donate"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-xl hover:bg-accent/90 transition-all shadow-2xl shadow-accent/30 text-lg animate-pulse-glow"
                >
                  <Heart size={20} className="group-hover:scale-110 transition-transform" />
                  Donate Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/25 text-primary-foreground font-bold rounded-xl hover:bg-primary-foreground/10 backdrop-blur-sm transition-all text-lg"
                >
                  Volunteer With Us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ───── Impact Counter Sub-component ───── */
const ImpactCounter = ({ end, label, icon: Icon, suffix }: { end: number; label: string; icon: React.ElementType; suffix: string }) => {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-5 text-center hover:bg-primary-foreground/15 transition-all duration-300">
      <Icon size={22} className="mx-auto mb-2 text-secondary" />
      <p className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">{count}{suffix}</p>
      <p className="text-primary-foreground/60 text-xs mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
};

export default Index;
