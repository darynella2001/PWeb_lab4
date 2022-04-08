import React from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

export default function Answer (props){

    const superId = useParams()

 return(
     <div>
                           <NavBar />
            <h1>hello</h1>
     {

         console.log(superId)
     }
     </div>
 )   
}