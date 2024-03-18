import React, { useState } from "react";
import "../problemFour/problemFour.css";

const ProblemFour = () => {
    const [lamp1, setLamp1] = useState("off");
    const [lamp2, setLamp2] = useState("off");
    const [lamp3, setLamp3] = useState("off");

    const toggleLamp = (number) => {
        if (number === 1) {
            setLamp1(lamp1 === "off" ? "on" : "off");
        } else if (number === 2) {
            setLamp2(lamp2 === "off" ? "on" : "off");
        } else if (number === 3) {
            setLamp3(lamp3 === "off" ? "on" : "off");
        }
    };

    const discoverSwitches = () => {
        if (lamp1 === "on" && lamp2 === "off" && lamp3 === "off") {
            return "O interruptor 1 controla a lâmpada 1, o interruptor 2 controla a lâmpada 3 e o interruptor 3 não controla nenhuma lâmpada.";
        } else if (lamp1 === "off" && lamp2 === "on" && lamp3 === "off") {
            return "O interruptor 2 controla a lâmpada 2, o interruptor 1 controla a lâmpada 3 e o interruptor 3 não controla nenhuma lâmpada.";
        } else if (lamp1 === "off" && lamp2 === "off" && lamp3 === "on") {
            return "O interruptor 3 controla a lâmpada 3, o interruptor 1 controla a lâmpada 2 e o interruptor 2 não controla nenhuma lâmpada.";
        } else {
            return "Os interruptores estão em uma posição indeterminada. Favor tentar novamente.";
        }
    };

    return (
        <div className="problema-four-container">
            <h2>
                Problema 4: Descobrir qual interruptor controla cada lâmpada
            </h2>
            <div className="lamps">
                <div className={`lamp ${lamp1}`} />
                <div className={`lamp ${lamp2}`} />
                <div className={`lamp ${lamp3}`} />
            </div>
            <div
                className="
switches"
            >
                <button onClick={() => toggleLamp(1)}>Interruptor 1</button>
                <button onClick={() => toggleLamp(2)}>Interruptor 2</button>
                <button onClick={() => toggleLamp(3)}>Interruptor 3</button>
            </div>
            <p className="result">{discoverSwitches()}</p>
        </div>
    );
};

export default ProblemFour;
