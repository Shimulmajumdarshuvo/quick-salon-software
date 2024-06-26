import React from 'react';
import './Login.css';
import LoginImg from '../../imges/13 2.png';

const Login = () => {
    return (
        <div className='LoginMainPart'>
            <div className="LoginHead">
                <div className="subLogin1">
                    <h2>Welcome to Quick Salon</h2>
                    <h4>Login your account</h4>
                    <img src={LoginImg} alt="" />
                </div>
                <div className="subLogin2">
                    <h1>Login</h1>


                    <div className="LoginPart">
                        <div className="subLogin">
                            <input className='inputB' type="text" placeholder="Email Address / Phone Number" name="fname"></input>
                            <br />
                            <input className='inputB' type="text" placeholder="Password" name="fname"></input>
                            <br />

                        </div>
                        <div className="LoginPartC">
                            <div>
                                <input className='InputCheckbox' type="checkbox" name="" id="" placeholder='dfjhgjkhsdg.' />
                                <span>Remember me</span>
                            </div>
                            <div>
                                <p>Forget password</p>
                            </div>
                        </div>
                    </div>





                    <div className='inputHeadButton'>
                        <input className='BTNRegister' type="submit" value="Login" />
                    </div>

                    <p className='registerContent'>c
                        2022 <span>QuickSAlonAPP</span>. All rights reserved. <br />
                        Developed by <span>Shah Techonology</span>.</p>

                </div>

            </div>

        </div>
    );
};

export default Login;