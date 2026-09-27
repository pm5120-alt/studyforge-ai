import ChatBox from "./components/ChatBox";
import PdfSummarizer from "./components/PdfSummarizer";
import Presentation from "./components/Presentation";
import StudyPlanner from "./components/StudyPlanner";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <nav className="flex items-center justify-between border-b border-slate-800 px-10 py-6">
        <h1 className="text-3xl font-bold text-purple-400">StudyForge AI</h1>

        <div className="flex gap-6 text-slate-300">
          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="mt-24 flex flex-col items-center px-6 text-center">
        <h1 className="max-w-4xl text-6xl font-bold leading-tight">
          Your AI Powered
          <span className="text-purple-400"> Study Companion</span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-slate-400">
          Plan your studies, ask questions, summarize notes and keep your
          learning in one place.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#features" className="rounded-2xl bg-purple-600 px-8 py-4 font-semibold hover:bg-purple-700">
            Get Started
          </a>
          <a href="#about" className="rounded-2xl border border-slate-700 px-8 py-4 hover:border-purple-500">
            Learn More
          </a>
        </div>
      </section>

      <section id="features" className="mt-24 grid gap-8 px-10 pb-16 md:grid-cols-3">
        <div className="rounded-3xl bg-slate-800 p-8">
          <h2 className="mb-4 text-2xl font-bold text-purple-400">AI Chat</h2>
          <p className="text-slate-300">
            Ask simple coding and study questions and get an instant reply.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-800 p-8">
          <h2 className="mb-4 text-2xl font-bold text-purple-400">Study Planner</h2>
          <p className="text-slate-300">
            Enter a goal and get a basic weekly study plan.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-800 p-8">
          <h2 className="mb-4 text-2xl font-bold text-purple-400">Notes Summarizer</h2>
          <p className="text-slate-300">
            Upload a PDF and view the sample summary section.
          </p>
        </div>
      </section>

      <ChatBox />
      <StudyPlanner />
      <PdfSummarizer />
      <Presentation />
    </div>
  );
}

export default App;