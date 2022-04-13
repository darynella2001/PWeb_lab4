import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div>
      <br/> <br/><br/><br/>
      <div className="card">
        <div className="card-body">
          <div>
            <h1 className="card-title">Start the quiz</h1>
            <p className="card-text">Good luck!</p>
            <button className="btn btn-dark" onClick={onQuizStart}>Start</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;