/* eslint-disable react/prop-types */
export const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}:</td> <td>{value}</td>
    </tr>
  );
};
