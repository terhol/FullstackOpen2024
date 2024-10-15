/* eslint-disable react/jsx-key */

import { Part } from "./Part";

/* eslint-disable react/prop-types */
export const Content = ({ parts }) => {
  const part1 = parts[0];
  const part2 = parts[1];
  const part3 = parts[2];
  return (
    <div>
      <Part name={part1.name} numberOfExercises={part1.exercises} />
      <Part name={part2.name} numberOfExercises={part2.exercises} />
      <Part name={part3.name} numberOfExercises={part3.exercises} />
      <br />
    </div>
  );
};
