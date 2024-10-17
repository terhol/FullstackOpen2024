/* eslint-disable react/prop-types */
import { StatisticLine } from "./StatisticLine";

export const Statistics = ({ goodFeedback, neutralFeedback, badFeedback }) => {
  const all = goodFeedback + neutralFeedback + badFeedback;
  const average = all > 0 ? (goodFeedback - badFeedback) / all : 0;
  const positive = all > 0 ? goodFeedback / all : 0;
  return all === 0 ? (
    <div>
      <h1>Statistics</h1>No feedback given.
    </div>
  ) : (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="Good" value={goodFeedback} />
      <StatisticLine text="Neutral" value={neutralFeedback} />
      <StatisticLine text="Bad" value={badFeedback} />
      <StatisticLine text="All" value={all} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={positive + "%"} />
    </div>
  );
};
