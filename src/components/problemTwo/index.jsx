import React, { useState } from "react";
import "../problemTwo/problemTwo.css";

const ProblemaTwo = () => {
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");

    const belongsFibonacci = (number) => {
        let a = 0;
        let b = 1;
        while (b < number) {
            const temp = b;
            b = a + b;
            a = temp;
        }
        return b === number;
    };

    const checkNumber = () => {
        const number = parseInt(inputValue);
        if (!isNaN(number)) {
            const resul = belongsFibonacci(number);
            setMessage(
                resul
                    ? `${number} pertence à sequência de Fibonacci.`
                    : `${number} não pertence à sequência de Fibonacci.`
            );
        } else {
            setMessage("Por favor, insira um número válido.");
        }
    };

    return (
        <div className="problema-two-container">
            <h2>
                Problema 2: Verificar se um número pertence à sequência de
                Fibonacci
            </h2>
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Insira um número"
                />
                <button onClick={checkNumber}>Verificar</button>
            </div>
            <p className="mensagem">{message}</p>
        </div>
    );
};

export default ProblemaTwo;
