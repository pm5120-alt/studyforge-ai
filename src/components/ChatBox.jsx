import { useState } from "react";

function ChatBox() {

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {

    if (!message) {
      setResponse("Please enter a question.");
      return;
    }

    const lower = message.toLowerCase();

    if (lower.includes("ai")) {

      setResponse(
        "Artificial Intelligence (AI) is technology that enables machines to simulate human intelligence like learning, reasoning, and problem-solving."
      );

    } else if (lower.includes("recursion")) {

      setResponse(
        "Recursion is a programming technique where a function calls itself repeatedly until a condition is met."
      );

    } else if (lower.includes("study plan")) {

      setResponse(
        "Study Plan:\n\nMonday: DSA\nTuesday: Web Development\nWednesday: AI Basics\nThursday: Revision\nFriday: Projects"
      );

    } else if (lower.includes("javascript")) {

      setResponse(
        "JavaScript is a programming language used to make websites interactive and dynamic."
      );

    } else if (lower.includes("react")) {

      setResponse(
        "React is a JavaScript library used for building fast and interactive user interfaces."
      );

    } else {

      setResponse(
        "StudyForge AI is processing your request intelligently."
      );

    }
  };

  return (

    <div className="max-w-4xl mx-auto px-6 pb-20">

      <div className="bg-slate-800 p-8 rounded-3xl">

        <h1 className="text-3xl font-bold text-purple-400 mb-6">
          AI Assistant
        </h1>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything..."
          className="w-full h-40 bg-slate-900 text-white p-4 rounded-2xl outline-none"
        />

        <button
          onClick={handleSubmit}
          className="mt-5 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl"
        >
          Ask AI
        </button>

        <div className="mt-8 bg-slate-900 p-6 rounded-2xl">

          <h2 className="text-xl font-bold mb-4">
            Response
          </h2>

          <p className="text-slate-300 whitespace-pre-wrap">
            {response}
          </p>

        </div>

      </div>

    </div>

  );
}

export default ChatBox;