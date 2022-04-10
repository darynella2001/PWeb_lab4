import React, {useState} from "react";
import NavBar from "../NavBar";
import Question from "../Question";
import CreateQuiz from "../CreateQuiz";

const AddQuiz = () => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [questionsNumber, setQuestionsNumber] = useState(1);
  let number;

  const quizSetHandler = () => {
    if(questionsNumber >= 1){
      console.log("number of questions = ", questionsNumber)
      setStep(2);}
      else {
        setError('Please, select a valid number greater than zero!');
      }

  }

  return (
    <div>
      <NavBar/>
      
      {step === 1 && 
      <div className="Quiz">
        <div className="card">
        <div className="card-body">
          <div>
            <h1 className="card-title">Insert the number of questions:</h1>
                <input  type="number" value={number} min="1"  start="1" onChange={(e)=>setQuestionsNumber(e.target.value)}/>
                {console.log(questionsNumber)}
                <br/>
                {error && <div className="text-danger">{error}</div>}
                <br/>
                <button className="btn btn-dark" onClick={quizSetHandler}>Start</button>
          </div>
        </div>
        </div>
      </div>
      }

      {step === 2 && <CreateQuiz numberOfQuestions={questionsNumber} onSetStep={setStep}/> }
      {step === 3 && <Question/>}
    
    </div>
  )

}
  //   // React Hooks declarations
  // const [questions, setQuestions] = useState([])
  // const [title, setTitle] = useState("")
  // const [query, setQuery] = useState("")
  // const [answers, setAnswers] = useState([])
  // const [ans, setAns] = useState("")

  // const handleClick = () => { // Save search term state to React Hooks
  
  //   // Add the search term to the list onClick of Search button
  //   // (Actually searching would require an API call here)

  //   // Save search term state to React Hooks
  //   setQuestions(questions => [...questions, query])
  //   //setQuestions(questions => questions.concat(query))
  // }

  // const updateQuery = ({ target }) => {
  //   // Update query onKeyPress of input box
  //   setQuery(target.value)
  // }

  // const keyPressed = ({ key }) => {
  //   // Capture search on Enter key
  //   if (key === "Enter") {
  //     handleClick()
  //   }
  // }

  // const submitHandler = e => {
  //   // Prevent form submission on Enter key
  //   e.preventDefault()
  // }

  // const Search = ({ query }) => <li>{query}</li>
  // const Answers = ({ ans }) => <li>{ans}</li>
  // return (
  //   <div>
  //       <NavBar/>
  //     <h1>Create your own quiz with 4 answers</h1>
      
  //     <h2>Questions</h2>
  //     <ul>
  //       {questions.map((query, i) => (
  //         <Search
  //           query={query}
  //           // Prevent duplicate keys by appending index:
  //           key={query + i}
  //         />
  //       ))}
  //     </ul>

  //     <form onSubmit={submitHandler}>
  //       <div>
  //       <input 
  //           type="text" 
  //           className="form-control" 
  //           value={title} 
  //           onChange={(e)=>setTitle(e.target.value)} 
  //           placeholder="Quiz Title"
  //       />
  //       <br/>
  //         <input
  //           placeholder="Questions"
  //           className="form-control"
  //           type="text"
  //           onChange={updateQuery}
  //           onKeyPress={keyPressed}
  //         />
  //         <br/>
  //         <button
  //           className="search-field-button form-control"
  //           type="button"
  //           onClick={handleClick}
  //         >
  //                           <span className='fa fa-home fa-lg'></span> 
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // )
  //       }
export default AddQuiz;