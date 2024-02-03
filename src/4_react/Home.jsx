import React from 'react';
import { useTimer } from 'use-timer';


const Home = () => {

    const { time, start, pause, reset, status } = useTimer();
    return (
        <>

            <div>
                <button onClick={start} className='btn btn-info'>start</button>
                <button onClick={pause} className='btn btn-warning'>Pause</button>
                <button onClick={reset} className='btn btn-danger'>Reset</button>
            </div>
            <div>
                <p>{time}</p>
                {status === 'RUNNING' && <p>Runing</p>}
            </div>
        </>
    );
};

export default Home;