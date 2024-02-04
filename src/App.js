import { useState } from "react";
import "./index.scss";
import questions from "./questions.json";

import { Result } from "./components/Result.jsx";
import { Game } from "./components/game.jsx";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];
  const onClickVariant = (index) => {
    // console.log(step, index);
    setStep(step + 1);
    if(index===question.correct){setCorrect(correct+1)}
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct}/>
      )}
    </div>
  );
}

export default App;
