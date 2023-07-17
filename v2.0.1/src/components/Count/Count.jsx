import { useEffect, useState } from 'react';
import { countdown } from '../countdown';
import './Count.scss'


const Count =() =>{

    const countdownDate = new Date('Jul 23 2023 18:00:00 GMT-0500');
    const [downDate, setDowDate]=useState({
        days:'00',
        hours:'00',
        minutes:'00',
        seconds:'00'
    })

    // Actualizar el contador cada segundo
    useEffect(() => {
        const interval = setInterval(() => {
          countdown(countdownDate, setDowDate);
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    

    return (
        <div id="countdown">                                
                <div className="countdown__timer">
                    <p id="countdown__timer--days">{downDate.days}</p>
                    <span> Days </span>
                </div>
                <p id="countdown__sepator"> : </p>
                <div className="countdown__timer">
                    <p id="countdown__timer--hours">{downDate.hours}</p>
                    <span> Hours </span>
                </div>
                <p id="countdown__sepator"> : </p>
                <div className="countdown__timer">
                    <p id="countdown__timer--minutes">{downDate.minutes}</p>
                    <span> Minutes </span>
                </div>
                <p id="countdown__sepator"> : </p>
                <div className="countdown__timer">
                    <p id="countdown__timer--seconds">{downDate.seconds}</p>
                    <span> Seconds </span>
                </div>           
            </div>
    )

}

export default Count
