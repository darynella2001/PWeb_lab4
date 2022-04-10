import React, {useState} from "react";

const CreateQuiz = ({numberOfQuestions, onSetStep}) => {
    const [title, setTitle] = useState("");
    const [error, setError] = useState('');

    const titleSetHandler = () => {
        if(title === ''){
            setError('Please, insert a title!');
          }
        onSetStep(3);
    
      }
    return(
        <div className="Form">
            <div className="card">
                <div className="card-body">
                <h1>Your Quiz will have {numberOfQuestions} questions!</h1>
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <br/>
                    {error && <div className="text-danger">{error}</div>}
                <br/>
                <button className="btn btn-dark" onClick={titleSetHandler}>Start</button>
                 
                </div>
                </div>
        </div>
    )

}
export default CreateQuiz;