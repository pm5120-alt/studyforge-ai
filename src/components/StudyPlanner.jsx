import { useState } from "react";

function StudyPlanner() {

  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState("");

  const generatePlan = () => {

    if (!goal) {
      setPlan("Please enter a goal.");
      return;
    }

    setPlan(
`STUDY PLAN FOR ${goal}

Monday:
- Learn concepts
- Watch tutorials

Tuesday:
- Practice problems

Wednesday:
- Revision

Thursday:
- Mock tests

Friday:
- Project practice

Saturday:
- Weak topic improvement

Sunday:
- Full revision`
    );
  };

  return (

    <div className="max-w-4xl mx-auto px-6 pb-20">

      <div className="bg-slate-800 p-8 rounded-3xl">

        <h1 className="text-3xl font-bold text-purple-400 mb-6">
          Study Planner
        </h1>

        <input
          type="text"
          placeholder="Example: Learn React in 30 days"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full bg-slate-900 text-white p-4 rounded-2xl outline-none"
        />

        <button
          onClick={generatePlan}
          className="mt-5 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl"
        >
          Generate Plan
        </button>

        <div className="mt-8 bg-slate-900 p-6 rounded-2xl whitespace-pre-wrap text-slate-300">
          {plan}
        </div>

      </div>

    </div>

  );
}

export default StudyPlanner;