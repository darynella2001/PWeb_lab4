import React, { useState } from "react";

const Question = ({onAnswerUpdate, onQuestionUpdate}) => {
    // const [answers, set]
    const [question, setQuestion] = useState('');
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [error, setError] = useState('');
    
    function questionSetHandler() {
        if([question, answer1, answer2, answer3, answer4].some(x => x === '')){
            setError('Please, fill all the fields!');
            console.log("answ1 ", answer1);
            console.log("answ2 ", answer2);
            console.log("answ3 ", answer3);
            console.log("answ4 ", answer4);

        } else {
            // onAnswerUpdate(prevState => [... prevState, { question, "correct_answer": answer1}]);
        
        onQuestionUpdate(question);

        onAnswerUpdate(oldArray => [...oldArray, answer1]);
        onAnswerUpdate(oldArray => [...oldArray, answer2]);
        onAnswerUpdate(oldArray => [...oldArray, answer3]);
        onAnswerUpdate(oldArray => [...oldArray, answer4]);

        console.log("answ1 ", answer1);
        console.log("answ2 ", answer2);
        console.log("answ3 ", answer3);
        console.log("answ4 ", answer4);
        // setAnswers(answer2);
        // setAnswers(answer3);
        // setAnswers(answer4);

        // setAnswers(answer2);
        // setAnswers(answer3);
        // setAnswers
        }
      }
    return(
        <div>
            <div className="Form">
                <div className="card">
                    <div className="card-body">
                        <label htmlFor="question" className="form-label">Question Text</label>
                        <input type="text" className="form-control" value={question} onChange={(e)=>setQuestion(e.target.value)}/>
                        <br/>

                        <label htmlFor="answer1" className="form-label">Correct Answer</label>
                        <input type="text" className="form-control" value={answer1} onChange={(e)=>setAnswer1(e.target.value)}/>
                        <br/>
                        <label htmlFor="answer2" className="form-label">Answer</label>
                        <input type="text" className="form-control" value={answer2} onChange={(e)=>setAnswer2(e.target.value)}/>
                        <br/>
                        <label htmlFor="answer3" className="form-label">Answer</label>
                        <input type="text" className="form-control" value={answer3} onChange={(e)=>setAnswer3(e.target.value)}/>
                        <br/>
                        <label htmlFor="answer4" className="form-label">Answer</label>
                        <input type="text" className="form-control" value={answer4} onChange={(e)=>setAnswer4(e.target.value)}/>
                        <br/>
                        {error && <div className="text-danger">{error}</div>}
                        <br/>
                        <button className="btn btn-dark" onClick={questionSetHandler}>Start</button>
                

                    
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Question;
