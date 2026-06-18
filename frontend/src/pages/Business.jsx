import { useEffect, useRef, useState } from "react";
import { 
  Target, 
  TrendingUp, 
  Lightbulb, 
  Globe2,
  Handshake,
  Building2,
  Scale,
  Search,
  FileCheck,
  ClipboardList,
  ShieldCheck,
  BadgeCheck,
  Users,
  ArrowRight,
  Briefcase
} from "lucide-react";
import "./Business.css";
import PublicLayout from "../layouts/PublicLayout";

function Business() {
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

  const targetSectors = [
    "Engineering",
    "Automation",
    "Technology",
    "Logistics",
    "Healthcare"
  ];

  const objectives = [
    {
      icon: <TrendingUp size={22} strokeWidth={1.8} />,
      title: "Business Growth",
      description: "Expand operations by entering new markets and increasing revenue streams through strategic acquisitions."
    },
    {
      icon: <Lightbulb size={22} strokeWidth={1.8} />,
      title: "Technology Transfer",
      description: "Bring world-class engineering, manufacturing expertise, and innovation capabilities into the partnership."
    },
    {
      icon: <Globe2 size={22} strokeWidth={1.8} />,
      title: "Global Market Expansion",
      description: "Help established companies access new international markets through strategic networks and local expertise."
    }
  ];

  const synergies = [
    {
      icon: <Scale size={22} strokeWidth={1.8} />,
      title: "Cost Optimization",
      description: "Reduce operating costs by combining resources, procurement, supply chains, and management processes across entities."
    },
    {
      icon: <Target size={22} strokeWidth={1.8} />,
      title: "Cross-Border Innovation",
      description: "Combine technical expertise with operational capabilities to create new products, services, and efficiencies."
    },
    {
      icon: <Handshake size={22} strokeWidth={1.8} />,
      title: "Revenue Synergy",
      description: "Generate additional revenue through cross-selling, market expansion, and entering new customer segments."
    }
  ];

  const acquisitionSteps = [
    {
      number: "01",
      icon: <Building2 size={20} strokeWidth={1.8} />,
      title: "Form Joint Venture",
      description: "Create a structured partnership with defined ownership, governance rules, shareholder agreements, and funding mechanisms."
    },
    {
      number: "02",
      icon: <Users size={20} strokeWidth={1.8} />,
      title: "Build Advisory Team",
      description: "Engage local legal counsel, tax advisors, auditors, and M&A consultants to ensure compliance and smooth deal execution."
    },
    {
      number: "03",
      icon: <Search size={20} strokeWidth={1.8} />,
      title: "Identify Targets",
      description: "Research markets, match industries, sign NDAs, and submit Letters of Intent to begin acquisition discussions."
    },
    {
      number: "04",
      icon: <FileCheck size={20} strokeWidth={1.8} />,
      title: "Due Diligence",
      description: "Investigate legal risks, financial health, commercial viability, operational efficiency, and ESG compliance."
    },
    {
      number: "05",
      icon: <ClipboardList size={20} strokeWidth={1.8} />,
      title: "Structure Deal",
      description: "Optimize the transaction using share purchase agreements, asset purchases, equity/debt financing, and development funding."
    },
    {
      number: "06",
      icon: <ShieldCheck size={20} strokeWidth={1.8} />,
      title: "Regulatory Approvals",
      description: "Satisfy competition reviews, investment screening, and merger notifications before closing."
    },
    {
      number: "07",
      icon: <BadgeCheck size={20} strokeWidth={1.8} />,
      title: "Close Acquisition",
      description: "Sign notarized agreements, transfer funds, obtain final approvals, and complete ownership transfer."
    },
    {
      number: "08",
      icon: <Briefcase size={20} strokeWidth={1.8} />,
      title: "Integrate Company",
      description: "Merge financial systems, align operations and HR, retain key employees, and ensure business continuity."
    }
  ];

  const culturalConsiderations = [
    {
      title: "Respect Heritage",
      description: "Honoring family-owned business culture and legacy"
    },
    {
      title: "Regulatory Compliance",
      description: "Understanding and adhering to local regulations"
    },
    {
      title: "Stakeholder Engagement",
      description: "Working collaboratively with employee councils"
    },
    {
      title: "Local Integration",
      description: "Using local language and cultural advisors"
    },
    {
      title: "Trust & Transparency",
      description: "Maintaining open communication throughout"
    }
  ];

  const immediateSteps = [
    "Finalize the Joint Venture structure",
    "Engage legal and tax professionals",
    "Begin outreach to acquisition targets",
    "Develop integration strategy pre-acquisition"
  ];

  return (
    <PublicLayout>
    <section
      ref={sectionRef}
      className={`bs-premium ${isVisible ? "bs-visible" : ""}`}
    >
      {/* Atmosphere */}
      <div className="bs-atmosphere" aria-hidden="true">
        <div className="bs-glow bs-glow--teal" />
        <div className="bs-glow bs-glow--blue" />
        <div className="bs-glow bs-glow--emerald" />
        <div className="bs-mesh" />
        <div className="bs-grain" />
        <div className="bs-vignette" />
      </div>

      <div className="bs-container">
        {/* Header */}
        <div className="bs-header">
          <div className="bs-thread" />
          <div className="bs-header-content">
            <div className="bs-whisper">
              <span className="bs-whisper-pulse" />
              <span>Strategic Growth Framework</span>
            </div>
            <h1 className="bs-headline">
              <span className="bs-headline-line">Building bridges,</span>
              <span className="bs-headline-line bs-headline-radiance">
                creating lasting value.
              </span>
            </h1>
            <p className="bs-prose">
              A structured approach to acquiring and scaling profitable enterprises 
              through cross-border partnerships — combining technical excellence 
              with operational strength for sustainable global growth.
            </p>
          </div>
        </div>

        {/* Target Sectors */}
        <div className="bs-sectors">
          <div className="bs-sectors-label">Target Sectors</div>
          <div className="bs-sectors-list">
            {targetSectors.map((sector) => (
              <span key={sector} className="bs-sector-pill">
                <span className="bs-sector-dot" />
                {sector}
              </span>
            ))}
          </div>
        </div>

        {/* Objectives & Synergies Row */}
        <div className="bs-row">
          <div className="bs-row-col">
            <div className="bs-row-label">Core Objectives</div>
            <h3 className="bs-row-title">Driving strategic growth</h3>
            <div className="bs-card-list">
              {objectives.map((item) => (
                <div key={item.title} className="bs-card">
                  <div className="bs-card-icon">{item.icon}</div>
                  <div className="bs-card-info">
                    <h4 className="bs-card-title">{item.title}</h4>
                    <p className="bs-card-text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bs-row-col">
            <div className="bs-row-label">Partnership Synergies</div>
            <h3 className="bs-row-title">Creating value together</h3>
            <div className="bs-card-list">
              {synergies.map((item) => (
                <div key={item.title} className="bs-card">
                  <div className="bs-card-icon">{item.icon}</div>
                  <div className="bs-card-info">
                    <h4 className="bs-card-title">{item.title}</h4>
                    <p className="bs-card-text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Acquisition Process */}
        <div className="bs-process">
          <div className="bs-process-header">
            <div className="bs-section-thread" />
            <span className="bs-section-label">Acquisition Process</span>
          </div>
          <h2 className="bs-section-title">From Strategy to Integration</h2>
          
          <div className="bs-steps-grid">
            {acquisitionSteps.map((step) => (
              <div key={step.number} className="bs-step-card">
                <div className="bs-step-number">{step.number}</div>
                <div className="bs-step-icon">{step.icon}</div>
                <h4 className="bs-step-title">{step.title}</h4>
                <p className="bs-step-text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Considerations */}
        {/* <div className="bs-cultural">
          <div className="bs-cultural-card">
            <div className="bs-cultural-header">
              <div className="bs-section-thread bs-thread-gold" />
              <span className="bs-section-label">Cultural & Business Considerations</span>
            </div>
            <h2 className="bs-section-title">Respecting Heritage, Building Trust</h2>
            <div className="bs-cultural-grid">
              {culturalConsiderations.map((item) => (
                <div key={item.title} className="bs-cultural-item">
                  <span className="bs-cultural-dot" />
                  <div>
                    <h4 className="bs-cultural-title">{item.title}</h4>
                    <p className="bs-cultural-text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Expected Benefits */}
        <div className="bs-benefits">
          <div className="bs-benefits-content">
            <div className="bs-section-thread bs-thread-emerald" />
            <h2 className="bs-section-title">Expected Benefits</h2>
            <div className="bs-benefits-list">
              <div className="bs-benefit-item">
                <TrendingUp size={20} strokeWidth={1.6} />
                <span>Revenue Growth</span>
              </div>
              <div className="bs-benefit-item">
                <Scale size={20} strokeWidth={1.6} />
                <span>Cost Savings</span>
              </div>
              <div className="bs-benefit-item">
                <Lightbulb size={20} strokeWidth={1.6} />
                <span>Technology Advantages</span>
              </div>
              <div className="bs-benefit-item">
                <Target size={20} strokeWidth={1.6} />
                <span>Operational Efficiencies</span>
              </div>
              <div className="bs-benefit-item">
                <Globe2 size={20} strokeWidth={1.6} />
                <span>Cross-Border Innovation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Immediate Action Steps */}
        {/* <div className="bs-actions">
          <div className="bs-actions-card">
            <div className="bs-actions-header">
              <div className="bs-section-thread bs-thread-blue" />
              <span className="bs-section-label">Immediate Next Steps</span>
            </div>
            <h2 className="bs-section-title">Moving Forward</h2>
            <div className="bs-actions-grid">
              {immediateSteps.map((step, index) => (
                <div key={index} className="bs-action-item">
                  <span className="bs-action-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="bs-action-text">{step}</span>
                  <ArrowRight size={16} strokeWidth={1.6} className="bs-action-arrow" />
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
    </PublicLayout>
  );
}

export default Business;