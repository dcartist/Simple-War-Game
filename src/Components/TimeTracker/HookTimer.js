import React from 'react'
import { useStopwatch } from "react-use-stopwatch";

export default function HookTimer(props) {
    const [{ time, format }, start, stop, reset] = useStopwatch();
    return (
        <div>
        // Stopwatch Outputs
        <strong>{time}</strong>
        <strong>{format}</strong>
        // Stopwatch Inputs
        <button onClick={() => start()}>Start</button>
        <button onClick={() => stop()}>Stop</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    )
}
