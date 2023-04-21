

const Lobby = ({ setStage, generateQuiz }) => {

    const startQuiz = (evt) => {
        evt.preventDefault();
        setStage(1); // set stage to 1 to start the quiz
        generateQuiz();
    };

  return (
        <div className="lobby">
            <h2>Start game!</h2>
            <button onClick={(e) => {startQuiz(e)} }> 
                Europe
            </button>
        </div>
    )
}

export default Lobby
