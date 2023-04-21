import React, { useState } from "react";
import facade from "../apiFacade";
import End from "../components/End";
import Lobby from "../components/Lobby";
import Result from "../components/Result";
import Question from "../components/Question";

const Quiz = ({username, loggedIn}) => {
    const questionAmount = 10;
	const [showResult, setShowResult] = useState(false);
	const [showEnd, setShowEnd] = useState(false);
	const [answerCorrect, setAnswerCorrect] = useState(false);
	const [stage, setStage] = useState(0);
    const [totalPoints, setTotalPoints] = useState(0);
	const [points, setPoints] = useState(0);
    const [quiz, setQuiz] = useState({
		totalPoints: 0,
		totalCorrect: 0,
		totalIncorrect: 0,
		questions: [
			{
				correctCountryId: 0,
				flagSVG: "",
				answer1: "",
				answer2: "",
				answer3: "",
				answer4: "",
				points: 0,
			},
		],
		username: "",
	});


    const generateQuiz = () => {
		facade.getQuiz(setQuiz, username);
	};
    
    const answerBtn = (evt, answerChoice, time) => { // runs if question is answered or if Time hits 0.
		if (evt != null) {
			evt.preventDefault();
		}
		facade.getResult(setPoints, totalPoints, setTotalPoints, quiz.questions[stage - 1].correctCountryId, answerChoice, time, setShowResult, setAnswerCorrect, updateQuestion);
	};

	const updateQuestion = (qPoints) => { // updates the points of the question in the quiz object after it has been answered.
		let updatedQuiz = { ...quiz };
		updatedQuiz.questions[stage - 1].points = qPoints;
		setQuiz(updatedQuiz);
	};

	const continueBtn = (evt) => {
		evt.preventDefault();
		setPoints(0);// resets points before the new question is shown
		
		if (stage + 1 > questionAmount) {
			setShowEnd(true);
			facade.endQuiz(quiz, setQuiz);
		} else {
			setShowResult(false);
			setStage(stage + 1);
		}
		
	};

	


  return (
        <>
		<div className="Quiz">
           	{(() => {
				if (!loggedIn) {
					return (
						<div>
							<h3>You must be logged in to view this page</h3>
						</div>
					);
				} 

				else {

					if (showEnd) { 
						return <End quiz={quiz} />;
					} 
					
					else if (stage === 0) { 
						return <Lobby setStage={setStage} generateQuiz={generateQuiz} />; 
					} 

					else if (showResult) { 
						return <Result stage={stage} points={points} totalPoints={totalPoints} answerCorrect={answerCorrect} continueBtn={continueBtn} />;
					} 

					else if (stage >= 1 && stage <= questionAmount) { // shows the question based on the stage number
						return <Question stage={stage} question={quiz.questions[stage - 1]} answerBtn={answerBtn} />;
					} 
					
					else {
						<div>
							<h3>An error has occurred</h3>
						</div>;
					}
				}
			})()
			}
		</div>
        </>
		
    )
}

export default Quiz
