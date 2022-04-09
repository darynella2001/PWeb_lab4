import React, {useState, useEffect} from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Answer from "./Answer";
import Start from "./Start";
import End from "./End";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Quiz =  () => {
    // console.log("here",props)
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [time, setTime] = useState(0);
      
    const [questions, setQuestions] = useState([])
    // let quizList = [];
    useEffect(() => {
        getAllQuizes();
    }, []);
    const superId = useParams()
    let navigate = useNavigate();

   const getAllQuizes = async () =>{
        await axios.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/'+superId.id,
        {
            headers:{
                    "X-Access-Token": '00e42cabcc70501b0941ae177326c2c7407e96d701a97a82d97577d4db27e6de',
                }
        })
        .then((response) => {
            // console.log(response.data)
            const myQuiz = response.data;
            setQuestions(myQuiz.questions); 
            console.log(questions) 
        })
        .catch(error => console.error(`Error: ${error}`));
   }

   function startQuiz(){
    console.log(superId)
    let path = '/quizes/'+ superId.id + '/' + questions[0].id
    console.log(questions)
    navigate(path);
    // <Answer />
   }

   const quizStartHandler = () => {
    setStep(2);
  }


 
  const resetClickHandler = () => {
    // setActiveQuestion(0);
    // setAnswers([]);
    // setStep(2);
    // setTime(0);
    // interval = setInterval(() => {
    //   setTime(prevTime => prevTime + 1);
    // }, 1000);
  }

return(
    <div>
        <NavBar/>
        <div className="Quiz">
        {/* <h2>{title}</h2>
        {
            // questions.map(q =>  answerHandler())
        }
        <button onClick={() => startQuiz()}> Start Quiz </button>
        {
            console.log(questions)
        } */}

        {step === 1 && <Start onQuizStart = {quizStartHandler}/>}
        
       
        {step == 2 && <Answer
        data={questions[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={questions.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        />}
        {
            step === 3 && 
            <End 
            results = {answers}
            data = {questions}
            />
            
            //<End
            // results={answers}
            // data={questions[activeQuestion]}
            // onReset={resetClickHandler}
            // onAnswersCheck={()=>{}}
            // time={time}
            // />
            // console.log(questions[activeQuestion])
            }
            {/* console.log("userId",userId);
            console.log(answers.map(a=>console.log("Results:", a.a)))} */}
        {/* } */}
        </div>
        </div>
)
}
export default Quiz;
