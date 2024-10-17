import { Feedback } from "./components/Feedback";
import { Statistics } from "./components/Statistics";
import { useState } from "react";

export const App = () => {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);
  return (
    <div>
      <Feedback
        goodFeedback={goodFeedback}
        setGoodFeedback={setGoodFeedback}
        neutralFeedback={neutralFeedback}
        setNeutralFeedback={setNeutralFeedback}
        badFeedback={badFeedback}
        setBadFeedback={setBadFeedback}
      />
      <Statistics
        goodFeedback={goodFeedback}
        neutralFeedback={neutralFeedback}
        badFeedback={badFeedback}
      />
    </div>
  );
};
