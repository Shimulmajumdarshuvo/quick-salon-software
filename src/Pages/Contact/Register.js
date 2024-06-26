import React from 'react';
import './Register.css';
import contact from '../../imges/My project 1.png';



const Register = () => {
    return (
        <div id='contact' className='RegisterMainPart'>
            <div className="register">
                <div className="subRegister1">
                    <h2>Welcome to <br />
                        Quick Salon Software</h2>
                    <img src={contact} alt="" />
                </div>
                <div className="subRegister2">
                    <h1>Regstration</h1>
                    <div className="RegisterPart2nd">
                        <div className="SubRegisterPart">
                            <label htmlFor="">Full name</label> <br />
                            <input className='input' type="text" placeholder="Enter Your Name" name="fname"></input>
                        </div>
                        <div className="SubRegisterPart">
                            <label htmlFor="">Salon name</label> <br />
                            <input className='input' type="text" placeholder="Enter Your Store Name" name="fname"></input>
                        </div>
                        <div className="SubRegisterPart">
                            <label htmlFor="">Web Access URL</label> <br />
                            <input className='input' type="text" placeholder='https//: Loging Page '></input>
                        </div>
                        <div className="SubRegisterPart">
                            <label htmlFor="">Email Address</label> <br />
                            <input className='input' type="text" placeholder="Enter Your Email Address"></input>
                        </div>
                        <div className="SubRegisterPart">
                            <label htmlFor="">Password</label> <br />
                            <input className='input' type="text" placeholder="Password Must be 8 Word"></input>
                        </div>
                        <div className="SubRegisterPart">
                            <label htmlFor="">Phone</label> <br />
                            <input className='input' type="text" placeholder="Enter Your Phon Number"></input>
                        </div>




                        <div className="SubRegisterPart">
                            <label for="country">Salon Location</label> <br />
                            <select className='input' id="country">
                                <option value="country">Bangladesh</option>
                                <option value="australia">Australia</option>
                                <option value="usa">Usa</option>
                                <option value="india">India</option>
                                <option value="pakistan">Pakistan</option>
                            </select>

                        </div>
                        <div className="SubRegisterPart">
                            <label for="city">City</label> <br />
                            <select className='input' id="city">
                                <option value="city">Choose City</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="khulna">Khulna</option>
                                <option value="barisal">Barisal</option>
                                <option value="faridpur">Faridpur</option>
                            </select>

                        </div>
                        <div className="SubRegisterPart">
                            <label for="currency">Currency</label> <br />
                            <select className='input' id="currency">
                                <option value="taka">Bangladesh Taka</option>
                                <option value="deollar">Dollar</option>
                                <option value="rupi">Rupi</option>

                            </select>
                        </div>
                        <div className="SubRegisterPart">
                            <label for="plan">Plan</label> <br />
                            <select className='input' id="plan">
                                <option value="plan">14 Day Free Trail </option>
                                <option value="plan">10 Day Free Trail</option>
                                <option value="plan">7 Day Free Trail</option>

                            </select>

                        </div>
                        <div className="SubRegisterPart">
                            <label for="time">Time zone</label> <br />
                            <select className='input' id="time">
                                <option value="time">(GMT + 06:00) Dhaka </option>

                            </select>
                        </div>




                    </div>
                    <div className='inputHeadButton'>
                        <input className='BTNRegister' type="submit" value="Register" />
                    </div>

                    <p className='registerContent'>c
                        2022 <span>QuickSAlonAPP</span>. All rights reserved. <br />
                        Developed by <span>Shah Techonology</span>.</p>

                </div>

            </div>
        </div>
    );
};

export default Register;