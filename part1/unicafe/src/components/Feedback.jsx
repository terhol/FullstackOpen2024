/* eslint-disable react/prop-types */
import { Button } from "./Button";

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
      <Button onClick={handleClickGood} text="Good" />
      <Button onClick={handleClickNeutral} text="Neutral" />
      <Button onClick={handleClickBad} text="Bad" />
    </div>
  );
};
