import { useState } from "react";

function PdfSummarizer() {

  const [fileName, setFileName] = useState("");
  const [summary, setSummary] = useState("");

  const handleFile = (e) => {

    const file = e.target.files[0];

    if (file) {

      setFileName(file.name);

      setSummary(
        "AI Summary:\n\nThis document discusses important educational concepts, coding practices, and key learning strategies for students."
      );
    }
  };

  return (

    <div className="max-w-4xl mx-auto px-6 pb-20">

      <div className="bg-slate-800 p-8 rounded-3xl">

        <h1 className="text-3xl font-bold text-purple-400 mb-6">
          PDF Notes Summarizer
        </h1>

        <input
          type="file"
          accept=".pdf"
          onChange={handleFile}
          className="text-white"
        />

        <div className="mt-4 text-slate-400">
          {fileName}
        </div>

        <div className="mt-8 bg-slate-900 p-6 rounded-2xl whitespace-pre-wrap text-slate-300">
          {summary}
        </div>

      </div>

    </div>

  );
}

export default PdfSummarizer;