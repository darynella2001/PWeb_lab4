import React, {useState} from "react";

const Test = ({numberOfQuestions}) => {
    const [title, setTitle] = useState('');
    const [questionText, setQuestionText] = useState('');
    const [questions, setQuestions] = useState(Array(numberOfQuestions).fill({}))
    
  
    return (
        <div>
            <div className="Form">
                <div className="card">
                    <div className="card-body">
                        <form>
                            { 
                            }
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );


}

export default Test;