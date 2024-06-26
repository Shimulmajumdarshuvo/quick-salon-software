import React from 'react';
import './Features.css';
import { FaFileInvoiceDollar } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { GoDeviceMobile } from "react-icons/go";
import { GiNurseMale } from "react-icons/gi";
import { ImCheckmark } from "react-icons/im";

import { RiSettings5Fill } from "react-icons/ri";



const Features = () => {
    return (
        <div>
            <div className="FeatureHead">
                <h1>Features of Quick Salon Software</h1>
                <p>Quick is a feature-packed salon management program that fulfills the requirements of a wide range of businesses, the requirements of a wide irrespective of their type and size. The functionality of managing the front-desk staff, customers, and stylists from a single software make it the perfect.</p>
            </div>
            <div className="features">
                <div className="Feature">
                    <span className='FeatureIcon1'><ImNewspaper></ImNewspaper></span>
                    <h3>Appointments</h3>
                    <p><span><ImCheckmark></ImCheckmark></span> Take control over your business from any device you want.</p>
                    <p><span><ImCheckmark></ImCheckmark></span> Options are easy to use for both you and your clients.</p>
                    <p> <span><ImCheckmark></ImCheckmark></span>Edit and track your calendar.</p>
                    <p> <span><ImCheckmark></ImCheckmark></span>Watch how fast your salon is growing and maximize your profit potential.</p>
                </div>
                <div className="Feature">
                    <span className='FeatureIcon2'><FaFileInvoiceDollar></FaFileInvoiceDollar></span>
                    <h3>Invoice</h3>
                    <div className='content-2'>
                        <p> <span><ImCheckmark></ImCheckmark></span>Save a receipt for all your services.</p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Create a database.</p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Become more and more organized every minute by saving your receipts.
                        </p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Reach out to your former invoices anytime you want.</p>
                    </div>
                </div>
                <div className="Feature">
                    <span className='FeatureIcon3'><TfiEmail></TfiEmail></span>
                    <h3>Mail</h3>
                    <div className='content-3'>
                        <p> <span><ImCheckmark></ImCheckmark></span>Keep in touch with your customers.</p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Create, control and customize the way you contact them.</p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Share appointments, data and product info with them via mail.</p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Easy utilization features and accessibility by just one click.</p>
                    </div>
                </div>
                <div className="Feature">
                    <span className='FeatureIcon4'><RiSettings5Fill></RiSettings5Fill></span>
                    <h3>Service</h3>
                    <div className='content-4'>
                        <p> <span><ImCheckmark></ImCheckmark></span>Save your data and services.</p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Control your staffs’ accounts.</p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Your staff can easily log-in to see their clients and up-coming services.</p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Track your staff's fixed premium percentage.</p>
                    </div>

                </div>
                <div className="Feature">
                    <span className='FeatureIcon5'><GiNurseMale></GiNurseMale></span>
                    <h3>Staff</h3>
                    <div className='content-5'>
                        <p> <span><ImCheckmark></ImCheckmark></span>Detailed staff information and records.</p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Rich database about your staffs’
                            working hours and your sales schedule.</p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Unlimited employee potential.</p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Add your staff to the panel so that they can access their schedules and begin managing their client appointments.</p>
                    </div>
                </div>
                <div className="Feature">
                    <span className='FeatureIcon6'><GoDeviceMobile></GoDeviceMobile></span>
                    <h3>Mobile App</h3>
                    <div className='content-6'>
                        <p> <span><ImCheckmark></ImCheckmark></span>Work from anywhere you want.</p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Manage your business through your mobile app.</p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Reach out to your clients or staff anytime you want.</p>
                        <p> <span><ImCheckmark></ImCheckmark></span>Keep in touch with your staff from anywhere you are.</p>
                    </div>
                </div>
            </div>
            <div className='FeatureBtn'>
                <button className='Butn'>BROWSE FEATURES</button>
            </div>
        </div>
    );
};

export default Features;