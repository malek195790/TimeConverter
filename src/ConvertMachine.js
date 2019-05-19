import React from 'react'



export default function ConvertMachine({time}) {
  return (
    <div  className="watch">
        {time.map( el => 
            <div className="display">
                <h1>{el.h}:{el.m}:{el.s}</h1>
                <p><legend>{el.hours}</legend> <legend>{el.minutes}</legend> <legend>{el.seconds}</legend></p>
            </div>
            )}
    </div>
  )
}
