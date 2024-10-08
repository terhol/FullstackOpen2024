/* eslint-disable react/jsx-key */

import { Part } from "./Part";

/* eslint-disable react/prop-types */
export const Content = ({ allParts }) => {
  const part1 = allParts[0];
  const part2 = allParts[1];
  const part3 = allParts[2];
  return (
    <div>
      <p>
        <Part name={part1.name} numberOfExercises={part1.parts} />
        <Part name={part2.name} numberOfExercises={part2.parts} />
        <Part name={part3.name} numberOfExercises={part3.parts} />
      </p>
    </div>
  );
};
