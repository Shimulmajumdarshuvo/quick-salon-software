import React from 'react';
import './BusenessService.css';

import ClientImg1 from '../../../imges/giorgio-trovato-wSpkThmoZQc-unsplash 1.png';
import ClientImg2 from '../../../imges/makeup-artist-applying-makeup-by-brush_329181-1926 1.png';
import ClientImg3 from '../../../imges/massage-3795692__340 1.png';

const BusenessService = () => {
    return (
        <div>
            <div className="BusinessHeader">
                <h2>Grow your business with Our <br /> <span>Quick
                    Salon & Spa Management Software</span>
                </h2>
                <div className="BusinessHead">
                    <div className="singleService">
                        <img src={ClientImg1} alt="" />
                        <h3>Hair Salons</h3>
                        <p>Our management software has all the features that will make managing your hair salon easier than ever.</p>
                    </div>
                    <div className="singleService">
                        <img src={ClientImg2} alt="" />
                        <h3>Make Up Artist</h3>
                        <p>Connect with your customers better and improve their overall experience by exploring the innovative features of Salonist salon software.</p>
                    </div>
                    <div className="singleService">
                        <img src={ClientImg3} alt="" />
                        <h3>Massage & Spa Centers</h3>
                        <p>Want to take the stress out of managing your massage and spa centers? All you need is Quick Salon management software that handles all aspects of your business.</p>
                    </div>
                </div>
                <div className='ServiceBtn'>
                    <button className='Butn'>Find out more</button>
                </div>


            </div>
        </div>
    );
};

export default BusenessService;