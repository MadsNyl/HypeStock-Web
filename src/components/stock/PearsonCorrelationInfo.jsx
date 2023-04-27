import React from "react";
import { pearsonCorrelation } from "../../functions/Correlation";
import BoxDisplayWrapper from "../wrappers/BoxDisplayWrapper";

export default function PearsonCorrelationInfo({ x, y, text, tag }) {
    return (
        <BoxDisplayWrapper>
            <div className="space-x-3">
                <div className="px-2 py-1 rounded-md bg-emerald-100 inline-block mb-4">
                    <h1 className="capitalize text-emerald-500 text-sm font-medium">
                        { tag }
                    </h1>
                </div>
                <div className="px-2 py-1 rounded-md bg-sky-100 inline-block mb-2">
                    <h1 className="capitalize text-sky-500 text-sm font-medium">
                        Pearson
                    </h1>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p className="w-48 text-gray-400">
                    { text }
                </p>
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-emerald-400">
                        { pearsonCorrelation(x, y) }
                    </h1>
                    <p className="text-lg text-gray-400">
                        score
                    </p>
                </div>
            </div>
        </BoxDisplayWrapper>
    );
}