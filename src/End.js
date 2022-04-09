import React, { useEffect, useState } from 'react';

const End = ({results, data}) => {
    // const [correctAnswers, setCorrectAnswers] = useState(0);
    const [userId, setUserId] = useState(0);

    // useEffect(() => {
    //     let correct = 0;
    //     results.forEach((result, index) => {
    //         if(result.a === data[index].answers[0]){
    //             // console.log(data[index].answers[0])
    //             correct++;
    //         }
    //     });
    //     setCorrectAnswers(correct);
    // })


    function submitAnswer (questionId, selectedAnswer) {
        setUserId(JSON.parse(localStorage.getItem('user-info')).id);
        console.log('user id', userId);
      }


    return(
        <div className="card">
            <div className='card-content'>
                <div className='content'>
                    <h3>Your results</h3>
                    <p>8 of {data.length}</p>
                    <p><strong>80%</strong></p>
                    <p><strong>Your time:</strong> 15 s</p>
                    <button className='button is-info mr-2' >Check your answers</button>
                    <button className='button is-info mr-2'>Try again</button>
                
                </div>
            </div>
        </div>
    );
}
export default End;