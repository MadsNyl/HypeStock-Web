import React, { useState } from "react";
import Info from "../components/home/Info";
import Results from "../components/home/Results";
import Welcome from "../components/home/Welcome";


export default function Home() {


    return(
        <>
            <Welcome />
            <Info />
            <Results />
        </>
    );
}