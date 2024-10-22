/* eslint-disable react/prop-types */
import { Content } from "./Content";
import { Header } from "./Header";

export const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};
