import React, { useState } from "react";

const EmailTemplates = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [toast, setToast] = useState(false);

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const templates = [
    {
      id: 1,
      title: "Cold Outreach to Recruiter",
      content: `Hi {{name}},

I came across opportunities at {{company}} and wanted to express my interest in the {{role}} role.

I have 4+ years of experience as a Full Stack Developer working with React, Angular, Java, and Spring Boot, building scalable and high-performance applications.

I would appreciate the opportunity to connect and explore how I can contribute to your team.

Thanks,  
Narayana`,
    },

    {
      id: 2,
      title: "Referral Request",
      content: `Hi {{name}},

I hope you're doing well. I noticed that you’re working at {{company}}, and I’m very interested in applying for the {{role}} position there.

With my experience in full stack development and building scalable systems, I believe I could be a strong fit.

Would you be open to referring me or guiding me on the hiring process?

Thanks in advance!  
Narayana`,
    },

    {
      id: 3,
      title: "Hiring Manager Outreach",
      content: `Hi {{name}},

I’m reaching out regarding the {{role}} role at {{company}}.

I bring 4+ years of experience in full stack development, working across React, Angular, and Spring Boot, with a strong focus on performance and scalability.

I’d love to learn more about your team’s goals and how I can contribute.

Looking forward to connecting.  
Narayana`,
    },

    {
      id: 4,
      title: "Direct Job Application Email",
      content: `Hi {{name}},

I am applying for the {{role}} position at {{company}}.

I have hands-on experience building scalable applications using modern frontend and backend technologies, and I have consistently delivered high-quality solutions in my previous roles.

Please find my resume attached. I would welcome the opportunity to discuss further.

Best regards,  
Narayana`,
    },

    {
      id: 5,
      title: "Follow-Up Email",
      content: `Hi {{name}},

I wanted to follow up regarding my application for the {{role}} role at {{company}}.

I’m very interested in this opportunity and would appreciate any updates you can share.

Looking forward to your response.

Thanks,  
Narayana`,
    },

    {
      id: 6,
      title: "Hidden Opportunity (Proactive)",
      content: `Hi {{name}},

I hope you're doing well. I’m reaching out to explore potential opportunities at {{company}} for a {{role}} role.

With my background in full stack development and experience building scalable systems, I’m confident I can contribute meaningfully even if there isn’t an active opening.

I’d love to connect and learn more about your team.

Best regards,  
Narayana`,
    },
  ];

  const processTemplate = (text) => {
    return text
      .replace(/{{company}}/g, company || "________")
      .replace(/{{role}}/g, role || "________")
      .replace(/{{name}}/g, name || "Hiring Manager");
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

      <h1 className="text-2xl font-bold mb-6">Cold Email Templates</h1>

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
          placeholder="Role (e.g., Frontend Engineer)"
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

export default EmailTemplates;
