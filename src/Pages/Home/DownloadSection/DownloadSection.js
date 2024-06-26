import React from 'react';
import './DownloadSection.css';

import ImagesA from '../../../imges/iPhoe.png';
import ImagesB from '../../../imges/download__1_-removebg-preview.png';
import ImagesC from '../../../imges/images-removebg-preview.png';

const DownloadSection = () => {
    return (
        <div>
            <div className="DownloadHeader">

                <div className="downloadSection">
                    <div className="subDownload">
                        <div className='ImagesPart'>
                            <img src={ImagesA} alt="" />
                        </div>

                    </div>
                    <div className="subDownload">
                        <h2>Download Our Quick Salon App</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa arcu eget arcu ut euismod leo.</p>

                        <div className='ImagesMain'>
                            <img className='Images1' src={ImagesC} alt="" />
                            <img className='Images2' src={ImagesB} alt="" />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default DownloadSection;