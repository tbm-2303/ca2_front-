import React, { useState } from 'react';
import QuestionContainer from './QuestionContainer';
import Timer from './Timer';

const Question = ({ stage, question, answerBtn }) => {
    const [time, setTime] = useState(0);

  return (
    <div className="question">
        <div className="questionContainer">
            <QuestionContainer
                stage={stage}
                question={question}
                answerBtn={answerBtn}
                time={time}
            />
        </div>
        <div className="timer">
            <Timer answerBtn={answerBtn} setTime={setTime} />
        </div>
    </div>
  )
}

export default Question
