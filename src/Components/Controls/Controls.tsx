import React, { useState } from 'react';
import './Controls.css';

type Props = {
    setTimeInSeconds: Function
}

function Controls(props:Props) {
    const { setTimeInSeconds } = props;
    const [intervalId, setIntervalId] = useState<number>(0);

    const handleStartButton = (e: object) => {
        const interval:any = setInterval(() => {
            setTimeInSeconds((previousState:number) => previousState + 1);
        }, 1000);

        setIntervalId(interval);
    }

    const handleStopButton = () => {
        clearInterval(intervalId);
    }
    const handleWaitButton = () => {
        clearInterval(intervalId);
    }

    const handleReset = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0);
    }

    return(
        <div className="stopwatch-controls-container">
            <button onClick={handleStartButton} type="button">Start</button>
            <button onClick={handleStopButton} type="button">Stop</button>
            <button  onDoubleClick={handleWaitButton} type="button">Wait</button>
            <button onClick={handleReset} type="button">Reset</button>
        </div>
    );
}

export default Controls;