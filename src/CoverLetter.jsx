import React, { useState } from "react";
import jsPDF from "jspdf";

const CoverLetter = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [toast, setToast] = useState(false);

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const templates = [
    {
      id: 1,
      title: "Standard Professional",
      content: `Dear Hiring Manager,

I am writing to express my interest in the {{role}} position at {{company}}. With over 4 years of experience as a Full Stack Developer, I have built scalable web applications using React, Angular, TypeScript, Java, and Spring Boot.

In my current role, I have developed high-performance systems, optimized APIs, and contributed to real-time, data-intensive platforms.

I would welcome the opportunity to contribute my skills and discuss how I can add value to your team.

Sincerely,  
V S A L Narayana Lanka`,
    },
    {
      id: 2,
      title: "Impact Focused",
      content: `Dear Hiring Manager,

I am excited to apply for the {{role}} role at {{company}}. As a Full Stack Developer with 4+ years of experience, I specialize in building scalable and high-performance applications.

I have consistently improved performance, reduced latency, and delivered measurable impact.

Looking forward to contributing to your team.

Best regards,  
V S A L Narayana Lanka`,
    },
    {
      id: 3,
      title: "Technical Depth",
      content: `Dear Hiring Manager,

I am applying for the {{role}} position at {{company}}. My experience spans React, Angular, Spring Boot, and microservices architecture.

I have built scalable systems, real-time features, and high-performance APIs.

I would be happy to discuss how my technical expertise can contribute to your team.

Sincerely,  
V S A L Narayana Lanka`,
    },
    {
      id: 4,
      title: "Short & Crisp",
      content: `Dear Hiring Manager,

I am interested in the {{role}} role at {{company}}. With 4+ years of experience, I bring strong expertise in full stack development.

I would love to contribute to your team.

Regards,  
V S A L Narayana Lanka`,
    },
  ];

  // 🔥 Replace placeholders
  const processTemplate = (text) => {
    return text
      .replace(/{{company}}/g, company || "________")
      .replace(/{{role}}/g, role || "________");
  };

  const copyToClipboard = (text, id) => {
    const finalText = processTemplate(text);
    navigator.clipboard.writeText(finalText);

    setCopiedId(id);
    setToast(true);

    setTimeout(() => {
      setCopiedId(null);
      setToast(false);
    }, 4000);
  };

  const generatePDF = (text, title) => {
    const finalText = processTemplate(text);

    const doc = new jsPDF();
    const lines = doc.splitTextToSize(finalText, 180);

    doc.text(lines, 10, 10);
    doc.save(`${title}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-4 lg:p-6">
      {toast && (
        <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded">
          Copied!
        </div>
      )}

      <h1 className="text-2xl font-bold mb-6">Cover Letter Templates</h1>

      {/* 🔹 Inputs */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 grid gap-3">
        <input
          type="text"
          placeholder="Enter Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Enter Role (e.g., Frontend Engineer)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      {/* 🔹 Templates */}
      <div className="grid gap-4">
        {templates.map((t) => {
          const finalText = processTemplate(t.content);

          return (
            <div key={t.id} className="bg-white p-4 rounded-xl shadow border">
              <h2 className="font-semibold text-lg mb-2">{t.title}</h2>

              <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded border">
                {finalText}
              </pre>

              <div className="flex gap-2 justify-end mt-3">
                <button
                  className={`px-3 py-1 rounded text-white ${
                    copiedId === t.id ? "bg-green-900" : "bg-green-600"
                  }`}
                  onClick={() => copyToClipboard(t.content, t.id)}
                >
                  {copiedId === t.id ? "Copied" : "Copy"}
                </button>

                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={() => generatePDF(t.content, t.title)}
                >
                  Generate PDF
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoverLetter;
