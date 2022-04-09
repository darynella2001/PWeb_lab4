// import React, {useState, useEffect} from "react";
// import NavBar from "./NavBar";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Answer (){

//     const superId = useParams()


//     const [id, setId] = useState(null);
//     const [title, setTitle] = useState("");
//     const [questions, setQuestions] = useState([])
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [showScore, setShowScore] = useState(false);
// 	const [score, setScore] = useState(0);
//     // console.log(typeof questions[currentQuestion].question)
    
//     // let quizList = [];
//     useEffect(() => {
//         getAllQuizes();
//     }, []);
//     // let navigate = useNavigate();

//    const getAllQuizes =  () =>{
//         axios.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/'+superId.id,
//         {
//             headers:{
//                     "X-Access-Token": '00e42cabcc70501b0941ae177326c2c7407e96d701a97a82d97577d4db27e6de',
//                 }
//         })
//         .then((response) => {
//             // console.log(response.data)
//             const myQuiz = response.data;
//             setId(myQuiz.id);
//             setTitle(myQuiz.title);
//             setQuestions(myQuiz.questions);  
//         })
//         .catch(error => console.error(`Error: ${error}`));
//    }
//  return(
//      <div>
//     <NavBar />
//     <div className='answer-box'>
//     {false ? (
// 				<div className='score-section'>You scored 1 out of {questions.length}</div>
// 			) : (
// 				<>
// 					<div className='question-section'>
// 						<div className='question-count'>
// 							<span>Question 1</span>/{questions.length}
// 						</div>
// 						<div className='question-text'>{questions[currentQuestion].question}</div>
//                         {/* <div className='question-text'>dfghj</div> */}

// 					</div>
// 					<div className='answer-section'>
//                         {
//                         questions[currentQuestion].answers.map((answerOption, i) => (
// 							<button >{answerOption}</button>
// 						))}
// 					</div>
// 				</>
// 			)}
// 		</div>
//      </div>
//  )   
// }
import React, {useState, useEffect, useRef} from "react";


const Answer = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const [questionId, setQuestionId] = useState(0);
    const [answerText, setAnswerText] = useState("");
    const radioWrapper = useRef();


useEffect( () => {
    const findCheckedInput = radioWrapper.current.querySelector('input:checked');
    if (findCheckedInput){
        findCheckedInput.checked = false;
    }
}, [data]);

    const changeHandler = (e) => {
        setSelected(e.target.value);
        if (error){
            setError('');
        }
    }

    const nextClickHandler = (e) => {
        if(selected === ''){
            return setError('Please select one option!');
        }
        onAnswerUpdate(prevState => [... prevState, {q:data.question, a: selected, id:data.id}]);
        setSelected('');
       
        console.log(selected)

        // console.log(setAnswerText)

        if (activeQuestion < numberOfQuestions - 1){
            onSetActiveQuestion(activeQuestion + 1);
        } else {
            onSetStep(3);
        }
    }
    
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 className="mb-5">{data.question}</h2>
                    <div className="control" ref={radioWrapper}>
                        {data.answers.map((choice, i) => (
                        
                        <label className="radio has-background-light" key={i}>
                            <input type="radio" name="answer" value={choice} onChange={changeHandler}/>
                            {choice}
                        </label>
                        ))}           
                    </div>
                    {error && <div className="text-danger">{error}</div>}
                    <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
                </div>
            </div>
        </div>
    )
}
export default Answer;