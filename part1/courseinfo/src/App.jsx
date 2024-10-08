import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Total } from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const allParts = [
    { name: part1, parts: exercises1 },
    { name: part2, parts: exercises2 },
    { name: part3, parts: exercises3 },
  ];

  return (
    <div>
      <Header courseName={course} />
      <Content allParts={allParts} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
