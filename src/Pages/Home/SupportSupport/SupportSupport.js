import React from 'react';
import './SupportSupport.css';

import imgA from '../../../imges/Mask group.png';
import imgB from '../../../imges/user 1.png';
import imgC from '../../../imges/cloud-storage 1.png';
import imgD from '../../../imges/folder 1.png';
import imgE from '../../../imges/refresh 1.png';
import imgF from '../../../imges/bookmark 1.png';
import imgG from '../../../imges/language 1.png';


const SupportSupport = () => {
    return (
        <div>
            <div className="SupportHeader">

                <h5>WHY CHOOSE US?</h5>
                <h2>Dedicated to the Beauty & Wellness industry with a focus on increasing efficiency and ensuring the success of your
                    business</h2>
            </div>
            <div className="SupportHead">
                <div className="support">
                    <img src={imgA} alt="" />
                    <h2>All-in-One System</h2>
                    <p>All features integrated into one system, accessible through web and mobile apps supported on Google Chrome, iOS and Android</p>
                </div>
                <div className="support">
                    <img src={imgB} alt="" />
                    <h2>User-Friendly</h2>
                    <p>Built to focus on user experience, you will wonder why you did not use Aoikumo earlier</p>
                </div>
                <div className="support">
                    <img src={imgC} alt="" />
                    <h2>Cloud Technology</h2>
                    <p>Resilient and real-time cloud technology with continuousautomated daily backup</p>
                </div>
                <div className="support">
                    <img src={imgD} alt="" />
                    <h2>Secured, Robust & Stable</h2>
                    <p>Secured, stable and robust, with data encrypted using Microsoft Azure technology with 99.9% SLA</p>
                </div>

            </div>
            <div className="SupportSection">
                <div className="support">
                    <img src={imgE} alt="" />
                    <h2>Lifetime Updates</h2>
                    <p>Continuous lifetime feature updates, fixes and dedicated support</p>
                </div>
                <div className="support">
                    <img src={imgF} alt="" />
                    <h2>No Commitments</h2>
                    <p>Simple and easy sign-up, without any contractual commitments, upfront or cancellation fee</p>
                </div>
                <div className="support">
                    <img src={imgG} alt="" />
                    <h2>Multilingual Support</h2>
                    <p>English, Chinese (中文), Thai and Bahasa Indonesia with other languages currently being added on</p>
                </div>


            </div>

        </div>
    );
};

export default SupportSupport;