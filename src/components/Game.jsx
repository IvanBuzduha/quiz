import "../index.scss";
import questions from "../questions.json";
export const Game = ({ question, onClickVariant, step }) => {
  const percentage = Math.round((step / questions.length) * 100);
//   console.log("percentage", percentage);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner" />
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};
