/* eslint-disable react/jsx-key */

import { Part } from "./Part";

/* eslint-disable react/prop-types */
export const Content = ({ allParts }) => {
  const part1 = allParts[0];
  const part2 = allParts[1];
  const part3 = allParts[2];
  return (
    <div>
      <Part name={part1.name} numberOfExercises={part1.exercises} />
      <Part name={part2.name} numberOfExercises={part2.exercises} />
      <Part name={part3.name} numberOfExercises={part3.exercises} />
      <br />
    </div>
  );
};
