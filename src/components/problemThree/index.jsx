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

    // Função para completar a sequência B
    const completeSequenceB = () => {
        const lastNumber = sequenceB[sequenceB.length - 1];
        const newNumber = lastNumber * 2; // Multiplica o último número da sequência por 2
        setSequenceB([...sequenceB, newNumber]); // Atualiza o estado da sequência B com o novo número
    };

    // Função para completar a sequência C
    const completeSequenceC = () => {
        const lastNumber = sequenceC[sequenceC.length - 1];
        const newNumber = Math.pow(Math.sqrt(lastNumber) + 1, 2); // Calcula o quadrado do próximo número perfeito
        setSequenceC([...sequenceC, newNumber]); // Atualiza o estado da sequência C com o novo número
    };

    // Função para completar a sequência D
    const completeSequenceD = () => {
        const lastNumber = sequenceD[sequenceD.length - 1];
        const newNumber = Math.pow(Math.sqrt(lastNumber) + 2, 2); // Calcula o quadrado do próximo número perfeito ímpar
        setSequenceD([...sequenceD, newNumber]); // Atualiza o estado da sequência D com o novo número
    };

    // Função para completar a sequência E
    const completeSequenceE = () => {
        const lastNumber = sequenceE[sequenceE.length - 1];
        const penultimateNumero = sequenceE[sequenceE.length - 2];
        const newNumber = lastNumber + penultimateNumero; // Soma os dois últimos números da sequência
        setSequenceE([...sequenceE, newNumber]); // Atualiza o estado da sequência E com o novo número
    };

    // Função para completar a sequência F
    const completeSequenceF = () => {
        const lastNumber = sequenceF[sequenceF.length - 1];
        const newNumber = lastNumber + 1; // Adiciona 1 ao último número da sequência
        setSequenceF([...sequenceF, newNumber]); // Atualiza o estado da sequência F com o novo número
    };

    return (
        <div className="problem-three-container">
            <h2>Problema 3: Completar as sequências</h2>
            <ul>
                <li>
                    a: {sequenceA.join(", ")}
                    <button onClick={completeSequenceA}>Completar</button>{" "}
                    {/* Botão para completar a sequência A */}
                </li>
                <li>
                    b: {sequenceB.join(", ")}
                    <button onClick={completeSequenceB}>Completar</button>{" "}
                    {/* Botão para completar a sequência B */}
                </li>
                <li>
                    c: {sequenceC.join(", ")}
                    <button onClick={completeSequenceC}>Completar</button>{" "}
                    {/* Botão para completar a sequência C */}
                </li>
                <li>
                    d: {sequenceD.join(", ")}
                    <button onClick={completeSequenceD}>Completar</button>{" "}
                    {/* Botão para completar a sequência D */}
                </li>
                <li>
                    e: {sequenceE.join(", ")}
                    <button onClick={completeSequenceE}>Completar</button>{" "}
                    {/* Botão para completar a sequência E */}
                </li>
                <li>
                    f: {sequenceF.join(", ")}
                    <button onClick={completeSequenceF}>Completar</button>{" "}
                    {/* Botão para completar a sequência F */}
                </li>
            </ul>
        </div>
    );
};

export default ProblemThree;
