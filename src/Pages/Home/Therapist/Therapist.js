import React from 'react';
import './Therapist.css';
import Images1 from '../../../imges/pexels-photo-3268732 1.png';
import Images2 from '../../../imges/handsome-man-cutting-beard-barber-salon 1.png';
import Images3 from '../../../imges/pexels-photo-1385478 2.png';
import Images4 from '../../../imges/female-hairdresser-using-hairbrush-hair-dryer.png';

const Therapist = () => {
    return (
        <div>
            <div className="therapistHead">
                <div className="therapist">
                    <div className="subTherapist">
                        <h2>
                            <span> 10,000</span>+ Make-up Artists, Therapists, Salon and Spa Experts in more than <span>60</span>+ countries using Quick Salon Appointment Booking Software
                        </h2>
                        <button className='BUTTON'>Discover more</button>
                    </div>
                    <div className="subTherapist">
                        <div className="Experts">
                            <div className="ExpertsImg">
                                <img src={Images1} alt="" />
                            </div>
                            <div className="ExpertsImg">
                                <img src={Images2} alt="" />
                            </div>
                            <div className="ExpertsImg">
                                <img src={Images3} alt="" />
                            </div>
                            <div className="ExpertsImg">
                                <img src={Images4} alt="" />
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Therapist;