import React, { useState } from "react";
import "../problemThree/problemThree.css";

const ProblemThree = () => {
    const [sequenceA, setSequenceA] = useState([1, 3, 5, 7]);
    const [sequenceB, setSequenceB] = useState([2, 4, 8, 16, 32, 64]);
    const [sequenceC, setSequenceC] = useState([0, 1, 4, 9, 16, 25, 36]);
    const [sequenceD, setSequenceD] = useState([4, 16, 36, 64]);
    const [sequenceE, setSequenceE] = useState([1, 1, 2, 3, 5, 8]);
    const [sequenceF, setSequenceF] = useState([2, 10, 12, 16, 17, 18, 19]);

    const completeSequenceA = () => {
        const lastNumber = sequenceA[setSequenceA.length - 1];
        const newNumber = lastNumber + 2;
        setSequenceA([...sequenceA, newNumber]);
    };

    const completeSequenceB = () => {
        const lastNumber = sequenceB[sequenceB.length - 1];
        const newNumber = lastNumber * 2;
        setSequenceB([...sequenceB, newNumber]);
    };

    const completeSequenceC = () => {
        const lastNumber = sequenceC[sequenceC.length - 1];
        const newNumber = Math.pow(Math.sqrt(lastNumber) + 1, 2);
        setSequenceC([...sequenceC, newNumber]);
    };

    const completeSequenceD = () => {
        const lastNumber = sequenceD[sequenceD.length - 1];
        const newNumber = Math.pow(Math.sqrt(lastNumber) + 2, 2);
        setSequenceD([...sequenceD, newNumber]);
    };

    const completeSequenceE = () => {
        const lastNumber = sequenceE[sequenceE.length - 1];
        const penultimateNumero = sequenceE[sequenceE.length - 2];
        const newNumber = lastNumber + penultimateNumero;
        setSequenceE([...sequenceE, newNumber]);
    };

    const completeSequenceF = () => {
        const lastNumber = sequenceF[sequenceF.length - 1];
        const newNumber = lastNumber + 1;
        setSequenceF([...sequenceF, newNumber]);
    };

    return (
        <div className="problem-three-container">
            <h2>Problema 3: Completar as sequências</h2>
            <ul>
                <li>
                    a: {sequenceA.join(", ")}
                    <button onClick={completeSequenceA}>Completar</button>{" "}
                </li>
                <li>
                    b: {sequenceB.join(", ")}
                    <button onClick={completeSequenceB}>Completar</button>{" "}
                </li>
                <li>
                    c: {sequenceC.join(", ")}
                    <button onClick={completeSequenceC}>Completar</button>{" "}
                </li>
                <li>
                    d: {sequenceD.join(", ")}
                    <button onClick={completeSequenceD}>Completar</button>{" "}
                </li>
                <li>
                    e: {sequenceE.join(", ")}
                    <button onClick={completeSequenceE}>Completar</button>{" "}
                </li>
                <li>
                    f: {sequenceF.join(", ")}
                    <button onClick={completeSequenceF}>Completar</button>{" "}
                </li>
            </ul>
        </div>
    );
};

export default ProblemThree;
