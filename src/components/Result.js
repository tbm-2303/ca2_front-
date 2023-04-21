

const Result = ({ points, totalPoints, answerCorrect, continueBtn }) => {
  return (
    <div className="result">
        {answerCorrect ? ( <div className="correct"> <h1>Correct!</h1> </div>) : (<div className="wrong"> <h1>Wrong!</h1></div>)}
        <h3 className="you-gained">You gained {points} points</h3>
        <h3 className="total-points">Total score: {totalPoints}</h3>

        <button className="continue-btn"
            onClick={(e) => {
                continueBtn(e);
            }}
        > 
            Continue
        </button>
    </div>
  )
}

export default Result
