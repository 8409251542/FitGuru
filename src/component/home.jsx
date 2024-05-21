import Header from "./header";
import Hero from "./hero";
import Search from "./search";
import exersicesList from "./exersice";
import Footer from "./footer";
import { useState } from "react";
function Home(){
    const [exercises,setExercises]=useState([]);
    return(
        
        <>
        <Header/>
        <Hero/>
        <Search exercises={exercises} setExercises={setExercises}/>
        {/* <exersicesList exercises={exercises} setExercises={setExercises}/> */}
        <Footer/>
        </>
    )
}
export default Home;