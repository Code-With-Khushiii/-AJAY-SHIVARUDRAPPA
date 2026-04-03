import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Menu, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Software Engineer with 6+ years of experience delivering backend Java applications, microservices, and distributed systems for enterprise platforms at Walmart, Google, Meta, and Amazon. Improved system performance through 40% faster API response times, 45% lower latency, 50% higher throughput, and 99.95% system reliability across large-scale production workloads. Strong in Java, Spring Boot, Kafka, cloud-native architecture, database optimization, and event-driven system design for high-impact engineering teams.";

  const experience = [
    {
      company: "Walmart (via Compunnel)",
      role: "Software Engineer (Backend Java Developer)",
      location: "Sunnyvale, CA",
      dates: "Oct. 2024 - Present",
      highlights: [
        "Orchestrated and delivered Java 8 / Spring Boot microservices for Walmart's LastMile Promise platform, integrating third-party logistics APIs and reducing API response time by 40% through query optimization, service-level tuning, and efficient request handling.",
        "Led development of a Kafka-based event-driven architecture to publish real-time booking availability data, processing 10K+ events per second with 99.95% reliability and cutting system latency by 45% through asynchronous message flows.",
        "Engineered a Redis Cluster distributed caching layer that increased cache hit ratio from 65% to 92%, reduced database load by 35%, and lowered average API response time from 250ms to 85ms across high-traffic services.",
        "Led an enterprise-scale Oracle 11g to Azure SQL Database migration using Qlik Replicate, moving 50M+ records with 99.9% data integrity and achieving zero downtime during production cutover through validation scripts and blue-green deployment.",
        "Launched a performance testing framework using JMeter and custom Java harnesses to benchmark Last Mile International workflows, uncover SQL and indexing bottlenecks, and drive a 60% improvement in transaction throughput."
      ]
    },
    {
      company: "Google (via Amiseq)",
      role: "Software Engineer (Java Developer)",
      location: "Sunnyvale, CA",
      dates: "Mar. 2024 - Aug. 2024",
      highlights: [
        "Delivered production-grade features for Google Apigee API Management using Java 8, implementing OAuth 2.0 authentication flows, rate limiting policies, and custom analytics plugins to strengthen API security, traffic control, and platform usability.",
        "Optimized Apigee Edge performance across Ubuntu, CentOS, and RHEL environments through load testing, JVM tuning, and gateway-level performance analysis, increasing API throughput by 30% and reducing P99 latency from 180ms to 95ms.",
        "Architected and deployed containerized microservices on Google Kubernetes Engine (GKE) using Kubernetes, Helm charts, and auto-scaling policies, enabling health-based orchestration, resilient service management, and zero-downtime rolling updates in production.",
        "Resolved complex production incidents in collaboration with cross-functional engineering teams by strengthening monitoring, diagnostic logging, and alerting with Stackdriver, reducing MTTR by 40% and improving platform reliability for enterprise API workloads."
      ]
    },
    {
      company: "Meta (Facebook) (via HCL America)",
      role: "Software Engineer (Full Stack Developer)",
      location: "San Diego, CA",
      dates: "Mar. 2023 - Nov. 2023",
      highlights: [
        "Engineered a full-stack test infrastructure platform using Hack, PHP, JavaScript, and Spring Boot, processing 500K+ test results daily and delivering real-time analytics to 2,000+ developers across Meta's product ecosystem.",
        "Spearheaded an intelligent test failure analysis system using machine learning heuristics to distinguish code regressions from flaky tests, reducing false positive alerts by 45% and saving 120+ developer hours per week.",
        "Designed and implemented a test execution framework with state machine orchestration, increasing test parallelization efficiency by 25% and cutting CI/CD pipeline runtime from 45 minutes to 32 minutes."
      ]
    },
    {
      company: "Amazon | Buyer Fraud Prevention Service - Payment Security Platform",
      role: "Software Development Engineer (Full Stack Java Developer)",
      location: "San Diego, CA",
      dates: "Feb. 2022 - Mar. 2023",
      highlights: [
        "Architected a Java and Spring Boot fraud detection system on AWS, processing 5M+ transactions per day with sub-200ms response times and 99.5% detection accuracy for payment security operations.",
        "Optimized high-volume payment APIs through Java 8 concurrency, caching, and service-layer tuning, boosting throughput by 50% and cutting P95 latency by 60% from 500ms to 200ms.",
        "Led automation of country onboarding workflows for fraud prevention services, reducing release timelines by 80% from 10 business days to 2 days and generating $20K in annual operational savings.",
        "Implemented a serverless GDPR deletion workflow with AWS Lambda, Step Functions, and DynamoDB, handling 100K+ requests monthly at 99.9% success rate and supporting 15+ microservices through containerized CI/CD."
      ]
    },
    {
      company: "Athenahealth India",
      role: "Software Engineer",
      location: "India",
      dates: "Jul. 2019 - Jan. 2020",
      highlights: [
        "Built a C#/.NET data migration tool that processed 10M+ healthcare records, accelerating migration speed by 60% while strengthening data integrity and system reliability."
      ]
    },
    {
      company: "GE Healthcare & Athenahealth India",
      role: "Software Engineer",
      location: "India",
      dates: "Apr. 2017 - Jul. 2019",
      highlights: [
        "Led development of a multithreaded healthcare platform serving 50K+ users, implementing Kafka-based data pipelines to MongoDB and launching a customer loyalty module that generated $500K+ annual revenue."
      ]
    }
  ];

  const projects = [
    {
      title: "Distributed Systems Architecture",
      subtitle: "Enterprise Microservices Platform",
      category: "Backend Engineering",
      introduction: "Designed and implemented scalable microservices architecture for enterprise applications, focusing on high availability, fault tolerance, and performance optimization across distributed systems.",
      problem: "Legacy monolithic systems faced scalability challenges, high latency, and difficulty in maintaining and deploying new features across large-scale enterprise platforms.",
      objective: "Build a modern, cloud-native microservices architecture that improves system reliability, reduces latency, and enables rapid deployment of new features.",
      methodology: [
        "Architected event-driven microservices using Spring Boot and Kafka for asynchronous communication.",
        "Implemented distributed caching with Redis to reduce database load and improve response times.",
        "Designed containerized deployment pipeline using Docker and Kubernetes for scalable orchestration.",
        "Established monitoring and observability with ELK Stack and custom metrics dashboards."
      ],
      results: [
        "Achieved 99.95% system reliability across distributed services.",
        "Reduced API response times by 40% through optimization and caching.",
        "Increased system throughput by 50% with improved concurrency handling.",
        "Enabled zero-downtime deployments with blue-green deployment strategies."
      ],
      conclusion: "Successfully delivered a robust distributed systems architecture that supports millions of transactions daily while maintaining high performance and reliability standards."
    },
    {
      title: "Cloud-Native Migration",
      subtitle: "Enterprise Database Modernization",
      category: "Cloud Engineering",
      introduction: "Led enterprise-scale database migration from on-premise Oracle systems to cloud-native Azure SQL Database, ensuring data integrity and zero downtime during production cutover.",
      problem: "Legacy Oracle 11g databases faced scalability limitations, high maintenance costs, and limited cloud integration capabilities for modern application requirements.",
      objective: "Migrate 50M+ records to Azure SQL Database with 99.9% data integrity while maintaining zero downtime and improving overall system performance.",
      methodology: [
        "Designed migration strategy using Qlik Replicate for real-time data synchronization.",
        "Implemented validation scripts and data quality checks throughout the migration process.",
        "Executed blue-green deployment strategy to ensure seamless production cutover.",
        "Established rollback procedures and monitoring for risk mitigation."
      ],
      results: [
        "Successfully migrated 50M+ records with 99.9% data integrity.",
        "Achieved zero downtime during production cutover.",
        "Reduced database maintenance costs by 35%.",
        "Improved query performance by 40% with optimized cloud infrastructure."
      ],
      conclusion: "Delivered a seamless cloud migration that modernized data infrastructure while maintaining business continuity and improving operational efficiency."
    },
    {
      title: "Fraud Detection System",
      subtitle: "Payment Security Platform",
      category: "Security Engineering",
      introduction: "Architected and deployed a real-time fraud detection system on AWS, processing millions of transactions daily with high accuracy and sub-200ms response times.",
      problem: "Payment platforms required robust fraud detection capabilities to identify suspicious transactions in real-time while maintaining low latency for legitimate transactions.",
      objective: "Build a scalable fraud detection system that processes 5M+ transactions daily with 99.5% accuracy and sub-200ms response times.",
      methodology: [
        "Developed Java Spring Boot microservices for transaction processing and risk scoring.",
        "Implemented machine learning models for pattern recognition and anomaly detection.",
        "Designed serverless workflows using AWS Lambda and Step Functions for automated responses.",
        "Created comprehensive monitoring and alerting for system health and fraud metrics."
      ],
      results: [
        "Processed 5M+ transactions daily with 99.5% detection accuracy.",
        "Achieved sub-200ms response times for real-time fraud checks.",
        "Reduced false positives by 30% through ML model optimization.",
        "Saved $20K annually through automated workflow implementations."
      ],
      conclusion: "Built a production-grade fraud detection platform that balances security requirements with performance needs, protecting millions of transactions daily."
    },
    {
      title: "Test Infrastructure Platform",
      subtitle: "Developer Productivity Tool",
      category: "Developer Tools",
      introduction: "Engineered a full-stack test infrastructure platform processing 500K+ test results daily, delivering real-time analytics to 2,000+ developers and improving CI/CD efficiency.",
      problem: "Development teams struggled with flaky tests, slow CI/CD pipelines, and lack of visibility into test failures, leading to reduced developer productivity and longer release cycles.",
      objective: "Create an intelligent test infrastructure that reduces false positives, accelerates CI/CD pipelines, and provides actionable insights to development teams.",
      methodology: [
        "Built full-stack platform using Hack, PHP, JavaScript, and Spring Boot.",
        "Implemented ML-based test failure analysis to distinguish regressions from flaky tests.",
        "Designed state machine orchestration for efficient test parallelization.",
        "Created real-time analytics dashboards for developer visibility."
      ],
      results: [
        "Processed 500K+ test results daily across the organization.",
        "Reduced false positive alerts by 45% using ML heuristics.",
        "Saved 120+ developer hours per week through automation.",
        "Cut CI/CD pipeline runtime from 45 minutes to 32 minutes."
      ],
      conclusion: "Delivered a comprehensive test infrastructure that significantly improved developer productivity and accelerated software delivery across the organization."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Languages',
      skills: ['Java', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'C#', 'C++', 'Ruby']
    },
    {
      icon: TrendingUp,
      title: 'Backend & Frameworks',
      skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'Node.js', 'Express.js', 'REST APIs', 'SOAP', 'Microservices']
    },
    {
      icon: Users,
      title: 'Distributed Systems',
      skills: ['Kafka', 'RabbitMQ', 'JMS', 'Redis', 'Event-Driven Architecture', 'Message Queues']
    },
    {
      icon: Lightbulb,
      title: 'Databases',
      skills: ['Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'Azure SQL', 'SQL Server', 'DB2', 'PL/SQL']
    },
    {
      icon: Rocket,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Google Cloud Platform', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Maven', 'CI/CD', 'Git']
    },
    {
      icon: Award,
      title: 'Testing & Tools',
      skills: ['JUnit', 'Mockito', 'Swagger', 'OpenAPI', 'Postman', 'Splunk', 'ELK Stack', 'Jira', 'Confluence', 'Agile', 'Scrum', 'TDD']
    }
  ];

  const education = [
    {
      school: "The University of Texas at Arlington",
      degree: "Master of Science in Computer Science",
      location: "Arlington, TX",
      dates: "Jan. 2020 - Dec. 2021",
      details: "Advanced coursework in distributed systems, cloud computing, and software engineering."
    },
    {
      school: "BMS Institute of Technology",
      degree: "Bachelor of Engineering in Information Science",
      location: "Bangalore, India",
      dates: "Aug. 2011 - Jun. 2015",
      details: "Foundation in computer science, data structures, algorithms, and software development."
    }
  ];

  const papers = [
    // Add your published papers below. Example format:
    // { title: "Paper Title", publication: "Journal/Conference Name", year: "2024", link: "https://..." },
  ];

  const certifications = [
    // Add certifications here
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-auto">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              AJAY SHIVARUDRAPPA
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certificate' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certificate' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Ajay Shivarudrappa"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-3xl md:text-6xl font-display text-black mb-6 tracking-wide">
              AJAY SHIVARUDRAPPA
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Software Engineer | Backend Java Engineer | Distributed Systems & Microservices
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              SAN JOSE, CA, USA · HYBRID/REMOTE READY
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'API RESPONSE TIME IMPROVEMENT', value: '40%', detail: 'Performance Optimization' },
              { label: 'SYSTEM RELIABILITY', value: '99.95%', detail: 'Enterprise Platforms' },
              { label: 'LATENCY REDUCTION', value: '45%', detail: 'Distributed Systems' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Backend Software Engineer specializing in Java, microservices, and distributed systems. Proven track record of delivering high-performance enterprise applications across Fortune 500 companies including Walmart, Google, Meta, and Amazon.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Backend Engineering',
                detail: 'Expert in Java 8+, Spring Boot, and microservices architecture. Delivered 40% faster API response times and 50% higher throughput through optimization and efficient system design.'
              },
              {
                icon: Rocket,
                title: 'Distributed Systems',
                detail: 'Built event-driven architectures using Kafka and Redis, processing 10K+ events per second with 99.95% reliability. Led cloud migrations with zero downtime and 99.9% data integrity.'
              },
              {
                icon: Lightbulb,
                title: 'Cloud & DevOps',
                detail: 'Proficient in AWS, GCP, and Azure with expertise in Docker, Kubernetes, and CI/CD pipelines. Architected containerized microservices with auto-scaling and zero-downtime deployments.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Software engineering experience across Walmart, Google, Meta, Amazon, and healthcare technology companies.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Key technical projects showcasing expertise in distributed systems, cloud migration, fraud detection, and developer productivity tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed technical documentation?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Technical expertise in backend development, distributed systems, cloud platforms, and enterprise software engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Published Section */}
      {papers.length > 0 && (
      <section id="papers" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">PAPERS PUBLISHED</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Research and publications in software engineering and distributed systems.
            </p>
          </div>
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                <p className="text-brown font-medium mb-2">{paper.publication} · {paper.year}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                >
                  View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Certifications Section */}
      {certifications.length > 0 && (
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                <p className="text-brown leading-relaxed font-light">{cert.description}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline">
                  View Certificate <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss backend engineering opportunities, distributed systems architecture, or Java microservices projects.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+16823756956"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (682) 375-6956
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/ajay-shiva/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:ajayshiva2025@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                ajayshiva2025@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Ajay Shivarudrappa · Software Engineer & Backend Java Developer.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;