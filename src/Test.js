import React, {useState} from "react";

const Test = () => {
    const [formFields, setFormFields] = useState([{question:'',answers:[],correct_answer:''},])
    const [title, setTitle] = useState('');
    
    const handleFormChange = (event, index) => {
        let data = [...formFields];
        console.log("data", event.target.name)
        if (event.target.name === ('answers[0]')){
            data[index]['answers'][0] = event.target.value
        }
        else if (event.target.name === ('answers[1]')){
            data[index]['answers'][1] = event.target.value        
        }
        else if (event.target.name === ('answers[2]')){
            data[index]['answers'][2] = event.target.value        
        }
        else if (event.target.name === ('answers[3]')){
            data[index]['answers'][3] = event.target.value        
        }else
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
      }
    
      const submit = (e) => {
        e.preventDefault();
        console.log(formFields)
      }
  
      const addFields = () => {
        let object = {
          question: '',
          answers: [],
          correct_answer: ''
        }
    
        setFormFields([...formFields, object])
      }

      const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
      }
    
    return (
        <div>
            <div className="Form">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={submit}>
                            { 
                            formFields.map((form, index) => {
                                return(
                                    <div key={index}>
                                        <input type="text" name="question"
                                                placeholder="question"
                                                onChange={event=>handleFormChange(event, index)}
                                                value={form.question}
                                                />
                                                <input type="text" name="answers[0]"
                                                placeholder="answer1"
                                                onChange={event=>handleFormChange(event, index)}
                                                value={form.answers[0]}
                                                />
                                                <input type="text" name="answers[1]"
                                                placeholder="answer2"
                                                onChange={event=>handleFormChange(event, index)}
                                                value={form.answers[1]}
                                                />
                                                <input type="text" name="answers[2]"
                                                placeholder="answer3"
                                                onChange={event=>handleFormChange(event, index)}
                                                value={form.answers[2]}
                                                />
                                                <input type="text" name="answers[3]"
                                                placeholder="answer4"
                                                onChange={event=>handleFormChange(event, index)}
                                                value={form.answers[3]}
                                                />
                                                <select name="correct_answer" value={form.correct_answer} onChange={event=>handleFormChange(event, index)}>
                                                    <option defaultValue value={form.answers[0]}>{form.answers[0]}</option>
                                                    <option value={form.answers[1]}>{form.answers[1]}</option>
                                                    <option value={form.answers[2]}>{form.answers[2]}</option>
                                                    <option value={form.answers[3]}>{form.answers[3]}</option>
                                                </select>
                                                <button onClick={() => removeFields(index)}>Remove</button>

                                    </div>
                                )
                            })
                            }
                        </form>
                        <button onClick={addFields}>Add More..</button>
                                  <button onClick={submit}>Submit</button>

                    </div>

                </div>
            </div>
        </div>
    );


}

export default Test;