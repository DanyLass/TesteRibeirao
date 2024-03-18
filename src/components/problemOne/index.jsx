import React, { useState } from "react";
import "../problemOne/problemOne.css";

const ProblemaOne = () => {
    const [index, setIndex] = useState(13);
    const [sum, setSum] = useState(0);

    const calculateSum = () => {
        let calculatedSum = 0;
        for (let i = 1; i <= index; i++) {
            calculatedSum += i;
        }
        setSum(calculatedSum);
    };

    return (
        <div className="problemOne-container">
            <h2>Problema 1: Calcular a soma dos números de 1 até 13</h2>
            <div className="input-container">
                <label htmlFor="indexInput">Índice:</label>
                <input
                    id="indexInput"
                    type="number"
                    value={index}
                    onChange={(e) => setIndex(parseInt(e.target.value))}
                />
                <button onClick={calculateSum}>Calcular</button>
            </div>
            <p className="result">O resultado da soma é: {sum}</p>
        </div>
    );
};

export default ProblemaOne;
