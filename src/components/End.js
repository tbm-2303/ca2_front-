import { useParams, useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

const End = ({ quiz }) => {
    const navigate = useNavigate()

    return (
        <div className="">
            {(() => {
                if (quiz.totalPoints !== 0) {
                    return (
                        <div className="end">
                            <h1>quiz completed</h1>
                            <p>score:</p>
                            <p className="final-result">{quiz.totalPoints}</p>
                            <p>correct answers:</p>
                            <p className="final-result">{quiz.totalCorrect}</p>
                            <p>wrong answers:</p>
                            <p className="final-result">{quiz.totalIncorrect}</p>
                            <button onClick={navigate('/')}> </button> {/* does this work. dunno yet. if not then just make <Link to='/'> go back </Link>   */}
                            
                        </div>
                    );
                } 
                else {
                    return (
                        <div className="end">
                            <h1>Calculating...</h1>
                        </div>
                    );
                }
            })()}
        </div>
    )
}

export default End
