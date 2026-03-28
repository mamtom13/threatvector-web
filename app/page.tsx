"use client";
import { useState } from "react";

export default function Home() {
  const [domain, setDomain] = useState("");
  const [port, setPort] = useState("");
  const [anyrun, setAnyrun] = useState("");
  const [output, setOutput] = useState("");

  const generateReport = () => {
    const report = `
Subject: DNS Abuse Report – Malware C2 Activity

Dear Anti-Abuse Team,

We have identified that the domain:

${domain}:${port}

is actively being used as a Command and Control (C2) server associated with malware activity.

This constitutes clear DNS abuse under ICANN policies, as the domain is facilitating malicious infrastructure operations.

Evidence:
- ANY.RUN Sandbox Analysis
- Verdict: Malicious activity
- C2 Endpoint: ${domain}:${port}
- Report: ${anyrun}

We kindly request immediate investigation and suspension of this domain to prevent further abuse.

Best regards,
ThreatVector Intelligence
    `;

    setOutput(report);
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">
        Malware C2 Report Generator
      </h1>

      <div className="space-y-4 max-w-xl">
        <input
          placeholder="Domain (e.g. dxn.uk.com)"
          className="w-full p-3 bg-gray-900"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />

        <input
          placeholder="Port (e.g. 4782)"
          className="w-full p-3 bg-gray-900"
          value={port}
          onChange={(e) => setPort(e.target.value)}
        />

        <input
          placeholder="ANY.RUN link"
          className="w-full p-3 bg-gray-900"
          value={anyrun}
          onChange={(e) => setAnyrun(e.target.value)}
        />

        <button
          onClick={generateReport}
          className="bg-blue-500 px-5 py-2 rounded"
        >
          Generate Report
        </button>

        <textarea
          className="w-full h-64 p-3 bg-gray-800 mt-4"
          value={output}
          readOnly
        />
      </div>
    </main>
  );
}