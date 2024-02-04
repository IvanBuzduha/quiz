import "../index.scss";
import questions from "../questions.json";
import trophy from './trophy.png';
export const Result=({correct}) =>{
    return (
      <div className="result">
        {/* <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" /> */}
        <img src={trophy} alt="win"/>
        <h2>You guessed {correct} answers from {questions.length} </h2>
       <a href="/"> <button>Try again</button></a>
      </div>
    );
  }