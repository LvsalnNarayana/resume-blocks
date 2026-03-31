import React, { useState } from "react";

const MessageFormats = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [toast, setToast] = useState(false);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const templates = [
    {
      id: 1,
      title: "Recruiter Outreach",
      content: `Hi {{name}},  

I came across your profile and noticed you're hiring at {{company}}. I’m interested in the {{role}} role.  

I have 4+ years of experience in full stack development (React, Angular, Spring Boot). Would love to connect and explore opportunities.  

Thanks!`,
    },

    {
      id: 2,
      title: "Referral Request",
      content: `Hi {{name}},  

I noticed you’re working at {{company}}. I’m currently exploring opportunities for a {{role}} role and {{company}} really caught my interest.  

Would you be open to referring me or sharing how the hiring process works?  

Appreciate your time!`,
    },

    {
      id: 3,
      title: "Hiring Manager Direct",
      content: `Hi {{name}},  

I’m reaching out regarding the {{role}} role at {{company}}.  

I have strong experience in building scalable web apps and working with modern frontend and backend technologies.  

Would love to learn more about your team and how I can contribute.`,
    },

    {
      id: 4,
      title: "Connection Request Note",
      content: `Hi {{name}},  

I’m a Full Stack Developer exploring opportunities in {{company}}. Would love to connect and stay in touch!`,
    },

    {
      id: 5,
      title: "Follow-Up Message",
      content: `Hi {{name}},  

Just following up on my previous message regarding the {{role}} role at {{company}}.  

Would really appreciate any update or guidance you can share.  

Thanks again!`,
    },

    {
      id: 6,
      title: "Hidden Opportunity",
      content: `Hi {{name}},  

I hope you're doing well. I’m exploring opportunities as a {{role}} and wanted to check if there might be any relevant openings at {{company}}.  

I’d love to connect and learn more about your team.`,
    },
  ];

  const processTemplate = (text) => {
    return text
      .replace(/{{name}}/g, name || "there")
      .replace(/{{company}}/g, company || "your company")
      .replace(/{{role}}/g, role || "this role");
  };

  const copyToClipboard = (text, id) => {
    const finalText = processTemplate(text);
    navigator.clipboard.writeText(finalText);

    setCopiedId(id);
    setToast(true);

    setTimeout(() => {
      setCopiedId(null);
      setToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-4 lg:p-6">
      {toast && (
        <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded">
          Copied!
        </div>
      )}

      <h1 className="text-2xl font-bold mb-6">LinkedIn Message Templates</h1>

      {/* 🔹 Inputs */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 grid gap-3">
        <input
          type="text"
          placeholder="Recipient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Role"
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

              <div className="flex justify-end mt-3">
                <button
                  className={`px-3 py-1 rounded text-white ${
                    copiedId === t.id ? "bg-green-900" : "bg-green-600"
                  }`}
                  onClick={() => copyToClipboard(t.content, t.id)}
                >
                  {copiedId === t.id ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageFormats;
