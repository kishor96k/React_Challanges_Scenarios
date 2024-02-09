import React, { useState } from 'react';

const Home = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <div className="mt-4 p-5">
                <strong><p>On button click hide and show passowrd</p></strong>
            </div>
            <div className="row">
                <div className="d-flex">
                    <div className="justify-content-center align-items-center">
                        <div className='col-md-12 mt-4 p-4 '>
                            <label className=''>Password:</label>
                            <input className='form-control'
                                type={passwordVisible ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className='btn btn-block btn-dark mt-4' type="button" onClick={togglePasswordVisibility}>
                                {passwordVisible ? 'Hide' : 'Show'} Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Home;
