import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

const App = () => {
  const course = 'Half Stack application development';

  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ];

  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total
        num={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </div>
  );
};

export default App;
