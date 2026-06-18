import { useEffect, useRef, useState } from "react";
import { 
  GraduationCap, 
  BookOpen, 
  Globe2,
  Building2,
  Briefcase,
  FileText,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  MapPin
} from "lucide-react";
import "./Education.css";
import PublicLayout from "../layouts/PublicLayout";
import { Link } from "react-router-dom";

function Education() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      icon: <GraduationCap size={22} strokeWidth={1.8} />,
      title: "Undergraduate Programs",
      description: "Access world-class German universities and technical institutions for bachelor's degree programs across engineering, sciences, and humanities.",
      highlights: ["Bachelor's in Engineering", "B.Sc. Programs", "B.A. Humanities", "Technical Universities"]
    },
    {
      icon: <BookOpen size={22} strokeWidth={1.8} />,
      title: "Language & Foundation",
      description: "Comprehensive German language courses and foundation programs (Studienkolleg) to prepare students for university admission requirements.",
      highlights: ["German A1-C2 Levels", "TestDaF Preparation", "Studienkolleg", "DSH Exam Prep"]
    },
    {
      icon: <Briefcase size={22} strokeWidth={1.8} />,
      title: "Internship Placements",
      description: "Gain hands-on experience with leading German companies through structured internship programs integrated with academic learning.",
      highlights: ["Industry Internships", "Research Projects", "Corporate Exposure", "Mentorship"]
    },
    {
      icon: <Building2 size={22} strokeWidth={1.8} />,
      title: "Career Pathways",
      description: "Build your global career with exposure to German engineering excellence, industry networks, and post-study work opportunities.",
      highlights: ["Job Placement Support", "Alumni Network", "Visa Guidance", "Career Counseling"]
    }
  ];

  const whyGermany = [
    {
      icon: <Award size={20} strokeWidth={1.6} />,
      title: "World-Class Education",
      description: "German universities consistently rank among the world's best with cutting-edge research facilities and renowned faculty."
    },
    {
      icon: <Globe2 size={20} strokeWidth={1.6} />,
      title: "Global Recognition",
      description: "German degrees are internationally recognized and highly valued by employers worldwide."
    },
    {
      icon: <Clock size={20} strokeWidth={1.6} />,
      title: "Affordable Excellence",
      description: "Most public universities charge minimal or no tuition fees, making quality education accessible."
    },
    {
      icon: <Users size={20} strokeWidth={1.6} />,
      title: "Cultural Immersion",
      description: "Experience life in Europe's economic powerhouse with rich history, diverse culture, and central travel access."
    }
  ];

  const studentJourney = [
    { step: "01", title: "Consultation", description: "Initial guidance and program selection based on your interests and goals" },
    { step: "02", title: "Application", description: "Complete university applications with proper documentation and deadlines" },
    { step: "03", title: "Visa Process", description: "Assistance with student visa application and documentation requirements" },
    { step: "04", title: "Pre-Departure", description: "Orientation, accommodation arrangements, and travel preparation" },
    { step: "05", title: "Arrival & Settling", description: "Airport pickup, registration, health insurance, and local integration" },
    { step: "06", title: "Academic Journey", description: "Ongoing support throughout your studies with mentorship and guidance" }
  ];

  const testimonials = [
    {
      name: "Engineering Excellence",
      text: "German engineering education opened doors to global opportunities I never imagined possible.",
      field: "Mechanical Engineering, TU Munich"
    },
    {
      name: "Research Opportunities",
      text: "The research facilities and industry connections in Germany are unparalleled.",
      field: "Computer Science, RWTH Aachen"
    },
    {
      name: "Career Growth",
      text: "My German degree helped me secure a position at a leading automotive company.",
      field: "Automotive Engineering, Uni Stuttgart"
    }
  ];

  return (
    <PublicLayout>
    <section
      ref={sectionRef}
      className={`ed-premium ${isVisible ? "ed-visible" : ""}`}
    >
      {/* Atmosphere */}
      <div className="ed-atmosphere" aria-hidden="true">
        <div className="ed-glow ed-glow--teal" />
        <div className="ed-glow ed-glow--blue" />
        <div className="ed-glow ed-glow--emerald" />
        <div className="ed-mesh" />
        <div className="ed-grain" />
        <div className="ed-vignette" />
      </div>

      <div className="ed-container">
        {/* Header */}
        <div className="ed-header">
          <div className="ed-thread" />
          <div className="ed-header-content">
            <div className="ed-whisper">
              <span className="ed-whisper-pulse" />
              <span>Education Pathways</span>
            </div>
            <h1 className="ed-headline">
              <span className="ed-headline-line">Study in Germany.</span>
              <span className="ed-headline-line ed-headline-radiance">
                Launch your global career.
              </span>
            </h1>
            <p className="ed-prose">
              Comprehensive guidance for students seeking undergraduate education 
              in Germany — from university selection and application support to 
              internship placements and career pathway development.
            </p>
          </div>
        </div>

        {/* Why Germany */}
        <div className="ed-why">
          <div className="ed-section-label">Why Germany</div>
          <h2 className="ed-section-title">A Destination for Excellence</h2>
          <div className="ed-why-grid">
            {whyGermany.map((item) => (
              <div key={item.title} className="ed-why-card">
                <div className="ed-why-icon">{item.icon}</div>
                <h4 className="ed-why-title">{item.title}</h4>
                <p className="ed-why-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div className="ed-programs">
          <div className="ed-section-label">Our Programs</div>
          <h2 className="ed-section-title">Comprehensive Education Solutions</h2>
          <div className="ed-programs-grid">
            {programs.map((program) => (
              <div key={program.title} className="ed-program-card">
                <div className="ed-program-header">
                  <div className="ed-program-icon">{program.icon}</div>
                  <h3 className="ed-program-title">{program.title}</h3>
                </div>
                <p className="ed-program-text">{program.description}</p>
                <div className="ed-program-highlights">
                  {program.highlights.map((h) => (
                    <span key={h} className="ed-highlight-tag">
                      <CheckCircle size={12} strokeWidth={1.8} />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Journey */}
        {/* <div className="ed-journey">
          <div className="ed-journey-card">
            <div className="ed-section-label">Student Journey</div>
            <h2 className="ed-section-title">From Application to Graduation</h2>
            <div className="ed-journey-steps">
              {studentJourney.map((item, index) => (
                <div key={item.step} className="ed-journey-step">
                  <div className="ed-journey-number">{item.step}</div>
                  <div className="ed-journey-line-wrap">
                    <div className="ed-journey-dot" />
                    {index < studentJourney.length - 1 && <div className="ed-journey-line" />}
                  </div>
                  <div className="ed-journey-content">
                    <h4 className="ed-journey-title">{item.title}</h4>
                    <p className="ed-journey-text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Testimonials */}
        {/* <div className="ed-testimonials">
          <div className="ed-section-label">Student Stories</div>
          <h2 className="ed-section-title">Success Beyond Borders</h2>
          <div className="ed-testimonials-grid">
            {testimonials.map((item) => (
              <div key={item.name} className="ed-testimonial-card">
                <div className="ed-testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#d4af37" stroke="none" />
                  ))}
                </div>
                <p className="ed-testimonial-text">"{item.text}"</p>
                <div className="ed-testimonial-author">
                  <span className="ed-testimonial-name">{item.name}</span>
                  <span className="ed-testimonial-field">{item.field}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Bottom CTA */}
        <div className="ed-cta">
          <div className="ed-cta-card">
            <div className="ed-cta-content">
              <GraduationCap size={32} strokeWidth={1.6} />
              <h3 className="ed-cta-title">Ready to begin your German education journey?</h3>
              <p className="ed-cta-text">
                Schedule a consultation with our education advisors and take the first step towards your global career.
              </p>
              <Link to="/contact">
              <a href="mailto:education@a4agroup.eu" className="ed-cta-btn">
                <span>Get Free Consultation</span>
                <ArrowRight size={18} strokeWidth={1.6} />
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </PublicLayout>
  );
}

export default Education;