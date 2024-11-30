const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

export default function Statistics({ good, neutral, bad }) {
  const allFeedBack = good + neutral + bad;
  const averageAll = allFeedBack > 0 ? (good - bad) / allFeedBack : 0;
  const percentPositive = allFeedBack > 0 ? (good / allFeedBack) * 100 : 0;

  return (
    <div>
      <h1>Statistics</h1>
      {allFeedBack > 0 ? (
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All feedback" value={allFeedBack} />
            <StatisticLine text="Average" value={averageAll.toFixed(2)} />
            <StatisticLine
              text="Positive percent"
              value={`${percentPositive.toFixed(2)}%`}
            />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
}
