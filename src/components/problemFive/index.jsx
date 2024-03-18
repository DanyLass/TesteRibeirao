import React, { useState } from "react";
import "../problemFive/problemFive.css";

const ProblemFive = () => {
    const [inputString, setInputString] = useState("");
    const [reversedString, setReversedString] = useState("");

    const reverseString = () => {
        const reversed = inputString.split("").reverse().join("");
        setReversedString(reversed);
    };

    return (
        <div className="problem-five-container">
            <h2>Problema 5: Inverter uma string</h2>
            <div className="input-container">
                <input
                    type="text"
                    value={inputString}
                    onChange={(e) => setInputString(e.target.value)}
                    placeholder="Digite uma string"
                />
                <button onClick={reverseString}>Inverter</button>
            </div>
            <p className="result">String invertida: {reversedString}</p>
        </div>
    );
};

export default ProblemFive;
