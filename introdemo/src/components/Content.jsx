import Part from './Part';

function Content({ parts = [] }) {
  return (
    <>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
}

export default Content;
