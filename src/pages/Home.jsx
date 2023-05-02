import React, { useEffect, useState } from "react";
import getHomeBaseData from "../api/home/HomeBaseData";
import Info from "../components/home/Info";
import Latest from "../components/home/Latest";
import Results from "../components/home/Results";
import Welcome from "../components/home/Welcome";


export default function Home() {
    return(
        <>
            <Welcome />
            <Info />
        </>
    );
}