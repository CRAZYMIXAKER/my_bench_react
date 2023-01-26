import React from 'react';
import '../styles/Index.scss';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainOfIndex from "../components/MainOfIndex";

const Index = () => {
    return (
        <div className="wrapper">
            <Header/>
            <MainOfIndex/>
            <Footer/>
        </div>
    );
};

export default Index;