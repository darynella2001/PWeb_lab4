import React from "react";
import NavBar from "../components/NavBar";
export default function Home(){
    return(
        <div>
                  <NavBar />
                  <br/><br/><br/><br/>
                  

                                  <h1 >Welcome to Hogwarts!</h1>
                                  <img src={process.env.PUBLIC_URL + "/bg2.jpg"} className="img-fluid p-5"/>
        </div>
    );
}
// export default Home;