/* eslint-disable react/prop-types */
export const Total = ({ exercises }) => {
  let numberOfExercises = 0;
  exercises.forEach((exercises) => (numberOfExercises += exercises));

  return <div>Number of exercises: {numberOfExercises}</div>;
};
