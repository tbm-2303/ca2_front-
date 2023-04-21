import { CountdownCircleTimer } from "react-countdown-circle-timer";


const Timer = ({  answerBtn, setTime }) => {
  return (
    
    <div className="timer">
            <CountdownCircleTimer 
                isPlaying={true} 
                duration={10} 
                strokeWidth={20} 
                strokeLinecap="square" 
                size={150} 
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]} 
                colorsTime={[7, 5, 2, 0]}
                onUpdate={(remainingTime) => setTime(remainingTime)}
                onComplete={(e) => answerBtn(null, "timeout", 0)}
            >
            {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
  </div>
  )
}

export default Timer
