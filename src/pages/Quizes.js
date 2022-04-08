import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import axios from "axios";
import PrintQuizes from "../PrintQuizes";
function Quizes(){
    const [quizes, setQuizes] = useState(null);
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
        })
        .catch(error => console.error(`Error: ${error}`));
   }
//    console.log(quizes);

    return(
        <div>
            <NavBar />
            <PrintQuizes {...quizes} />
            
            
                {/* <div>{JSON.stringify(quizes)}</div> */}
            
        </div>
    );
}
export default Quizes;