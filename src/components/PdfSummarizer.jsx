import { useState } from "react";

function PdfSummarizer() {
  const [fileName, setFileName] = useState("");
  const [summary, setSummary] = useState("");

  const handleFile = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    setFileName(file.name);
    setSummary(
      "Sample summary:\n\nThis document contains useful study notes and learning concepts."
    );
  };

  return (
    <section className="mx-auto max-w-4xl px-6 pb-20">
      <div className="rounded-3xl bg-slate-800 p-8">
        <h2 className="mb-6 text-3xl font-bold text-purple-400">
          PDF Notes Summarizer
        </h2>

        <input
          type="file"
          accept=".pdf"
          onChange={handleFile}
          className="text-white"
        />

        {fileName && <p className="mt-4 text-slate-400">{fileName}</p>}

        <div className="mt-8 whitespace-pre-wrap rounded-2xl bg-slate-900 p-6 text-slate-300">
          {summary}
        </div>
      </div>
    </section>
  );
}

export default PdfSummarizer;