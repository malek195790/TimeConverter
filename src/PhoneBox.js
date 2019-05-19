import React from 'react';
import ConvertMachine from './ConvertMachine';

const ms='1800000'

const times =[
    {
        h:(parseInt((ms/1000)/3600)).toString().padStart(2, "0"),
        hours:' hours ',
        m:(parseInt((ms/1000)%3600)/60).toString().padStart(2, "0"),
        minutes:' minutes ',
        s:(parseInt((ms/1000)%3600)%60).toString().padStart(2, "0"),
        seconds:' seconds '
    }
]

export default function PhoneBox() {
  return (
    <div className="main-box">
        <ConvertMachine time={times}/>
        <div className="button-display">
            <button className="start-button">Start</button>
            <button className="reset-button">Reset</button>
        </div>
    </div>
  )
}
