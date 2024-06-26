import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>

            <div className="bannerHead">
                <div className="banner">
                    <h2>The best SALON
                        Management
                        Software</h2>
                    <p>Quick salon offers smart, industry-tailored solutions to solve the problems of small and medium businesses. We will help you access and manage your organization effectively. </p>
                    <button>Get Started for free</button>

                </div>
                <div className="banner">
                    <img src="https://i.ibb.co/tYMRYbX/Layer-1-1.png" alt="" />
                </div>
            </div>




            <div className="Banner-2nd">
                <div className="subBanner">
                    <img src="https://i.ibb.co/MPHw0t0/2849110-1.png" alt="" />

                </div>
                <div className="subBanner">
                    <h2>
                        Cloud-based Software
                    </h2>
                    <p>All-in-one, cloud ERP Solution to Manage your Finance, Accounting, Sales, Invoices, Inventory, Clients Relations, HRM, Operations and more</p>

                </div>

            </div>

        </div>
    );
};

export default Banner;