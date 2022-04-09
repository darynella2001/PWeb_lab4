import React, {useState, useEffect, useRef} from "react";


const Answer = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
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