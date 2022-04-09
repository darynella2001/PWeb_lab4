import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const End = ({results, data}) => {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('user-info')).id);
    const [response, setResponse] = useState([]);
    const [score, setScore] = useState(0);
    const quizId = useParams().id;
    const boolArr = [];
    useEffect(() => {
        // const index = ;
        // setUserId(JSON.parse(localStorage.getItem('user-info')).id)
        console.log('user id', userId);
        results.map(r => submitAnswer(r.id, r.a, userId));

    }, [])

    function submitAnswer (question_id, answer, user_id) {
        // setUserId(JSON.parse(localStorage.getItem('user-info')).id);
        // console.log('user id', userId);
        // let user_id = userId
        // console.log("the id is", user_id)
        const postData = {data : {question_id, answer, user_id}}
        console.log(postData)

        axios.post('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/'+ quizId +'/submit', postData,  
        {headers:{
                        "X-Access-Token": '00e42cabcc70501b0941ae177326c2c7407e96d701a97a82d97577d4db27e6de',
                    }
                })
        .then((res) => {
            setResponse(prevState => [ ...prevState, res.data])
            console.log("res data", res.data)
            if (res.data.correct)
                setScore(prevState => prevState + 1)
        })
        .catch((err)=>{
            console.log(err)
        })
      }
    
      

    return(
        <div className="card">
            <div className='card-content'>
                <div className='content'>
                    <h3>Your results</h3>
                    <p>{score} of {data.length}</p>
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