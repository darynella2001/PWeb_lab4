import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import PrintQuizes from "../components/PrintQuizes";
import * as ReactBootStrap from 'react-bootstrap';
function Quizes(){
    const [quizes, setQuizes] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getAllQuizes();
    }, []);
    
   const getAllQuizes = () =>{
        axios.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes',
        {headers:{
                    "X-Access-Token": '00e42cabcc70501b0941ae177326c2c7407e96d701a97a82d97577d4db27e6de',
                }
        })
        .then((response) => {
                const allQuizes = response.data;
                setQuizes(allQuizes);         
                setLoading(true);
 
        })
        .catch(error => console.error(`Error: ${error}`));
   }
//    console.log(quizes);

    return(
        <div>
            <NavBar />
            <br/><br/><br/><br/>
            {loading ? <PrintQuizes {...quizes} /> : <ReactBootStrap.Spinner animation="border"/>}
            
            
            
                {/* <div>{JSON.stringify(quizes)}</div> */}
            
        </div>
    );
}
export default Quizes;