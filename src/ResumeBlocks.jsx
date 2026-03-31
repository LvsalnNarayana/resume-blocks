import { useState, useMemo } from "react";

function ResumeBlocks() {
  const initialBlocks = [
    // 🔹 IDENTITY
    {
      id: 1,
      category: "Identity",
      title: "Full Name",
      content: "V S A L Narayana Lanka",
      locked: true,
    },
    {
      id: 2,
      category: "Identity",
      title: "Job Title",
      content: "Full Stack Developer",
      locked: true,
    },
    {
      id: 3,
      category: "Identity",
      title: "Professional Summary",
      content: `Full Stack Developer with 4+ years of experience designing and building scalable web applications
across frontend and backend layers using React, Angular, TypeScript, Java, and Spring Boot. Strong
expertise in developing responsive user interfaces, building RESTful APIs, integrating microservices,
and optimizing performance for high-traﬃc, data-intensive systems. Experienced in real-time
systems, API-driven architectures, and secure authentication and payment integrations. Proven
ability to collaborate in Agile teams to deliver maintainable, high-quality solutions that improve
system reliability, performance, and user engagement.`,
      locked: true,
    },

    // 🔹 LOCATION
    {
      id: 4,
      category: "Location",
      title: "City",
      content: "Hyderabad",
      locked: true,
    },
    {
      id: 5,
      category: "Location",
      title: "Country",
      content: "India",
      locked: true,
    },

    // 🔹 SKILLS
    {
      id: 6,
      category: "Skills",
      title: "Programming Languages",
      content: "JavaScript (ES6+), TypeScript, Java, HTML5, CSS3",
      locked: true,
    },

    // 🔹 EXPERIENCE — COGNIVERSE (JAVA DEV)
    {
      id: 12,
      category: "Experience",
      title: "Company - Cogniverse Labs",
      content: "Cogniverse Labs Pvt Ltd",
      locked: true,
    },
    {
      id: 13,
      category: "Experience",
      title: "Role - Java Developer",
      content: "Java Developer",
      locked: true,
    },
    {
      id: 14,
      category: "Experience",
      title: "Duration - Java Developer",
      content: "September 2025 – Present",
      locked: true,
    },
    {
      id: 15,
      category: "Experience",
      title: "Location - Cogniverse",
      content: "India",
      locked: true,
    },
    {
      id: 16,
      category: "Experience",
      title: "Responsibilities - Java Developer",
      content: `
      - Developed scalable backend services for a large-scale telecom platform using Java, Spring Boot,
and microservices, ensuring high availability and performance in distributed systems.
- Designed and documented RESTful APIs using Swagger and Confluence, standardizing
integrations and speeding up onboarding for frontend and third-party developers.
- Architected eﬃcient integration of Spring Boot services with legacy CRM systems, reducing data
exchange latency and improving system interoperability.
- Configured and implemented secure middleware integration utilizing IBM DataPower and IBM
MQ to enable reliable XML/JSON RPC communication between modern APIs and legacy systems,
while ensuring strong unit test coverage in a SOA environment.`,
      locked: true,
    },

    // 🔹 EXPERIENCE — COGNIVERSE (FRONTEND)
    {
      id: 17,
      category: "Experience",
      title: "Role - Frontend Engineer (Cogniverse)",
      content: "Frontend Engineer",
      locked: true,
    },
    {
      id: 18,
      category: "Experience",
      title: "Duration - Frontend Engineer (Cogniverse)",
      content: "August 2024 – February 2025",
      locked: true,
    },
    {
      id: 19,
      category: "Experience",
      title: "Responsibilities - Frontend Engineer (Cogniverse)",
      content: `
      - Led React frontend development for telecom operator dashboard; built 25+ reusable
components across 20+ modules and reduced CRM response time by 30%.
- Implemented optimized data loading, virtualization, and rendering for smooth handling of
thousands of records in complex tables.
- Architected real-time AI model API and map visualization integration for Kumbh Mela 2025
dashboard, cutting issue response time by 25% while supporting 100+ daily users.
- Optimized Redux state management and API patterns to improve data consistency and rendering
performance.`,
      locked: true,
    },

    // 🔹 EXPERIENCE — i13 Ventures
    {
      id: 20,
      category: "Experience",
      title: "Company - i13 Ventures",
      content: "i13 Ventures",
      locked: true,
    },
    {
      id: 21,
      category: "Experience",
      title: "Role - i13 Ventures",
      content: "Frontend Engineer",
      locked: true,
    },
    {
      id: 22,
      category: "Experience",
      title: "Duration - i13 Ventures",
      content: "October 2023 – April 2024",
      locked: true,
    },
    {
      id: 23,
      category: "Experience",
      title: "Location - i13 Ventures",
      content: "Ireland",
      locked: true,
    },
    {
      id: 24,
      category: "Experience",
      title: "Responsibilities - i13 Ventures",
      content: `
      - Architected complete frontend system for AI-driven business intelligence platform; defined
scalable component architecture, data flow, and state management for long-term maintainability.
- Built Backend-for-Frontend (BFF) layer with Node.js to aggregate data from multiple ML
microservices, reducing API response latency by 35%.
- Engineered real-time AI-powered chat and visualization interface with optimized API handling
and performance tuning, increasing user engagement by 30% and enabling faster live updates.
- Designed modular authentication, routing, and payment system integrating Stripe and Clerk,
improving platform security and user experience.`,
      locked: true,
    },

    // 🔹 EXPERIENCE — f1Studioz
    {
      id: 25,
      category: "Experience",
      title: "Company - f1Studioz",
      content: "f1Studioz",
      locked: true,
    },
    {
      id: 26,
      category: "Experience",
      title: "Role - f1Studioz",
      content: "Frontend Engineer",
      locked: true,
    },
    {
      id: 27,
      category: "Experience",
      title: "Duration - f1Studioz",
      content: "January 2022 – July 2022",
      locked: true,
    },
    {
      id: 28,
      category: "Experience",
      title: "Location - f1Studioz",
      content: "India",
      locked: true,
    },
    {
      id: 29,
      category: "Experience",
      title: "Responsibilities - f1Studioz",
      content: `
      - Architected dynamic data visualization platform using Angular 13 with scalable drag-and-drop
interface for enterprise analytics and complex data operations.
- Designed reusable Angular component library, boosting development eﬃciency by 30% and
enforcing consistent UI standards across projects.
- Built real-time admin dashboard integrated with third-party APIs, delivering live insights and
reducing issue response time by 25%.
- Optimized frontend performance through improved change detection, API handling, and lazy
loading for faster user interactions.`,
      locked: true,
    },

    // 🔹 EXPERIENCE — EC-Council
    {
      id: 30,
      category: "Experience",
      title: "Company - EC-Council",
      content: "EC-Council",
      locked: true,
    },
    {
      id: 31,
      category: "Experience",
      title: "Role - EC-Council",
      content: "Frontend Developer",
      locked: true,
    },
    {
      id: 32,
      category: "Experience",
      title: "Duration - EC-Council",
      content: "August 2020 – January 2022",
      locked: true,
    },
    {
      id: 33,
      category: "Experience",
      title: "Location - EC-Council",
      content: "India",
      locked: true,
    },
    {
      id: 34,
      category: "Experience",
      title: "Responsibilities - EC-Council",
      content: `
      - Developed interactive product pages using WordPress and custom JavaScript, enhancing
functionality and user engagement across web platforms.
- Optimized scripts, assets, and performance to improve Google PageSpeed score from 65 to 96,
cut load times by 50%, and increase user traﬃc by 40%.
- Implemented low-code marketing solutions with Webflow, speeding up campaign delivery and
streamlining CMS content workflows.
- Collaborated with design and marketing teams to build responsive, cross-browser-compatible
web interfaces with consistent visual quality.`,
      locked: true,
    },

    // 🔹 EDUCATION
    {
      id: 35,
      category: "Education",
      title: "Masters Degree",
      content:
        "Master of Science in Computer Science\nUniversity of Hertfordshire, United Kingdom",
      locked: true,
    },
    {
      id: 36,
      category: "Education",
      title: "Bachelors Degree",
      content:
        "Bachelor of Technology in Electronics and Communications Engineering\nMallareddy College of Engineering & Technology, Hyderabad, India",
      locked: true,
    },
  ];

  const [blocks, setBlocks] = useState(initialBlocks);
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [showToast, setShowToast] = useState(false);

  // 🔍 Filtered blocks (search)
  const filteredBlocks = useMemo(() => {
    const term = search.trim().toLowerCase(); // ✅ trim first

    if (!term) return blocks;

    return blocks.filter((block) => block.title.toLowerCase().includes(term));
  }, [blocks, search]);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setShowToast(true);

    setTimeout(() => {
      setCopiedId(null);
      setShowToast(false);
    }, 2000);
  };

  const toggleLock = (id) => {
    setBlocks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, locked: !b.locked } : b)),
    );
  };

  const renderContent = (text) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("- ")) {
        return (
          <li key={i} className="ml-4 list-disc">
            {line.slice(2)}
          </li>
        );
      }
      if (line.startsWith("http")) {
        return (
          <a key={i} href={line} className="text-blue-600 underline break-all">
            {line}
          </a>
        );
      }
      return <p key={i}>{line}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-4 lg:p-6">
      {showToast && <div className="toast">Copied!</div>}

      <h1 className="title mb-4">Resume Copy Blocks</h1>

      {/* 🔍 Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search blocks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 📦 Blocks */}
      <div className="blocks-container">
        {filteredBlocks.length > 0 ? (
          filteredBlocks.map((block) => (
            <div key={block.id} className="block-card">
              <div className="text-xs text-gray-400 mb-1">{block.category}</div>

              <input
                className="block-title"
                value={block.title}
                disabled={block.locked}
                onChange={(e) =>
                  setBlocks((prev) =>
                    prev.map((b) =>
                      b.id === block.id ? { ...b, title: e.target.value } : b,
                    ),
                  )
                }
              />

              {!block.locked ? (
                <textarea
                  className="block-content"
                  value={block.content}
                  onChange={(e) =>
                    setBlocks((prev) =>
                      prev.map((b) =>
                        b.id === block.id
                          ? { ...b, content: e.target.value }
                          : b,
                      ),
                    )
                  }
                />
              ) : (
                <div className="block-preview">
                  {renderContent(block.content)}
                </div>
              )}

              <div className="block-actions">
                <button
                  className={`btn-copy ${
                    copiedId === block.id ? "btn-copied" : ""
                  }`}
                  onClick={() => copyToClipboard(block.content, block.id)}
                >
                  {copiedId === block.id ? "Copied" : "Copy"}
                </button>

                <button
                  className="btn-lock"
                  onClick={() => toggleLock(block.id)}
                >
                  {block.locked ? "Unlock" : "Lock"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-6">No results found</div>
        )}
      </div>
    </div>
  );
}

export default ResumeBlocks;
