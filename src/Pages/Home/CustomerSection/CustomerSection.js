import React from 'react';
import './CustomerSection.css';
import IMG1 from '../../../imges/roman-akhmerov-Js6Hwobewi8-unsplash 1.png';
import IMG2 from '../../../imges/01 1.png';
import IMG7 from '../../../imges/04 1.png';
import IMG4 from '../../../imges/05 1.png';
import IMG3 from '../../../imges/Ellipse 5.png';
import IMG6 from '../../../imges/michael-dam-mEZ3PoFGs_k-unsplash 1.png';
import IMG5 from '../../../imges/red-haired-lady-eyeglasses-holds-books-shows-ok-sign 1.png';
const CustomerSection = () => {
    return (
        <div>
            <div className="customerMainPart">
                <h4>Testimonials</h4>
                <h2>What Our Customers Say</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nisl sapien integer amet commodo quis in sed. Leo fames in tempus eget tristique rhoncus. Sit bibendum in augue suspendisse elementum mauris rhoncus. Pretium, aliquam nibh pretium mauris sapien faucibus vitae. In risus semper bibendum platea vitae vulputate nisl viverra. Maecenas lacinia nibh aenean lacus vitae. Adipiscing nec non in ornare nunc, integer. Fermentum donec sed est, quis. Purus justo, morbi tincidunt sit. Dui dignissim sit lacus, purus vitae. Eu amet porttitor aenean egestas
                    In convallis aliquam id at massa..
                </p>
                <div className="CustomerHead">
                    <div className="Customer ">

                        <img className='imgA' src={IMG1} alt="" />
                        <img className='imgB' src={IMG2} alt="" />

                    </div>
                    <div className="Customer2 ">

                        <img className='imgA' src={IMG3} alt="" />
                        <img className='imgB' src={IMG4} alt="" />


                    </div>
                    <div className="Customer3 ">

                        <img className='imgA' src={IMG5} alt="" />
                        <img className='ImgF' src={IMG6} alt="" />
                        <img className='imgA' src={IMG7} alt="" />

                    </div>

                </div>
                <p>AddyBlaq Marketers has really been amazing with their features and packages and they also help my business to grow rapidly and richly with a period after i launch my biz. in Nigeria</p>
                <h3>Kate Ilori</h3>

            </div>

        </div>
    );
};

export default CustomerSection;