import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Answer (props){

    const superId = useParams()


    const [id, setId] = useState(null);
    const [title, setTitle] = useState("");
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0);
    console.log(typeof questions[currentQuestion].question)
    
    // let quizList = [];
    useEffect(() => {
        getAllQuizes();
    }, []);
    // let navigate = useNavigate();

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
            setId(myQuiz.id);
            setTitle(myQuiz.title);
            setQuestions(myQuiz.questions);  
        })
        .catch(error => console.error(`Error: ${error}`));
   }


 return(
     <div>
    <NavBar />
    <div className='answer-box'>
    {false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
                        {
                        questions[currentQuestion].answers.map((answerOption) => (
							<button >{answerOption}</button>
						))}
					</div>
				</>
			)}
		</div>
     </div>
 )   
}