import { useState } from "react";

function ChatBox() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) {
      setResponse("Please enter a question.");
      return;
    }

    const question = message.toLowerCase();

    if (question.includes("ai")) {
      setResponse("Artificial Intelligence is technology that lets machines do tasks that normally need human intelligence.");
    } else if (question.includes("recursion")) {
      setResponse("Recursion is when a function calls itself until a stopping condition is reached.");
    } else if (question.includes("study plan")) {
      setResponse(
        "Monday: DSA\nTuesday: Web Development\nWednesday: AI Basics\nThursday: Revision\nFriday: Projects"
      );
    } else if (question.includes("javascript")) {
      setResponse("JavaScript is used to add logic and interaction to websites.");
    } else if (question.includes("react")) {
      setResponse("React is a JavaScript library used to build user interfaces.");
    } else {
      setResponse("I do not have a specific answer for that yet. Try asking about AI, React, JavaScript or recursion.");
    }
  };

  return (
    <section className="mx-auto max-w-4xl px-6 pb-20">
      <div className="rounded-3xl bg-slate-800 p-8">
        <h2 className="mb-6 text-3xl font-bold text-purple-400">AI Assistant</h2>

        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Ask a study question..."
          className="h-40 w-full rounded-2xl bg-slate-900 p-4 text-white outline-none"
        />

        <button
          onClick={handleSubmit}
          className="mt-5 rounded-2xl bg-purple-600 px-6 py-3 hover:bg-purple-700"
        >
          Ask
        </button>

        <div className="mt-8 rounded-2xl bg-slate-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Response</h3>
          <p className="whitespace-pre-wrap text-slate-300">{response}</p>
        </div>
      </div>
    </section>
  );
}

export default ChatBox;