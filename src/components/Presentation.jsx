function Presentation() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 pb-20">
      <div className="rounded-3xl bg-slate-800 p-10">
        <h2 className="mb-8 text-4xl font-bold text-purple-400">
          Why StudyForge AI?
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="mb-4 text-2xl font-bold">Problem</h3>
            <p className="text-slate-300">
              Students often struggle with planning, coding doubts and
              handling study notes.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="mb-4 text-2xl font-bold">Solution</h3>
            <p className="text-slate-300">
              StudyForge puts a few useful study tools together in one place.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="mb-4 text-2xl font-bold">Features</h3>
            <p className="text-slate-300">
              Chat, study planning, PDF notes and simple learning tools.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="mb-4 text-2xl font-bold">Future Ideas</h3>
            <p className="text-slate-300">
              Real AI responses, quizzes, voice support and progress tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;