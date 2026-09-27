import { useState } from "react";

function StudyPlanner() {
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState("");

  const generatePlan = () => {
    if (!goal.trim()) {
      setPlan("Please enter a goal.");
      return;
    }

    const newPlan =
      "STUDY PLAN FOR " + goal +
      "\n\nMonday:\n- Learn concepts\n- Watch tutorials" +
      "\n\nTuesday:\n- Practice problems" +
      "\n\nWednesday:\n- Revision" +
      "\n\nThursday:\n- Mock tests" +
      "\n\nFriday:\n- Project practice" +
      "\n\nSaturday:\n- Work on weak topics" +
      "\n\nSunday:\n- Full revision";

    setPlan(newPlan);
  };

  return (
    <section className="mx-auto max-w-4xl px-6 pb-20">
      <div className="rounded-3xl bg-slate-800 p-8">
        <h2 className="mb-6 text-3xl font-bold text-purple-400">
          Study Planner
        </h2>

        <input
          type="text"
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
          placeholder="Example: Learn React in 30 days"
          className="w-full rounded-2xl bg-slate-900 p-4 text-white outline-none"
        />

        <button
          onClick={generatePlan}
          className="mt-5 rounded-2xl bg-purple-600 px-6 py-3 hover:bg-purple-700"
        >
          Generate Plan
        </button>

        <div className="mt-8 whitespace-pre-wrap rounded-2xl bg-slate-900 p-6 text-slate-300">
          {plan}
        </div>
      </div>
    </section>
  );
}

export default StudyPlanner;