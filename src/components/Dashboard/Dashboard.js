import { useState,useEffect } from "react";
import AnimalCard from "../AnimalCard/AnimalCard";
import Footer from "../Footer/Footer";
import "./Dashboard.scss"
function Dashboard(){

    return(
        <>
        <AnimalCard></AnimalCard>
        <Footer></Footer>
        </>
    )


}

export default Dashboard;