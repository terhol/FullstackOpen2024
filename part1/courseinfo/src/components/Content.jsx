/* eslint-disable react/jsx-key */
import { Part } from "./Part";
/* eslint-disable react/prop-types */
export const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part
          key={part.id}
          name={part.name}
          numberOfExercises={part.exercises}
        />
      ))}
      <br />
    </div>
  );
};
