/* eslint-disable react/prop-types */
export const Total = ({ parts }) => {
  let numberOfExercises = 0;
  parts.forEach((part) => (numberOfExercises += part.exercises));

  return <div>Number of exercises: {numberOfExercises}</div>;
};
