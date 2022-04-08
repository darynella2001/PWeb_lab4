import React, {useState, useEffect} from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Answer from "./Answer";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Quiz () {
    // console.log("here",props)
    const [id, setId] = useState(null);
    const [title, setTitle] = useState("");
    const [questions, setQuestions] = useState([])
    // let quizList = [];
    useEffect(() => {
        getAllQuizes();
    }, []);
    const superId = useParams()
    let navigate = useNavigate();

   const getAllQuizes = () =>{
        axios.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/'+superId.id,
        {headers:{
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

   function startQuiz(){
    console.log(superId)
    let path = '/quizes/'+ superId.id + '/' + questions[0].id
    console.log(path)
    navigate(path);
   }
return(
    <div>
        <NavBar/>

        <h2>{title}</h2>
        {
            // questions.map(q =>  answerHandler())
        }
        <button onClick={() => startQuiz()}> Start Quiz </button>
        {
            console.log(questions)
        }
        </div>
)
}
export default Quiz;
