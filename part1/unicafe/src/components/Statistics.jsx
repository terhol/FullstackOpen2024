// eslint-disable-next-line react/prop-types
export const Statistics = ({ goodFeedback, neutralFeedback, badFeedback }) => {
  return (
    <div>
      <h1>Statistics:</h1>
      <div>Good: {goodFeedback}</div>
      <div>Neutral: {neutralFeedback}</div>
      <div>Bad: {badFeedback} </div>
    </div>
  );
};
