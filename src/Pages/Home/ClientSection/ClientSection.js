import React from 'react';
import './ClientSection.css';
import img3 from '../../../imges/pngegg (3) 1 (1).png';
import img4 from '../../../imges/pngegg (2) 1.png';
import img5 from '../../../imges/Nails 1 (1).png';
import img6 from '../../../imges/pngegg (4) 1 (1).png';
import img7 from '../../../imges/pngegg (1) 1 (1).png';

const ClientSection = () => {
    return (
        <div className='ClientTop'>
            <div className="clientHeader">
                <h2>Some of our Clients Include:</h2>
                <div className="client">
                    <div className="singleClient">
                        <img src={img3} alt="" />
                    </div>
                    <div className="singleClient">
                        <img src={img4} alt="" />
                    </div>
                    <div className="singleClient">
                        <img src={img5} alt="" />
                    </div>
                    <div className="singleClient">
                        <img src={img6} alt="" />
                    </div>
                    <div className="singleClient">
                        <img src={img7} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSection;