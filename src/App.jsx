import Presentation from "./components/Presentation";
import PdfSummarizer from "./components/PdfSummarizer";
import StudyPlanner from "./components/StudyPlanner";
import ChatBox from "./components/ChatBox";
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-purple-400">
          StudyForge AI
        </h1>

        <div className="flex gap-6 text-slate-300">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
        </div>

      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-32 px-6">

        <h1 className="text-7xl font-bold leading-tight max-w-4xl">
          Your AI Powered
          <span className="text-purple-400"> Study Companion</span>
        </h1>

        <p className="text-slate-400 text-xl mt-6 max-w-2xl">
          Learn coding, generate study plans, summarize notes,
          and boost productivity using AI.
        </p>

        <div className="flex gap-4 mt-10">

          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl text-lg font-semibold">
            Get Started
          </button>

          <button className="border border-slate-700 hover:border-purple-500 px-8 py-4 rounded-2xl text-lg">
            Learn More
          </button>

        </div>

      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-10 mt-32 pb-20">

        <div className="bg-slate-800 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">
            AI Chat
          </h2>

          <p className="text-slate-300">
            Ask coding doubts and study questions instantly.
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">
            Study Planner
          </h2>

          <p className="text-slate-300">
            Generate personalized schedules using AI.
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">
            Code Explainer
          </h2>

          <p className="text-slate-300">
            Paste code and understand it in simple English.
          </p>
        </div>

      </div>
<ChatBox />
<StudyPlanner />
<PdfSummarizer />
<Presentation />
    </div>
  )
}

export default App