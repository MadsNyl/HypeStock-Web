import React from "react";
import { pearsonCorrelation } from "../../functions/Correlation";

export default function PearsonCorrelationInfo({ x, y, text }) {
    return (
        <div className="text-center">
            <h1 className="pb-2 font-bold text-3xl">
                { 
                    pearsonCorrelation(x, y)
                }
            </h1>
            <p className="text-gray-400">
                { text }
            </p>
        </div>
    );
}