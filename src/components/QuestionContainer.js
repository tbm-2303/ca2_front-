

const QuestionContainer = ({ stage, question, answerBtn, time }) => {


  return (
      <div className="question-Container">
          <h2 className="question-title">{stage}. Which country has this flag?</h2>
          <img className="flag"
              src={question.flagSVG}
              alt="flag"
          />

          <div className="answers">
            
              <button className="answer1"
                  onClick={(e) => {
                      answerBtn(e, question.answer1, time);
                  }}
              >
              {question.answer1}
              </button>

              <button className="answer2"
                  onClick={(e) => {
                      answerBtn(e, question.answer2, time);
                  }}
              >
              {question.answer2}
              </button>

              <button className="answer3"
                  onClick={(e) => {
                      answerBtn(e, question.answer3, time);
                  }}
              >
              {question.answer3}
              </button>

              <button className="answer4"
                  onClick={(e) => {
                      answerBtn(e, question.answer4, time);
                  }}
              >
              {question.answer4}
              </button>

        </div>
    </div>
  )
}

export default QuestionContainer
