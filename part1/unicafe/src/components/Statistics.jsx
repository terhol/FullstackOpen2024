// eslint-disable-next-line react/prop-types
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
      <div>Good: {goodFeedback}</div>
      <div>Neutral: {neutralFeedback}</div>
      <div>Bad: {badFeedback} </div>
      <div>All: {all}</div>
      <div>Average: {average}</div>
      <div>Positive: {positive}%</div>
    </div>
  );
};
