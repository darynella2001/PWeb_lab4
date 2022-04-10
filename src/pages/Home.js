import React from "react";
import NavBar from "../NavBar";
export default function Home(){
    return(
        <div>
                  <NavBar />
                                  <h1>Welcome to Hogwarts!</h1>
                                  {/* <img src={process.env.PUBLIC_URL + "/bg2.jpg"}/> */}
        </div>
    );
}
// export default Home;