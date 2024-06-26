import React from 'react';



import Banner from './Banner/Banner';
import BusenessService from './BusenessService/BusenessService';
import ClientSection from './ClientSection/ClientSection';
import CustomerSection from './CustomerSection/CustomerSection';
import DownloadSection from './DownloadSection/DownloadSection';
import Features from './Features/Features';
import SupportSupport from './SupportSupport/SupportSupport';
import Therapist from './Therapist/Therapist';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <BusenessService></BusenessService>
            <ClientSection></ClientSection>
            <SupportSupport></SupportSupport>
            <CustomerSection></CustomerSection>
            <Therapist></Therapist>
            <DownloadSection></DownloadSection>



        </div>
    );
};

export default Home;