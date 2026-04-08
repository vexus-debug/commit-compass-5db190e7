import { Link } from "react-router-dom";
import { Award, Target, Users, Heart } from "lucide-react";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero7 from "@/assets/hero-7.jpg";

const values = [
  { icon: Heart, title: "Compassion", desc: "We treat every patient with dignity and empathy." },
  { icon: Target, title: "Excellence", desc: "World-class standards in eye care and rehabilitation." },
  { icon: Users, title: "Community", desc: "Building an inclusive society for visually impaired persons." },
  { icon: Award, title: "Empowerment", desc: "Equipping individuals with skills for independence." },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative py-20 bg-primary">
      <div className="container">
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">About Us</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground max-w-3xl">
          Restoring independence to blind and visually impaired Nigerians since 2015
        </h1>
        <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl">
          The Lens (re)Habilitation Foundation for the Blind combines medical expertise with holistic rehabilitation to transform lives.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <img src={hero5} alt="TLEC Team" className="rounded-2xl shadow-xl w-full" />
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded in 2015 in Port Harcourt, Rivers State, TLEC was born from the vision of Prof. Adedayo Adio — a world-class pediatric ophthalmologist who recognized that medical treatment alone was not enough for the visually impaired.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The foundation operates two connected entities: The Lens Eye Clinic (TLEC) for medical diagnosis and treatment, and the TLEC (Re)Hab Center for comprehensive rehabilitation of blind and severely visually impaired people.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our programs last 1-2 years and include orientation, mobility training, craftwork, life skills, and counselling — everything needed to live independently and productively.
          </p>
        </div>
      </div>
    </section>

    {/* Medical Director */}
    <section className="section-warm py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Leadership</p>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Prof. Adedayo Omobolanle Adio</h2>
          <p className="text-accent font-medium mb-4">Medical Director</p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Prof. Adio graduated from the University of Ilorin Medical School in 1990 and holds qualifications from both West African and Nigerian postgraduate medical colleges. She has subspecialty training in pediatric eye care, neuro-ophthalmology, and strabismus.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            She is certified in low vision, rehabilitation, and ROP screening from the LV Prasad Eye Institute in India. She serves as Professor of Ophthalmology at the University of Port Harcourt and Chairperson of Nigerian Pediatric Ophthalmologists (NIPOSS).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Her book, <em>Handbook for Pediatric Ophthalmic Counseling for Developing Countries</em>, reflects her commitment to accessible eye care education.
          </p>
        </div>
        <img src={hero7} alt="TLEC Low Vision Course Participants" className="rounded-2xl shadow-xl w-full" />
      </div>
    </section>

    {/* Values */}
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Values</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
                <v.icon size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Board */}
    <section className="section-blue py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <img src={hero4} alt="Board of Trustees" className="rounded-2xl shadow-xl w-full" />
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Board of Trustees</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our board comprises distinguished community leaders and professionals committed to the foundation's mission of restoring sight and independence to the visually impaired in Nigeria.
          </p>
          <Link to="/contact" className="inline-flex px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default About;
