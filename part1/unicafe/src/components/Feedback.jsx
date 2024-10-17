/* eslint-disable react/prop-types */

export const Feedback = ({
  goodFeedback,
  setGoodFeedback,
  neutralFeedback,
  setNeutralFeedback,
  badFeedback,
  setBadFeedback,
}) => {
  const handleClickGood = () => {
    setGoodFeedback(goodFeedback + 1);
  };
  const handleClickNeutral = () => {
    setNeutralFeedback(neutralFeedback + 1);
  };
  const handleClickBad = () => {
    setBadFeedback(badFeedback + 1);
  };
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
    </div>
  );
};
