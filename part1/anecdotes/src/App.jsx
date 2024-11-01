import { useState } from "react";

export const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Uint8Array(8));
  const mostVotes = Math.max(...points);
  const mostVotedAnecdote = points.findIndex((value) => value === mostVotes);

  const handleNextClick = () => {
    let newRandomNumber = Math.floor(Math.random() * 8);
    setSelected(newRandomNumber);
  };
  const handleVoteClick = () => {
    const updatedPoints = [...points];
    updatedPoints[selected] += 1;
    setPoints(updatedPoints);
    console.log(selected);
    console.log(updatedPoints);
  };

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <br />
      Anecdote has {points[selected]} votes.
      <br />
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleNextClick}>Next Anecdote</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVotedAnecdote]}
      <br />
      Anecdote has {points[mostVotedAnecdote]} votes.
    </div>
  );
};
