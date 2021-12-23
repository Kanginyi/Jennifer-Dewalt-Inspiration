import React, {useState} from 'react';
import "../Stylings/Page4.css";
import clockBackground from "../Images/clock_background.png"

function Page4() {
    const [time, setTime] = useState(new Date());
    
    setInterval(() => {
        setTime(new Date());
    }, 1000);

    return (
        <div id="page4">

            <div className="clock">

                <div
                    className="hour hand"
                    style={{transform: `rotate(${time.getHours() * 30}deg)`}}>
                </div>

                <div
                    className="minute hand"
                    style={{transform: `rotate(${time.getMinutes() * 6}deg)`}}>
                </div>

                <div
                    className="second hand"
                    style={{transform: `rotate(${time.getSeconds() * 6}deg)`}}>
                </div>

                <div className="middle-circle"></div>

                <img src={clockBackground} alt="Clock background"/>           

            </div>

        </div>
    );
}

export default Page4;