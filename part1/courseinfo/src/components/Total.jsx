/* eslint-disable react/prop-types */
export const Total = ({ parts }) => {
  const exerciseNumbers = parts.map((part) => part.exercises);
  const numberOfExercises = exerciseNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return <div>Number of exercises: {numberOfExercises}</div>;
};
