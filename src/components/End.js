import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';


const formatTime = time => {
    if(time < 60) {
      return time < 10 ? `0${time}s` : `${time}s`;
    }else {
      return Math.floor(time / 60) + 'm' + (time % 60) + 's';
    }
  }
  
  export {
    formatTime
  }

const End = ({results, data, time}) => {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('user-info')).id);
    const [response, setResponse] = useState([]);
    const [score, setScore] = useState(0);
    const quizId = useParams().id;
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();
 
    useEffect(() => {
        console.log('user id', userId);
        results.map(r => submitAnswer(r.id, r.a, userId));
    }, [])

    function submitAnswer (question_id, answer, user_id) {
        const postData = {data : {question_id, answer, user_id}}
        console.log(postData)

        axios.post('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/'+ quizId +'/submit', postData,  
        {headers:{
                        "X-Access-Token": '00e42cabcc70501b0941ae177326c2c7407e96d701a97a82d97577d4db27e6de',
                    }
                })
        .then((res) => {
            setResponse(prevState => [ ...prevState, res.data])
            console.log("response data", res.data)
            if (res.data.correct)
                setScore(prevState => prevState + 1)
            setLoading(true);
        })
        .catch((err)=>{
            console.log(err)
        })
      }
    
    return(
      <div>
        <br/><br/><br/><br/>
        <div className="card">
          <div className='card-body'>
              <h3 className="card-title">Your results</h3>
              <p className="card-subtitle mb-2">{score} of {data.length}</p>
              {loading ?  <p ><strong>{Math.floor((score * 100)/data.length)}%</strong></p> 
              : <ReactBootStrap.Spinner animation="border"/>}
              
              
              <p ><strong>Your time:</strong>  {formatTime(time)}</p>
              <button className='btn btn-dark' onClick={()=>navigate("/quizes")}> Return to Quizes</button>
          </div>
        </div>
      </div>
    );
}
export default End;